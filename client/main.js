import { Template } from 'meteor/templating';


import './main.html';



Template.todos.helpers({
  todos:[
  	{text:"todo 1"},
  	{text:"todo 2"},
  	{text:"todo 3"},
  	{text:"todo 4"}
  ]
});

Template.todo.events({
  'click button'(event, instance) {
console.log("click todo !!!");
  },
});
