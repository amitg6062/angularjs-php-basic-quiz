var App = angular.module('ngApp', ['ngSanitize']
	).config(function() {

}).run(function() {
});

App.controller('QuizController',['$scope', function($scope,$interval){
	var vm = this;
	vm.questionList = [
		{
			Questions : [
			{
				Question : 'Nunc gravida neque nec neque rutrum elementum.',
				Options : [
					'vitae',
					'turpis',
					'egestas',
					'elementum'
				],
				Points : [
					1,
					2,
					3,
					4
				]
			},
			{
				Question : 'Fusce euismod nisi vitae magna faucibus dignissim vitae in lectus.',
				Options : [
					'blap',
					'bluri',
					'bleep',
					'bramp'
				],
				Points : [
					1,
					2,
					3,
					4
				]
			},
			{
				Question : 'Curabitur bibendum velit in magna scelerisque, ac sodales nisl ornare.',
				Options : [
					'Nullam',
					'mollis',
					'lacus',
					'scelerisque'
				],
				Points : [
					1,
					2,
					3,
					4
				]
			},
			{
				Question : 'Vestibulum porta neque vitae turpis egestas elementum.',
				Options : [
					'Integer',
					'sodales',
					'finibus',
					'ultricies'
				],
				Points : [
					1,
					2,
					3,
					4
				]
			},
			{
				Question : 'Nam tempus ante pellentesque, molestie mi id, fringilla velit.',
				Options : [
					'Suspendisse',
					'hendrerit',
					'volutpat',
					'scelerisque'
				],
				Points : [
					1,
					2,
					3,
					4
				]
			},
			{
				Question : 'Nullam non risus in nisi sollicitudin consequat.',
				Options : [
					'Quisque',
					'porttitor',
					'tempor',
					'vulputate'
				],
				Points : [
					1,
					2,
					3,
					4
				]
			},
			{
				Question : 'Etiam ultricies sem ac ipsum venenatis molestie.',
				Options : [
					'Etiam',
					'blandit',
					'porttitor',
					'sollicitudin'
				],
				Points : [
					1,
					2,
					3,
					4
				]
			},
			{
				Question : 'Proin vitae sem consequat, dapibus elit sit amet, malesuada odio.',
				Options : [
					'Pellentesque',
					'scelerisque',
					'elementum',
					'Nullam'
				],
				Points : [
					1,
					2,
					3,
					4
				]
			}
			]
		}
	];

	vm.resetQuiz = function(){
		vm.selections = [null,null,null,null,null,null,null,null];
                vm.Qtt = [null,null,null,null,null,null,null,null];
		vm.currQuestion = 0;
	};
	vm.resetQuiz();
	
	$scope.Qt = [10,10,10,40,50,60,10,20];
       
        
	vm.makeSelection = function(questionNo,answerNo,choice){
		console.log("Question number: " + (questionNo+1) + ", Option number: " + (answerNo+1) + ", " + choice);
		vm.selections[vm.currQuestion] = answerNo;
		vm.allowNav = true;
		console.log(vm.selections);
	};
	
	vm.previousQuestion = function(){
		vm.currQuestion--;
		if(vm.selections[vm.currQuestion] !== null){
			vm.allowNav = true;
		} else {
			vm.allowNav = false;
		}
	};
	vm.nextQuestion = function(questionTimeTaken){
          
                // main logic start 
                clearInterval($scope.timer);
                vm.Qtt[vm.currQuestion] = questionTimeTaken;
                console.log("Time Taken : " + questionTimeTaken);
                console.log(vm.Qtt);
		vm.currQuestion++;
                $scope.countDown =  $scope.Qt[vm.currQuestion];
                vm.countController($scope);
                // main logic ends
                
		if(vm.selections[vm.currQuestion] !== null){
			vm.allowNav = true;
		} else {
			vm.allowNav = false;
		}
	};

        vm.countController = function ($scope) {
            $scope.timer = setInterval(function () {
                $scope.countDown--;
//                console.log($scope.countDown);
                if($scope.countDown <= 0){
                    clearInterval($scope.timer);
                    vm.nextQuestion($scope.countDown);
                }else{
                    $scope.$apply();
                }
            }, 1000);
        };
}]);