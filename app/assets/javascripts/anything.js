$(document).on('turbolinks:load', function() {

//fix for map dropdown js problem

setTimeout(function(){
  $('.select').dropdown();
  console.log("waiting");
},1000);


});