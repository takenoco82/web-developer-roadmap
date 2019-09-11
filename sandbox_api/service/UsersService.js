'use strict';


/**
 * Delete the user.
 * 
 *
 * user_id String 
 * no response value expected for this operation
 **/
exports.delete_user = function(user_id) {
  return new Promise(function(resolve, reject) {
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
exports.get_user = function(user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user_id" : "592f11060f95a3d3d46a987a",
  "username" : "alice",
  "email" : "alice@example.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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
exports.get_users = function(sort) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "users" : [ {
    "user_id" : "592f11060f95a3d3d46a987a",
    "username" : "alice",
    "email" : "alice@example.com"
  }, {
    "user_id" : "592f11060f95a3d3d46a987a",
    "username" : "alice",
    "email" : "alice@example.com"
  } ]
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
exports.post_user = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user_id" : "592f11060f95a3d3d46a987a",
  "username" : "alice",
  "email" : "alice@example.com"
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
exports.put_user = function(user_id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user_id" : "592f11060f95a3d3d46a987a",
  "username" : "alice",
  "email" : "alice@example.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

