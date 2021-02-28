"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

Route.post("login", "UserController.login");
Route.post("signup", "UserController.signup");
Route.post("forgotten-password", "UserController.forgottenPassword");
Route.post("reset-password", "UserController.resetPassword");

Route.get("whoami", "UserController.whoami").middleware(["auth:jwt"]);
Route.resource("basic-services", "BasicServiceController").middleware([
  "auth:jwt",
]);
Route.post(
  "basic-services/:id/subscribe",
  "BasicServiceController.subscribe"
).middleware(["auth:jwt"]);
Route.post(
  "basic-services/:id/unsubscribe",
  "BasicServiceController.unsubscribe"
).middleware(["auth:jwt"]);
