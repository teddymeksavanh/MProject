// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by app-connexion.js.
import { name as packageName } from "meteor/app-connexion";

// Write your tests here!
// Here is an example.
Tinytest.add('app-connexion - example', function (test) {
  test.equal(packageName, "app-connexion");
});
