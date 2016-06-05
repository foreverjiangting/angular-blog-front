export function ListArticleDirective(Recommend) {
  'ngInject';

  let directive = {
    restrict: 'E',
    replace: 'true',
    templateUrl: '/templates/list-article.html',
    link: function (scope) {
      Recommend.get_list('article').then(function (result) {
        scope.list_items = result;
      }, function ($log) {
        $log.log("文章列表读取失败");
      });
    }
  };

  return directive;
}

export function ArticleContentDirective(Article) {
  'ngInject';

  let directive = {
    restrict: 'E',
    replace: 'true',
    templateUrl: '/templates/article-content.html',
    link: function (scope) {
      Article.get_content().then(function (result) {
        scope.article_data = result;
      }, function ($log) {
        $log.log("文章数据读取失败");
      });

    }
  };

  return directive;
}

export function ArticleSupportDirective(Article) {
  'ngInject';

  let directive = {
    restrict: 'E',
    replace: 'true',
    templateUrl: '/templates/article-support.html',
    link: function (scope) {
      Article.get_support_data().then(function (result) {
        scope.support_data = result;
        scope.users = result.users;
      }, function ($log) {
        $log.log("文章数据读取失败");
      });
    }
  };

  return directive;
}
export function ArticleLikeDirective(Article) {
  'ngInject';

  let directive = {
    restrict: 'E',
    replace: 'true',
    templateUrl: '/templates/article-like.html',
    link: function (scope) {
      Article.get_like_data().then(function (result) {
        scope.like_data = result;
      }, function ($log) {
        $log.log("文章数据读取失败");
      });
    }
  };

  return directive;
}

export function ArticleCommentDirective(Article) {
  'ngInject';

  let directive = {
    restrict: 'E',
    replace: 'true',
    templateUrl: '/templates/article-comment.html',
    link: function (scope) {
      Article.get_comment().then(function (result) {
        scope.comment_data = result;
        scope.comments = result.items;
      }, function ($log) {
        $log.log("文章数据读取失败");
      });
    }
  };

  return directive;
}








// .directive('childComment', function () {
// 	return {
// 		restrict: 'E',
// 		replace: 'true',
// 		templateUrl: '../templates/article-comment-child.html',
// 		link: function (scope, iElement, iAttrs) {
// 			scope.children = scope.$parent.comments;

// 		}
// 	};
// })
