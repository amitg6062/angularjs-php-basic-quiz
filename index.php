<!DOCTYPE html>
<html lang="en" >

    <head>
        <meta charset="UTF-8">
        <title>AngularJS Quiz</title>



        <link rel="stylesheet" href="http://localhost/angularjs-quiz/css/style.css">


    </head>

    <body>

        <div ng-app="ngApp" ng-controller="QuizController as quizCtrl">
            <div>{{countDown}}</div>
            <ul>
                <li ng-repeat="quizItem in quizCtrl.questionList[0].Questions track by $index" ng-init="parentIndex = $index" ng-show="$index == quizCtrl.currQuestion">
                    <h3 class="single-question" ng-bind-html="quizItem.Question"></h3>
                    <ul class="choices">
                        <li ng-repeat="answer in quizItem.Options" ng-click="quizCtrl.makeSelection($parent.$index, $index, answer)" ng-class="{'selected' : quizCtrl.selections[$parent.$index] == $index}">{{ answer}}</li>
                    </ul>
                </li>
            </ul>
            <!--<span class="quizNav" ng-click="quizCtrl.previousQuestion()" ng-class="{'enabled' : quizCtrl.currQuestion !== 0}">Previous Question</span>-->
            <span class="quizNav" ng-click="quizCtrl.nextQuestion(countDown)" ng-class="{'enabled' : quizCtrl.currQuestion < (quizCtrl.questionList[0].Questions.length - 1) && quizCtrl.allowNav == true}" ng-hide="quizCtrl.currQuestion == (quizCtrl.questionList[0].Questions.length - 1)">Next Question</span>
            <span class="quizNav" ng-click="quizCtrl.nextQuestion(countDown)" ng-show="quizCtrl.currQuestion == (quizCtrl.questionList[0].Questions.length - 1)">Finish Quiz</span>

            <h5 ng-click="quizCtrl.resetQuiz()">Reset Quiz</h5>
        </div>
        <script src='http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.2/angular.min.js'></script>
        <script src='http://ajax.googleapis.com/ajax/libs/angularjs/1.5.2/angular-sanitize.min.js'></script>



        <script  src="http://localhost/angularjs-quiz/js/index.js"></script>




    </body>

</html>
