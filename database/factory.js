"use strict";

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

const Factory = use("Factory");

Factory.blueprint("App/Models/User", async (faker) => {
  return {
    firstName: faker.first(),
    lastName: faker.last(),
    popAcceuilNumber: faker.fbid(),
    isVolunteer: true,
    isAdmin: true,
    email: faker.email(),
    password: "password",
  };
});

Factory.blueprint("App/Models/BasicService", async (faker) => {
  return {
    startAt: faker.date(),
    endAt: faker.date(),
    maxPeople: faker.integer({ min: 1, max: 50 }),
    isClosed: faker.bool(),
  };
});
