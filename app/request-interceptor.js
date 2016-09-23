(function () {
    'use strict';

    angular
      .module('myApp')
      .config(['RestangularProvider', function (RestangularProvider) {
          RestangularProvider.addFullRequestInterceptor(function (element, operation, what, url, headers, params) {

              if (operation == 'getList') {

                  // Custom pagination params
                  if (params._page) {
                      params._start = (params._page - 1) * params._perPage;
                      params._end = params._page * params._perPage;
                  }

                  delete params._page;
                  delete params._perPage;

                  // Custom sort params
                  if (params._sortField) {
                      params._sort = params._sortField;
                      params._order = params._sortDir;
                      delete params._sortField;
                      delete params._sortDir;
                  }

                  // Custom filters
                  if (params._filters) {
                      for (var filter in params._filters) {
                          params[filter] = params._filters[filter];
                      }
                      delete params._filters;
                  }
              }

              return {params: params};
          });
      }]);
})();
