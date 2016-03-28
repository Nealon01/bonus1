// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

var app = angular.module('app', []);
app.controller('ctrl', function($scope) {
	$( document ).ready(function() {
		$.ajax({
			method: "GET",
			url: "http://www.mattbowytz.com/simple_api.json?data=all",
			dataType: "json"
		})
		.done(function (msg) {
			$scope.data = msg.data.interests.concat(msg.data.programming);
			console.log($scope.data);
		});
	});
	
	 $scope.googleResult = function (d) {
		 window.open("https://www.google.com/search?q=" + d, '_blank');
	 };
});