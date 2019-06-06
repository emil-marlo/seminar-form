
//Initialize input[range] value
const initValue = $("#yrsOfService").val();
$("#numberOfRange").text(initValue);
$("#yrLabel").text("year");

//Change the value when user is sliding the range input
$("#yrsOfService").change(function() {
  let newValue = $("#yrsOfService").val();
  $("#numberOfRange").text(newValue);

  if($("#yrsOfService").val() > 1){
    $("#yrLabel").text("years");
  }else{
      $("#yrLabel").text("year");
  }
});

//dynamic dropdown

$('.dept').css("display", "none");

$('#divSelection').change(function(){
  $('.NaNdept').hide();
  $('.dept').hide();
  $('#'+this.value).show();
});
