// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by app-home.js.
import { name as packageName } from "meteor/app-home";

// Write your tests here!
// Here is an example.
Tinytest.add('app-home - example', function (test) {
  test.equal(packageName, "app-home");
});
