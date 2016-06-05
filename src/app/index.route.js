export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    // .state('home', {
    //   url: '/home',
    //   templateUrl: 'app/main/main.html',
    //   controller: 'MainController',
    //   controllerAs: 'main'
    // })
    .state("rank", {
      url: '/',
      templateUrl: '/app/recommend/recommend.template.html',
      controller: 'RecommendController',
      controllerAs: 'RecommendController'
    })
    .state("article", {
      url: '/article/:articleId',
      templateUrl: '/app/article/article.html',
      controller: 'ArticleController',
      controllerAs: 'ArticleController'
    });

  $urlRouterProvider.otherwise('/');
}
