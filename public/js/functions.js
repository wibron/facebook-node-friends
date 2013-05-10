(function() {

    var fb = angular.module('facebook', []);
    fb.directive('profilepicture', function() {
        return function(scope, element, attr) {
            attr.$observe('profilepicture', function(compiled) {
                var temp = document.createElement('img');
                temp.src = compiled;
                temp.onload = function() {
                    element.attr('src', compiled);
                };
            });
        };
    });

}());