
//Initialize input[range] value
// const initValue = $("#yrsOfService").val();
// $("#numberOfRange").text(initValue);
// $("#yrLabel").text("year");

//Change the value when user is sliding the range input
// $("#yrsOfService").change(function() {
//   let newValue = $("#yrsOfService").val();
//   $("#numberOfRange").text(newValue);
//
//   if($("#yrsOfService").val() > 1){
//     $("#yrLabel").text("years");
//   }else{
//       $("#yrLabel").text("year");
//   }
// });

//dynamic dropdown
let dept = [];
$('#divSelection').change(function(){
  if(this.value === "CCD"){
    dept = [
      "CCD - Accounting",
      "CCD - Administration",
      "CCD - Advertising Sales",
      "CCD - Carpark Management",
      "CCD - Business Development",
      "CCD - Cash Operations",
      "CCD - Cinema Marketing",
      "CCD - Cinema Operations",
      "CCD - Corporate Engineering",
      "CCD - Environmental Compliance",
      "CCD - Corporate Lease Management",
      "CCD - Corporate Marketing",
      "CCD - Corporate Project Group",
      "CCD - Corporate Property Planning",
      "CCD - Corporate Treasury",
      "CCD - CPPD",
      "CCD - CPPD Operations",
      "CCD - CPPD Projects",
      "CCD - Credit & Collection",
      "CCD - Digital Marketing",
      "CCD - Digital Office",
      "CCD - Engineering",
      "CCD - External Affairs",
      "CCD - Financial Planning & Analysis",
      "CCD - Food Services",
      "CCD - Housekeeping",
      "CCD - Human Resources",
      "CCD - Information Technology",
      "CCD - Internal Audit",
      "CCD - Investor Relations"
    ];

  }
  else if(this.value === "RD"){
    dept = ["MBMC", "Engineering", "Leasing"];
  }
  else{
    dept = ["--None--"];
  }

  let string = "";
  for(let i = 0; i< dept.length; i++){
    string = string + '<option>'+dept[i]+'</option>';
    $('.dept').html(string);
  }
});

//input type getFileName to upload
$('input[type="file"]').change(function(e){
var fileName = e.target.files[0].name;
document.querySelector("#filename").innerHTML = fileName;
});
