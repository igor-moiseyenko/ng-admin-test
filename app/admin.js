(function () {

    var myApp = angular.module('myApp', ['ng-admin']);
    myApp.config(['NgAdminConfigurationProvider', function(nga) {

        // create an admin application
        var admin = nga.application('My First Admin');
        // more configuration here later
        // ...
        // attach the admin application to the DOM and run it
        nga.configure(admin);
    }]);
})();
