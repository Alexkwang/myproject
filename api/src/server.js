(function() {
  var cluster, i, logger, numCPUs;

  cluster = require("cluster");
  logger = require("./common/logger");

  numCPUs = require("os").cpus().length;

  if (cluster.isMaster) {
    i = 0;
    while (i < numCPUs) {
      cluster.fork({
        "WorkName": i
      });
      i++;
    }
    cluster.on("exit", function(worker, code, signal) {
      logger.error("worker " + worker.process.pid + " died");
      return cluster.fork();
    });
  } else {
    require("./index");
  }

}).call(this);
