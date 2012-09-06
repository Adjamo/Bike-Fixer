var clicked=0;

green_star = new Image();
green_star.src = "../images/green_star.PNG";

grey_star = new Image();
grey_star.src = "../images/grey_star.PNG";

function star_click(star_name,star_num){

  // Save the rating
  clicked=star_num;
  eval("rating_"+star_name+".value = star_num;");

  var i=0;
  for(i=0; i<5; i++){
    if(i<clicked){
      eval("star_"+star_name+(i+1)+".src = green_star.src;");
    }else{
      eval("star_"+star_name+(i+1)+".src= grey_star.src;");
    }
  }
}

function star_hover(star_name,star_num){

  var i=0;
  for(i=0; i<5; i++){
    if(i<star_num){
      if((i+1)==star_num){
        eval("star_"+star_name+(i+1)+".src = green_star.src;");
      }else{
        eval("star_"+star_name+(i+1)+".src = green_star.src;");
      }
    }else{
      eval("star_"+star_name+(i+1)+".src = grey_star.src;");
    }
  }
}

function star_out(star_name,star_num){

  var i=0;
  for(i=0; i<5; i++){
    if(i<clicked){
      eval("star_"+star_name+(i+1)+".src = green_star.src;");
    }else{
      eval("star_"+star_name+(i+1)+".src = grey_star.src;");
    }
  }
}

