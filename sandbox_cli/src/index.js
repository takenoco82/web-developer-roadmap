/**
 * Sandbox
 * This is a sample.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Error from './model/Error';
import Errors from './model/Errors';
import ReadUser from './model/ReadUser';
import ReadUsers from './model/ReadUsers';
import WriteUser from './model/WriteUser';
import UsersApi from './api/UsersApi';


/**
* This_is_a_sample_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Sandbox = require('index'); // See note below*.
* var xxxSvc = new Sandbox.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Sandbox.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Sandbox.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Sandbox.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The Errors model constructor.
     * @property {module:model/Errors}
     */
    Errors,

    /**
     * The ReadUser model constructor.
     * @property {module:model/ReadUser}
     */
    ReadUser,

    /**
     * The ReadUsers model constructor.
     * @property {module:model/ReadUsers}
     */
    ReadUsers,

    /**
     * The WriteUser model constructor.
     * @property {module:model/WriteUser}
     */
    WriteUser,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi
};