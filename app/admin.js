(function () {
    'use strict';

    var myApp = angular.module('myApp', ['ng-admin']);
    myApp.config(['NgAdminConfigurationProvider', function(nga) {

        // create an admin application
        var admin = nga.application('My First Admin');

        // Main API endpoint
        admin.baseApiUrl('http://jsonplaceholder.typicode.com/');

        // Create a user entity. User API endpoint will be http://jsonplaceholder.typicode.com/users/:id
        var user = nga.entity('users');

        // Set the fields of the user entity list view
        user.listView().fields([
          nga.field('name'),
          nga.field('username'),
          nga.field('email')
        ]);

        // Add the user entity to the admin application
        admin.addEntity(user);

        // Create a post entity. Post API endpoint will be http://jsonplaceholder.typicode.com/posts/:id
        var post = nga.entity('posts');

        // Set the fields of the post entity list view
        post.listView().fields([
          nga.field('id'),
          nga.field('title'),
          nga.field('userId')
        ]);

        // Add the post entity to the admin application
        admin.addEntity(post);

        // attach the admin application to the DOM and run it
        nga.configure(admin);
    }]);
})();
