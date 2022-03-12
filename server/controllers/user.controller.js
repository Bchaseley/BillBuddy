const { User } = require('../models/user.model');

module.exports = {

  index(req, res) {
    res.json({
      message: "Hello World"
    });
  },

  register (req, res) {
    User.create(req.body)
      .then(user => {
        const userToken = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
        res.cookie("usertoken", userToken, { httpOnly: true }).json({ msg: "success!", user: user });
        console.log('hello');
      })
      
      .catch(err => res.json(err));
  },

  login(req, res) {
    const user = User.findOne({ email: req.body.email });
    if (user === null) {
      return res.sendStatus(400);
    }
    const correctPassword = bcrypt.compare(req.body.password, user.password);
    if (!correctPassword) {
      return res.sendStatus(400);
    }
    const userToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
    res.cookie("usertoken", userToken, secret, { httpOnly: true }).json({ msg: "success!" });
  },

  getUser(req, res) {
    User.find({ id: req.query.userId })
      .then(user => res.json(user))
      .catch(err => res.json(err))
  },

  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(updatedUser => res.json(updatedUser))
      .catch(err => res.json(err))
  },

  deleteUser(req, res) {
    User.deleteOne({ _id: req.params.id })
      .then(deleteConfirmation => res.json(deleteConfirmation))
      .catch(err => res.json(err))
  }


}
