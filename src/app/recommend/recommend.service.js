export class RecommendService {
  constructor ($q, $http) {
    'ngInject';

    var recommend_nav_url = "/data-test/recommendNav.json";
    var recommend_list_url = "/data-test/listRecommend.json";
    var article_list_url = "/data-test/listArticle.json";

    return {
      get_nav: function () {
        var deferred = $q.defer();
        var promise = deferred.promise;

        $http.get(recommend_nav_url)
          .success(function(response) {
            deferred.resolve(response);
          })
          .error(function(error) {
            deferred.reject(error);
          });

        return promise;
      },
      get_list: function (_type) {
        var _url;
        if (_type === 'recommend') {
          _url = recommend_list_url;
        } else {
          _url = article_list_url;
        }
        var deferred = $q.defer();
        var promise = deferred.promise;

        $http.get(_url)
          .success(function(response) {
            deferred.resolve(response);
          })
          .error(function(error) {
            deferred.reject(error);
          });

        return promise;
      }
    }
  }

}
