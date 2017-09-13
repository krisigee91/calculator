$(document).ready (function(){
  
 var inputs=[""];
 
  var totalString;
  
  //operators array for validation without the "."
  var operators1= ["+","-","/","*"];
 //operators array with the "." for validation 
  var operators2= ["."];
  //numbers for validation
  var nums=[0,1,2,3,4,5,6,7,8,9];

 function getValue(input) {
   if(operators2.includes(inputs[inputs.length-1])===true && input==="."){
     
     console.log("Duplicate '.' ");
   }
   
   else if(inputs.length===1 && operators1.includes(input)===false){
     inputs.push(input);
     
   }
   
   else if(operators1.includes(inputs[inputs.length-1])===false){
     inputs.push(input);
   }     
   
   else if(nums.includes(Number(input))){
     inputs.push(input);
   }
     update(); 
   }//end of getValue function
 
  function update(){
    totalString = inputs.join("");
    $("#steps").html(totalString);   
  }//end of update function
  
  function getTotal(){
    totalString = inputs.join("");
    console.log(totalString + ":" + eval(totalString));
    $("#steps").html(eval(totalString));
    }//end of getTotal function
 
 $("a").on("click", function(){
   
   if(this.id==="deleteAll"){
     
     inputs=[""];
     update();
   }
     
   
   else if(this.id=="backOne"){
      inputs.pop();
     update();   
   }
   
   else if(this.id==="total"){
     getTotal();
     
   }
   
   else {
     if(inputs[inputs.length-1].indexOf("+","-","/","*","-1")===-1){
        getValue(this.id);
        }
     else{
        getValue(this.id);
        }
   }
        
   
 });//end of on click function
 
 
 });//end of document ready function