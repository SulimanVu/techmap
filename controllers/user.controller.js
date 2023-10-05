const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.userController = {
  signUp: async (req, res) => {
    const { name, email, login, password, role, phone, rating } = req.body;
    try {
      const candidate = await User.findOne({ login: login });
      if (candidate) {
        return res
          .status(401)
          .json({ error: "Такой пользователь уже существует" });
      }

      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );

      const user = await User.create({
        name,
        email,
        login,
        phone,
        password: hash,
        role,
        rating,
      });

      res.json(user);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  signIn: async (req, res) => {
    const { login, password } = req.body;
    try {
      const candidate = await User.findOne({ login });

      if (!candidate) {
        return res.status(401).json({ error: "Неверный логин или пароль" });
      }

      const valid = await bcrypt.compare(password, candidate.password);

      if (!valid) {
        return res.status(401).json({ error: "Неверный логин или пароль" });
      }

      const payload = {
        id: candidate._id,
      };
      const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
        expiresIn: "24h",
      });
      return res.json(token);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  getAllUser: async (req, res) => {
    try {
      const data = await User.find();
      res.json(data);
    } catch (error) {
      return res.status(404).json(error.toString());
    }
  },
};
