'use strict';

angular.module('myApp.controllers', [])
  .controller('homeCtrl', homeCtrl);

function homeCtrl() {

  // List of all song notes structured by song, right/left hand, and note. Note of 0 is empty.
  var songs = [
    {
      name: 'The New C',
      right: [40, 40, 40, 40, 40, 40, 40, 40, 0, 0, 0, 0, 0, 0, 0, 0, 40, 40, 40, 40, 0, 0, 0, 0, 40, 40, 0, 0, 40, 40, 0, 0],
      left: [0, 0, 0, 0, 0, 0, 0, 0, 40, 40, 40, 40, 40, 40, 40, 40, 0, 0, 0, 0, 40, 40, 40, 40, 0, 0, 40, 40, 0, 0, 40, 40]
    },
    {
      name: 'Sun and Moon',
      right: [40, 40, 40, 0, 0, 0, 40, 0, 40, 40, 0, 40, 0, 40, 0, 40, 0, 40, 0],
      left: [0, 0, 0, 40, 40, 40, 0, 40, 0, 0, 40, 0, 40, 0, 40, 0, 40, 0, 40]
    },
    {
      name: 'The New D',
      right: [40, 42, 40, 42, 40, 42, 40, 42, 40, 42, 40, 42, 40, 42, 40, 40, 40, 40, 0, 0, 0, 0],
      left: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 40, 40, 40]
    },
    {
      name: 'Seedy Song',
      right: [40, 40, 40, 40, 42, 42, 42, 42, 40, 40, 40, 40, 42, 42, 42, 42, 40, 42, 42, 42, 40, 40, 40, 42, 40, 42, 40],
      left: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      name: 'Hand Switch',
      right: [0, 42, 0, 42, 0, 0, 42, 0, 42, 0, 42, 42, 0, 0, 0, 42, 42, 42, 0, 42, 42, 0, 0],
      left: [40, 0, 40, 0, 40, 40, 0, 40, 0, 40, 0, 0, 40, 40, 40, 0, 0, 0, 40, 0, 0, 40, 40]
    },
    {
      name: 'The New E',
      right: [40, 40, 42, 42, 44, 44, 42, 42, 40, 40, 42, 42, 44, 44, 42, 42, 44, 40, 44, 42, 44, 40, 40, 40, 42, 44, 40, 44, 40],
      left: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      name: 'Mary had a Little Lamb',
      right: [44, 42, 40, 42, 44, 44, 44, 42, 42, 42, 44, 44, 44, 44, 42, 40, 42, 44, 44, 44, 40, 42, 42, 44, 42, 40],
      left: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      name: 'Yankee Doodle',
      right: [40, 40, 42, 44, 40, 44, 42, 0, 40, 40, 42, 44, 40, 0, 0, 40, 40, 42, 44, 45, 44, 42, 40, 0, 0, 0, 0, 0, 40],
      left: [0, 0, 0, 0, 0, 0, 0, 35, 0, 0, 0, 0, 0, 39, 35, 0, 0, 0, 0, 0, 0, 0, 0, 39, 35, 37, 39, 40, 0]
    },
    {
      name: 'Twinkle, Twinkle',
      right: [0, 0, 42, 42, 44, 44, 42, 0, 0, 0, 0, 0, 0, 0, 42, 42, 40, 40, 0, 0, 0, 42, 42, 40, 40, 0, 0, 0, 0, 0, 42, 42, 44, 44, 42, 0, 0, 0, 0, 0, 0, 0],
      left: [35, 35, 0, 0, 0, 0, 0, 40, 40, 39, 39, 37, 37, 35, 0, 0, 0, 0, 39, 39, 37, 0, 0, 0, 0, 39, 39, 37, 35, 35, 0, 0, 0, 0, 0, 40, 40, 39, 39, 37, 37, 35]
    },
    {
      name: 'Row Your Boat (Easy)',
      right: [0, 0, 0, 0, 0, 0, 0, 0, 40, 42, 47, 47, 47, 42, 42, 42, 0, 0, 0, 0, 0, 0, 42, 40, 0, 0, 0],
      left: [35, 35, 35, 37, 39, 39, 37, 39, 0, 0, 0, 0, 0, 0, 0, 0, 39, 39, 39, 35, 35, 35, 0, 0, 39, 37, 35]
    }
  ];

  var c = angular.element('#canvas-game')[0];
  var game = new Game(c, songs);

}
