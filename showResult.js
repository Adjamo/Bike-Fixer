function showResult(str)
{
myPos = findPos(document.getElementById('search_res'))
x = myPos[0]
y = myPos[1]

if (str.length==0)
  {
  document.getElementById("livesearch").innerHTML="";
  document.getElementById("livesearch").style.border="0px";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("livesearch").innerHTML=xmlhttp.responseText;
    document.getElementById("livesearch").style.border="1px solid #A5ACB2";

    document.getElementById("livesearch").style.left=x;
    document.getElementById("livesearch").style.top=(y+30);

    }
  }
xmlhttp.open("GET","livesearch.php?q="+str,true);
xmlhttp.send();
}

// Based on: http://www.quirksmode.org/js/findpos.html
function findPos(obj) {

var curleft = curtop = 0;
if (obj.offsetParent) {
        curleft = obj.offsetLeft
        curtop = obj.offsetTop
        while (obj = obj.offsetParent) {
                curleft += obj.offsetLeft
                curtop += obj.offsetTop
        }
}
return [curleft,curtop];

}

