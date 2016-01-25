var app = angular.module("app",[])

app.controller('MainController', function($scope) {
  $scope.number = 5

  $scope.enterCount = 0

  $scope.pickRandomNumber = function() {
    $scope.number = Math.floor(Math.random() * 10) + 1
  }

  $scope.reverseText = function() {
    $scope.textreverse = $scope.textreverse.split("").reverse().join("")
  }


  $scope.replay = function() {
    var displayPrevColor = function() {
      // do some logic to change color
      // if done replay colors
        replaying = false;
      // else
        $timeout(dispalyPrevColor, 1000);
      // end if/else
    };
    if (!replaying) {
      replaying = true;
      // This timeout starts the timeout loop
      $timeout(function() { displayPrevColor(); }, 500);
    }
  };


  $scope.favoriteForm = {};
  $scope.submitFav = function() {
    var favPi = parseFloat($scope.favoriteForm.favoritePie);
    // Special output if the favorite pie is a certain number
    if (!isNaN(favPi) && favPi >= 3.14 && favPi <= 3.142) {
      $scope.favoriteForm.favoritePie = "\u03A0";
    }
    console.log("Your favorite pie is: ", $scope.favoriteForm.favoritePie);
  };  
});


function randomColor() {
   var x = Math.round(0xffffff * Math.random()).toString(16);
   var y = (6 - x.length);
   var z = "000000";
   var z1 = z.substring(0, y);
   var color = "#" + z1 + x;
   return color;
 }

 var replaying = false;
