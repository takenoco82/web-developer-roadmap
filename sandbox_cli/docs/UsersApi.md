# Sandbox.UsersApi

All URIs are relative to *http://localhost:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUser**](UsersApi.md#deleteUser) | **DELETE** /users/{user_id} | Delete the user.
[**getUser**](UsersApi.md#getUser) | **GET** /users/{user_id} | Get the user.
[**getUsers**](UsersApi.md#getUsers) | **GET** /users | Lists users.
[**postUser**](UsersApi.md#postUser) | **POST** /users | Create a new user.
[**putUser**](UsersApi.md#putUser) | **PUT** /users/{user_id} | Update the user.


<a name="deleteUser"></a>
# **deleteUser**
> deleteUser(userId)

Delete the user.



### Example
```javascript
var Sandbox = require('sandbox');
var defaultClient = Sandbox.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Sandbox.UsersApi();

var userId = "\"592f11060f95a3d3d46a987a\""; // String | 

apiInstance.deleteUser(userId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUser"></a>
# **getUser**
> ReadUser getUser(userId)

Get the user.



### Example
```javascript
var Sandbox = require('sandbox');
var defaultClient = Sandbox.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Sandbox.UsersApi();

var userId = "\"592f11060f95a3d3d46a987a\""; // String | 

apiInstance.getUser(userId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

[**ReadUser**](ReadUser.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUsers"></a>
# **getUsers**
> ReadUsers getUsers(opts)

Lists users.



### Example
```javascript
var Sandbox = require('sandbox');
var defaultClient = Sandbox.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Sandbox.UsersApi();

var opts = { 
  'sort': "sort_example" // String | 
};
apiInstance.getUsers(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | **String**|  | [optional] 

### Return type

[**ReadUsers**](ReadUsers.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postUser"></a>
# **postUser**
> ReadUser postUser(body)

Create a new user.



### Example
```javascript
var Sandbox = require('sandbox');
var defaultClient = Sandbox.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Sandbox.UsersApi();

var body = new Sandbox.WriteUser(); // WriteUser | Created user object

apiInstance.postUser(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WriteUser**](WriteUser.md)| Created user object | 

### Return type

[**ReadUser**](ReadUser.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="putUser"></a>
# **putUser**
> ReadUser putUser(userIdbody)

Update the user.



### Example
```javascript
var Sandbox = require('sandbox');
var defaultClient = Sandbox.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Sandbox.UsersApi();

var userId = "\"592f11060f95a3d3d46a987a\""; // String | 

var body = new Sandbox.WriteUser(); // WriteUser | Updated user object

apiInstance.putUser(userIdbody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **body** | [**WriteUser**](WriteUser.md)| Updated user object | 

### Return type

[**ReadUser**](ReadUser.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

