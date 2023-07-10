// Operating Syste JS API 2023
// Written by ghgltggamer

// op system args



var UUID = "UUID";
var GENERATE = "GENERATE";
var CODE = "CODE";
var OPEN = "OPEN";


// op system args - end



// op object for call operating syste api

const op = {
  
  UUID(ARGS) {
    var ARGS;
    
    if (ARGS === "GENERATE"){
      var OPERATING_SYSTE_GENERATE_UUID = crypto.randomUUID();
      return OPERATING_SYSTE_GENERATE_UUID;
    }
    
    return "UUID";
  },
  
  
  
  
  
  CODE(ARGS, STD_SYS_ARG_INT){
    var ARGS;
    var STD_SYS_ARG_INT = parseInt(STD_SYS_ARG_INT);
    
    if (ARGS === "GENERATE"){
      
      {
      
        var OPERATING_SYSTE_GENERATE_CODE = "";
      
        for (var op_code = 0; op_code < STD_SYS_ARG_INT; op_code++) {
      
          OPERATING_SYSTE_GENERATE_CODE += Math.floor(Math.random() * 10);
      
        }
      
        return OPERATING_SYSTE_GENERATE_CODE;
      
      }
      
    }
    
  },
  
  
  
  
  
  
  
  generate(ARGS, STD_SYS_ARG){
    var STD_SYS_ARG_INT = parseInt(STD_SYS_ARG);
    var ARGS;
    
    if (ARGS === "UUID"){
      
      var OPERATING_SYSTE_GENERATE_UUID = crypto.randomUUID();
      
      return OPERATING_SYSTE_GENERATE_UUID;
      
    }
    
    
    
    
    
    else if (ARGS === "CODE"){
      
      var OPERATING_SYSTE_GENERATE_CODE="";
      
      for (var op_code = 0;op_code < STD_SYS_ARG_INT;op_code++){
        
        OPERATING_SYSTE_GENERATE_CODE+=Math.floor(Math.random() * 10);
        
      }
      
      return OPERATING_SYSTE_GENERATE_CODE;
      
    }
    
  },
  
  
  
  webPage(ARGS, URL){
    
    if (ARGS === "OPEN"){
      
      document.write('<div id="OPERATING_SYSTE_DESTROY_WEBPAGE"><a href="' + URL + '" id="OPERATING_SYSTE_OPEN_WEBPAGE"></a></div>');
      
      setTimeout(function(){
        document.getElementById('OPERATING_SYSTE_OPEN_WEBPAGE').click();
      }, 0001);
      
      setTimeout(function() {
        document.getElementById('OPERATING_SYSTE_DESTROY_WEBPAGE').innerHTML = " ";
      }, 0003);
      
    }
    
    
  }
  
}

console.log(op.UUID(GENERATE));
console.log(op.CODE(GENERATE, 6));

/*setTimeout(function(){
console.log(op.webPage(OPEN, "https://www.google.com/"));

}, 3000);*/

function not(){
  alert('Currently you can not download the texture pack')
}