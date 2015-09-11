'use strict';

/* Services */
foo.factory('FamilySvc', [
  function(){

    return {
      family: [
        {
          name: 'Katie',
          about: 'Kind Person'
        },
        {
          name: 'Brendan',
          about: 'Good Person'
        },
        {
          name: 'Kevin',
          about: 'Tiny Person'
        },
        {
          name: 'Luna',
          about: 'Four Legged Person'
        },
        {
          name: 'Kayak',
          about: 'Not a Person'
        }
      ]
    }

  }]);
