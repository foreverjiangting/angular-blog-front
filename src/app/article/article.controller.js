export class ArticleController {
  constructor ($scope, $log, $stateParams) {
    'ngInject';

    $log.log("ArticleController");
    // 改变最外层 div 的当前页类型标识 class
    $scope.$parent.now_page = "post";

    // 输出当前文章id
    var current_article_id = $stateParams.articleId;
    $log.log(current_article_id);
  }

}
