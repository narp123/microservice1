var indexController = {};

indexController.home = function(req, res){
  res.send({ status: true });
};

module.exports = indexController;
