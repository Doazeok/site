var maskedinput = function(){
  $.mask.definitions['~']='[А-Я,а-я,A-Z,a-z, ]';
  
  $("#number").mask("9?999",{placeholder:""});
  $("#country").mask("~~?~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",{placeholder:""});
  $("#city").mask("~~?~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",{placeholder:""});
  $("#house").mask("9?99999",{placeholder:""});
  $("#apartment").mask("9?99999",{placeholder:""});
};