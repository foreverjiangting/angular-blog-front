export class ArticleService {
  constructor ($q, $http) {
    'ngInject';


    var article_content_url = "/data-test/articleContent.json";
    var get_support_url = "/data-test/articleSupport.json";
    var get_like_url = "/data-test/articleLike.json";
    var get_comment_url = "/data-test/articleComment.json";


    return {
      get_content: function () {
        var deferred = $q.defer();
        var promise = deferred.promise;

        $http.get(article_content_url)
          .success(function (response) {
            deferred.resolve(response);
          })
          .error(function (error) {
            deferred.reject(error);
          });

        return promise;
      },
      get_support_data: function () {
        var deferred = $q.defer();
        var promise = deferred.promise;

        $http.get(get_support_url)
          .success(function (response) {
            deferred.resolve(response);
          })
          .error(function (error) {
            deferred.reject(error);
          });

        return promise;
      },
      get_like_data: function () {
        var deferred = $q.defer();
        var promise = deferred.promise;

        $http.get(get_like_url)
          .success(function (response) {
            deferred.resolve(response);
          })
          .error(function (error) {
            deferred.reject(error);
          });

        return promise;
      },
      get_comment: function () {
        var deferred = $q.defer();
        var promise = deferred.promise;

        $http.get(get_comment_url)
          .success(function (response) {
            deferred.resolve(response);
          })
          .error(function (error) {
            deferred.reject(error);
          });

        return promise;
      }
    };
  }
}
