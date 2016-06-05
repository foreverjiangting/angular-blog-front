/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { ArticleController } from  './article/article.controller';
import { RecommendController } from  './recommend/recommend.controller';
import { RecommendService } from './recommend/recommend.service';
import { ArticleService } from './article/article.service';
import { LeftAsideDirective, RecommendNavDirective, ListRecommendDirective } from '../app/recommend/recommend.directive';
import { ListArticleDirective, ArticleContentDirective, ArticleSupportDirective,
  ArticleLikeDirective, ArticleCommentDirective } from './article/article.directive';

angular.module('webApp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('Recommend', RecommendService)
  .service('Article', ArticleService)
  .controller('MainController', MainController)
  .controller('ArticleController', ArticleController)
  .controller('RecommendController', RecommendController)
  .directive('leftAside', LeftAsideDirective)
  .directive('recommendNav', RecommendNavDirective)
  .directive('listRecommend', ListRecommendDirective)
  .directive('listArticle', ListArticleDirective)
  .directive('articleContent', ArticleContentDirective)
  .directive('articleSupport', ArticleSupportDirective)
  .directive('articleLike', ArticleLikeDirective)
  .directive('articleComment', ArticleCommentDirective)

  .filter('trustHtml', function ($sce) {
    return function (text) {
      return $sce.trustAsHtml(text);
    }
  });

