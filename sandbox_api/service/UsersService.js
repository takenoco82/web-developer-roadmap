'use strict';

const users = [
  {
    "user_id": "592f11060f95a3d3d46a987a",
    "username": "alice",
    "email": "alice@example.com"
  }, {
    "user_id": "dc3ad304370b2aeb3fa38409",
    "username": "bob",
    "email": "bob@example.com"
  }
];

/**
 * Delete the user.
 *
 *
 * user_id String
 * no response value expected for this operation
 **/
exports.delete_user = function (user_id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * Get the user.
 *
 *
 * user_id String
 * returns ReadUser
 **/
exports.get_user = function (user_id) {
  return new Promise(function (resolve, reject) {
    const user = users.find(item => item.user_id === user_id);
    if (user !== undefined) {
      resolve(user);
    } else {
      reject(null, 404);
    }
  });
}


/**
 * Lists users.
 *
 *
 * sort String  (optional)
 * returns ReadUsers
 **/
exports.get_users = function (sort) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "users": users
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new user.
 *
 *
 * body WriteUser Created user object
 * returns ReadUser
 **/
exports.post_user = function (body) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "user_id": "592f11060f95a3d3d46a987a",
      "username": "alice",
      "email": "alice@example.com"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update the user.
 *
 *
 * user_id String
 * body WriteUser Updated user object
 * returns ReadUser
 **/
exports.put_user = function (user_id, body) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "user_id": "592f11060f95a3d3d46a987a",
      "username": "alice",
      "email": "alice@example.com"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

