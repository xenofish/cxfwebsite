angular.module('myAng', []);
var artController = function($scope,artData)
{
  $scope.message = "Fetching pieces.";
  artData
   .then(function(data) {
     $scope.message = data.data.length > 0 ? "" : " No pieces found...";
     $scope.art = {pieces: data.data};
  },function(e){
     $scope.message = "Something's gone wrong! Sorry!"
     console.log(e);
   });
};
var artData = function ($http) {
  return $http.get('/api/pieces');
}
var pieceController = function($scope, $attrs, $http)
{
  $scope.changePrimary=function(change,to){
    $scope.primary = 0;
    $scope.primary = change;
    $scope.type = to;
  }
  $scope.title= "Loading!"
  $scope.message = "Fetching images.";
  $http.get('/api/pieces/'+$attrs.model)
   .then(function(data) {
     $scope.primary = data.data.images[0].location;
     $scope.videosStatus = data.data.videos.length>0 ? "Videos:" : "";
     $scope.type = "image";
     $scope.message = "/api/pieces/"+$attrs.model;
     $scope.art = {info: data.data};
     $scope.title=data.data.title
  },function(e){
     $scope.message = "Something's gone wrong! Sorry!"
     console.log(e);
   });
};

angular
  .module('myAng')
  .controller('pieceController',pieceController)
  .controller('artController',artController)
  .service('artData', artData)
  .directive("ngMobileClick", [function () {
      return function (scope, elem, attrs) {
          elem.bind("touchstart click", function (e) {
              e.preventDefault();
              e.stopPropagation();

              scope.$apply(attrs["ngMobileClick"]);
          });
      }
  }]);
