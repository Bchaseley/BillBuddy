const { Trans } = require('../models/trans.model');

module.exports = {

  addTrans(req, res) {
    console.log(req.body);
    Trans.create(req.body)
      .then(trans => res.json(trans))
      .catch(err => res.status(400).json(err));
  },

  getTrans(req, res) {
    Trans.find({ id: req.query.transId })
      .then(trans => res.json(trans))
      .catch(err => res.json(err))
  },

  getUserTrans(req, res) {
    Trans.find({})
      .then(trans => res.json(trans))
      .catch(err => res.json(err))
  },

  updateTrans(req, res) {
    Trans.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(updatedTrans => res.json(updatedTrans))
      .catch(err => res.json(err))
  },

  deleteTrans(req, res) {
    Trans.deleteOne({ _id: req.params.id })
      .then(deleteConfirmation => res.json(deleteConfirmation))
      .catch(err => res.json(err))
  }


}