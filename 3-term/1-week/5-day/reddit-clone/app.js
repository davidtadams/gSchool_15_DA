var app = angular.module("GOTchars",['ngAnimate'])

app.controller('GOTController', function($scope) {
  $scope.sortOptions = [
    {name: 'Votes (asc)', selector: '-upvotes'},
    {name: 'Votes (desc)', selector: '+upvotes'},
    {name: 'Date (asc)', selector: '-date_normal'},
    {name: 'Date (desc)', selector: '+date_normal'},
    {name: 'Title (asc)', selector: '-title'},
    {name: 'Title (desc)', selector: '+title'}
  ]
  $scope.view = {};
  $scope.view.posts = GOTdata;
  $scope.view.sortby = '-upvotes';
  $scope.view.upVoteStatus = 0;
  $scope.view.showNewPost = false;

  $scope.setSortSelected = function(item) {
    $scope.view.sortby = item;
  }

  $scope.upVote = function(post) {
    post.upvotes += 1;
  }

  $scope.downVote = function(post) {
    post.upvotes -= 1;
  }

  $scope.toggleComments = function(post) {
    post.showNewComment = false;
    if (post.showComments) {
      post.showComments = false;
    } else {
      post.showComments = true;
    }
  }

  $scope.toggleNewComment = function(post) {
    post.showComments = false;
    if (post.showNewComment) {
      post.showNewComment = false;
    } else {
      post.showNewComment = true;
    }
  }

  $scope.addNewComment = function(post, comment) {
    post.comments.push({
      author: comment.author,
      text: comment.text
    });
    post.showComments = true;
    post.showNewComment = false;
    comment.author = '';
    comment.text = '';
  }

  $scope.toggleNewPost = function() {
    $scope.view.showNewPost ? $scope.view.showNewPost = false : $scope.view.showNewPost = true;
  }

  $scope.createNewPost = function(newPost) {
    $scope.view.posts.push({
      title: newPost.title,
      author: newPost.author,
      description: newPost.description,
      image_url: newPost.image_url,
      date_normal: new Date(),
      date_created: moment().calendar(),
      upvotes: 0,
      comments: [],
      showComments: false,
      showNewComment: false
    });
    $scope.view.showNewPost = false;
    newPost.title = '';
    newPost.author = '';
    newPost.description = '';
    newPost.image_url = '';
    $scope.createPostForm.$setUntouched();
  }

  $scope.checkFormError = function(formField) {
    return formField.$touched && formField.$invalid;
  }

});
