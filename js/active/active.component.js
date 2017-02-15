/**
 * Created by Administrator on 2017/2/9 0009.
 */
angular.module("active")
    .component("activeComponent",{
        templateUrl:"js/active/active.template.html",
        controller:["$scope","$http",
            function($scope,$http) {
                var that = this;
                $http.get("js/active/active.json")
                    .then(function (response) {
                        that.reslist = response.data;
                    })
            }]
    })