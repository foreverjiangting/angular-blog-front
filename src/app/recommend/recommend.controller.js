/**
 * Created by llissery on 2016/6/5.
 */
export class RecommendController {
  constructor ($scope, $log) {
    'ngInject';

    $log.log("RecommendController");
    // 改变最外层 div 的当前页类型标识 class
    $scope.$parent.now_page = "index";
  }

}
