var myApp = angular.module('myApp', []);



myApp.controller("WelcomeController",['$scope', '$http', function($scope, $http){
    $scope.note = {};
    $scope.nameArray = [];

    //POST
    $scope.clickButton = function(kittyFooFoo){
        $http.post('/people', kittyFooFoo).then(function(response){
            $scope.getPeople();
        });
        $scope.note = {};
    };

    //GET
    $scope.getPeople = function(){
        $http.get('/people').then(function(response){
            $scope.nameArray = response.data;
        });
    };

    $scope.getPeople();
}]);

//var myApp = angular.module('myApp', []);
//
//myApp.controller("FirstController", ['$scope', '$http', function($scope, $http){
//    $scope.values = {};
//    $scope.nameArray = [];
//
////POST
//$scope.clickButton = function(kittyFooFoo){
//    $http.post('/data', kittyFooFoo).then(function(response){
//        console.log("Post values", values);
//        $scope.getPeople();
//    });
//};
//    //GET
//    $scope.getPeople = function(){
//        $http.get('/data').then(function(response){
//            $scope.nameArray = response.data;
//        });
//    };
//
//    $scope.getPeople();
//
//}]);

//$(document).ready(function(){
//    $("#entryForm").submit(function(event){
//        event.preventDefault();
//        var values = {};
//
//        $.each($("#entryForm").serializeArray(), function(i, field){
//            values[field.name] = field.value;
//        });
//
//        console.log(values);
//
//        $.ajax({
//            type: "POST",
//            url: "/data",
//            data: values,
//            success: function(data){
//                console.log("DB got the data");
//                getData();
//
//
//            }
//        });
//        //$("#input").empty(); This is not working
//    });
//});

//function sendData(){
//    event.preventDefault();
//    var values = {};
//
//    $.each($(this).serializeArray(), function(i, field){
//        values[field.name] = field.value;
//    });
//
//    $.ajax({
//        type: "POST",
//        url: "/data",
//        data: values,
//        success: function(data){
//            console.log("DB got the data");
//            getData();
//        }
//    });
//}
//
//function getData(){
//    $.ajax({
//        type: "GET",
//        url: "/data",
//        success: function(data){
//            updateDom(data);
//        }
//    });
//}
//
//
//function updateDom(data) {
//    $("#entryForm").val('');
//    $("#messageContainer").empty();
//
//    for (var i = 0; i < data.length; i++) {
//        var el = "<div class='well col-md-6'>" +
//            "<p>" + data[i].name + "<p>" +
//            "<p>" + data[i].message + "<p>" +
//            "</div>";
//
//        $("#messageContainer").append(el);
//    }
//}





