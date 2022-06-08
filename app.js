(
    function(){
        'use strict';
         
        angular.module("LunchChecker",[]).
        controller("LunchCheckController",LunchCheckController);

        LunchCheckController.$inject = ["$scope"];
        function LunchCheckController($scope){
            $scope.name = "";
            $scope.status = null;
            $scope.statusBasedColor = null;
            $scope.statusOfUser = function(){
                $scope.status = null;
                var listOfDishes = $scope.name.split(",");
                var filteredArray = listOfDishes.filter(function(value){
                    if(value.toString().trim() !== ''){
                        return (value.toString().trim());
                    }
                });
                console.log(filteredArray)
                if(filteredArray.length < 1){
                    $scope.status = "Please enter data first !";
                    $scope.statusBasedColor = "danger";
                }else if(filteredArray.length <= 3){
                    $scope.status = "Enjoy !";
                    $scope.statusBasedColor = "success";
                }else if(filteredArray.length > 3){
                    $scope.status = "Too much !";
                    $scope.statusBasedColor = "success";
                }
            };
        };
    }
)();