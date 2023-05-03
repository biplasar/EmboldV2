'use strict';

const controller = require('../controllers/appController.js');

module.exports = (app) => {
  app.route('/repositories').get(controller.getRepositories);
  app.route('/repositories/:uid/issues').get(controller.getRepositoryIssueList);
  //app.route('/repositories/:uid/pdfreport').get(controller.getReport);
  app.route('/repositories/:uid/scan').post(controller.performScan);
  //app.route('/report').get(controller.getReport);
}