export function LeftAsideDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    replace: 'true',
    templateUrl: '/app/recommend/left-aside.html',
    link: function (scope) {
      scope.img_url = "background-image: url('../assets/images/bg.jpg')";
      scope.aside_title = "大家的博客";
      scope.aside_sub_title = "学习的路，现在开始";
      scope.aside_description = "Java程序猿自己给自己打造的博客网站";
    }
  };

  return directive;
}

export function RecommendNavDirective(Recommend) {
  'ngInject';

  let directive = {
    restrict: 'E',
    replace: 'true',
    templateUrl: '/app/recommend/recommend-nav.html',
    link: function (scope) {
      Recommend.get_nav().then(function (result) {
        scope.items = result;
      }, function ($log) {
        $log.log("上方分类导航读取失败");
      });
    }
  };

  return directive;
}

export function ListRecommendDirective(Recommend) {
  'ngInject';

  let directive = {
    restrict: 'E',
    replace: 'true',
    templateUrl: '/app/recommend/list-recommend.template.html',
    link: function (scope) {
      Recommend.get_list('recommend').then(function (result) {
        scope.recommend_items = result;
      }, function (error, $log) {
        $log.log("推荐文章读取失败");
      });
    }
  };

  return directive;
}
