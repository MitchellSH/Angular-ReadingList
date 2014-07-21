(function(){
'use strict';

  var app = angular.module('readingList', [ ]);

  app.controller('ReadingListController', function(){
    this.books = books;
    this.genres = genres;
  });

  app.directive('bookList', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/app.html'
    };

  });
  app.directive('bookGenres', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/book-genres.html'
    };

  });
  app.directive('bookCovers', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/book-covers.html',
      replace: true
    };

  });

  app.directive('reviewForm', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/review-form.html',
      replace: true,
      controller: function(){
        this.showForm = false;
        this.book = {genres:{}};

        this.addReview = function(form){
          books.push(this.book);
          this.book = {genres:{}};
          form.$setPristine();
        };
      },
      controllerAs: 'reviewFormCtrl',
      scope: {
        books: '=',
        genres: '='
      }
    };
  });

  var genres = [ 'fable', 'fantasy', 'fiction', 'folklore', 'horror', 'humor', 'legend', 'metafiction', 'mystery', 'mythology', 'non-fiction', 'poetry' ];

  var books = [
    {
      title: 'Halo: Silentium: Book Three of the Forerunner Saga',
      author: 'Greg Bear',
      isbn: '0765323982',
      review: 'Silentium is an intense read-it only clocks in at over 300 pages, but it forces you to read slowly.',
      rating: 5,
      genres: { 'non-fiction': true, fantasy: true }
    },{
      title: 'Halo: Cryptum: Book One of the Forerunner Saga',
      author: 'Greg Bear',
      isbn: '0765323966',
      review: 'Awesome start to the Saga!',
      rating: 5,
      genres: { 'non-fiction': true, fantasy: true }
    },{
      title: 'Halo: Primordium: Book Two of the Forerunner Saga',
      author: 'Greg Bear',
      isbn: '0765323974',
      review: 'Better than the first!',
      rating: 5,
      genres: { 'non-fiction': true, fantasy: true }
    },{
      title: 'Halo: Mortal Dictata',
      author: 'Karen Traviss',
      isbn: '0765323958',
      review: "If you're a Halo Fan and you've read the previous books in this series, you'll love this book.",
      rating: 4,
      genres: { 'non-fiction': true, fantasy: true }
    },{
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      isbn: '0743273567',
      review: 'Great story, interesting and complicated characters, and beautiful writing.',
      rating: 4,
      genres: { fiction: true }
    }
  ];

})();
