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

    fb.filter('startPosition', function() {
        return function(input, position) {
            position = parseInt(position, 10);
            return input.slice(position);
        }
    });

    var opts = { lines: 15, length: 5, width: 4, radius: 5, corners: 1, rotate: 0, direction: 1, color: '#333', speed: 2.1, trail: 60, shadow: false, hwaccel: false, className: 'spinner', zIndex: 2e9, top: 'auto', left: 'auto' },
    target = document.getElementById('spinner');
    new Spinner(opts).spin(target);

}());