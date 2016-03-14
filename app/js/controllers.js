'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);


//test controller - to play with
phonecatControllers.controller('phonesCtrl', function($scope) {
    $scope.filterName = ""; //BIND VALUE TO MODEL
    //$scope.lastName = "Doe"; //BIND VALUE TO MODEL
    $scope.testRepeat = [
        {name: 'Ronald', country:'Holland'},
        {name: 'BLAAT', country:'USA'},
        {name: 'BLAAT2', country:'USA'}
    ];
});

phonecatControllers.controller('phonesHttp', function($scope, $http) {
    $http({
        method : "GET",
        url : "http://www.w3schools.com/angular/customers.php"
    }).then(function mySucces(response) {
        //console.log(response.data)
        console.log(response)
        $scope.retVal = response.data.records;
    }, function myError(response) {
        $scope.retStatusCode = response.statusText;
    });
});

phonecatControllers.controller('testService', function($scope, calc) {
    $scope.multiply = calc.myFunc(10);
});

phonecatControllers.controller('testAdditem', function($scope){
    $scope.products = ["Milk", "Bread", "Cheese"];
    $scope.addItem = function () {
        $scope.products.push($scope.addMe);
    }
});




phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);
