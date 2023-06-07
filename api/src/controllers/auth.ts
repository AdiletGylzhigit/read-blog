const { getDb } = require("../db");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  // CHECK EXISTING USER
  const db = await getDb();
  db.Users.findOne({
    $or: [{ email: req.body.email }, { phone: req.body.phone }],
  })
    .then((data) => {
      if (data.length) return res.status(409).json("User already exists!");

      // Hash the password and create a user
      const salt = bcrypt.getSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);

      db.Users.insert({
        username: req.body.username,
        email: req.body.username,
        hash: hash,
      }).then(() => {
        return res.status(200).json('User has been created!')
      })
      .catch(err => {
        return res.json(err)
      })
    })
    .catch((err) => {
      return res.json(err);
    });
};

const login = (req, res) => {
  res.json("from controller");
};

const logout = (req, res) => {
  res.json("from controller");
};

module.exports = { register, login, logout };
export {};
