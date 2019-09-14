'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.delete_user = function delete_user(req, res, next) {
  var user_id = req.swagger.params['user_id'].value;
  Users.delete_user(user_id)
    .then(payload => {
      utils.writeJson(res, payload, 204);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_user = function get_user(req, res, next) {
  var user_id = req.swagger.params['user_id'].value;
  Users.get_user(user_id)
    .then(payload => {
      utils.writeJson(res, payload, 200);
    })
    .catch(({ code, payload }) => {
      console.log(`code=${code}, payload=${payload}`);
      utils.writeJson(res, payload, code);
    });
};

module.exports.get_users = function get_users(req, res, next) {
  var sort = req.swagger.params['sort'].value;
  Users.get_users(sort)
    .then(payload => {
      utils.writeJson(res, payload, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.post_user = function post_user(req, res, next) {
  var body = req.swagger.params['body'].value;
  Users.post_user(body)
    .then(payload => {
      utils.writeJson(res, payload, 201);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.put_user = function put_user(req, res, next) {
  var user_id = req.swagger.params['user_id'].value;
  var body = req.swagger.params['body'].value;
  Users.put_user(user_id, body)
    .then(payload => {
      utils.writeJson(res, payload, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
