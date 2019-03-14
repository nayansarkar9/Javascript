//Ques1//
  let td = new Date();
  let d = td.getDay();
  let dlist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  document.write("The day is : " + dlist[d] + ".");
  let h = td.getHours();
  let m = td.getMinutes();
  let s = td.getSeconds();
  let suffix = (h >= 12)? " PM ":" AM ";
  h = (h >= 12)? h - 12: h;
  if (h===0 && suffix===' PM ') 
  { 
  if (m===0 && s===0)
  { 
  h=12;
  suffix=' Noon';
  } 
  else
  { 
  h=12;
  suffix=' PM';
  } 
  } 
  if (h===0 && suffix===' AM ') 
  { 
  if (m===0 && s===0)
  { 
  h=12;
  suffix=' Midnight';
  } 
  else
  { 
  h=12;
  suffix=' AM';
  } 
  } 
  document.write("<br>");
document.write("Current Time : "+h + suffix + " : " + m + " : " + s);
document.write("<hr>");

//QUES2//

function print_page()
{
	window.print();
document.write("<hr>");
}

//Ques3//
let dd=td.getDate();
let mm=td.getMonth()+1;
let yyyy=td.getFullYear();
if(dd<10)
{
	dd='0'+dd;
}
if(mm<10)
{
	mm='0'+mm;
}

document.write("the Date is in format dd/mm/yyyy-" +dd+ '/' +mm + '/' +yyyy);
document.write("<br>");
document.write("the Date is in format dd -mm-yyyy =" +dd+ '-' +mm + '-' +yyyy);
document.write("<br>");
document.write("the Date is in format mm/dd/yyyy-" +mm+ '/' +dd + '/' +yyyy);
document.write("<hr>");

//Ques4//

let a = 5;
let b = 6;
let c = 7;

let side = (a+b+c)/2;
let area = Math.sqrt(side*((side-a)*(side-b)*(side-c)));
document.write("The area of triangles with sides of dimension 5,6 and 7 is " +area);
document.write("<hr>");

//Ques5//

function animate_string(id) 
{
    let element = document.getElementById(id);
    let textNode = element.childNodes[0]; // assuming no other children
    let text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}

//Ques6//
document.write("URL of the page is ");
document.write(document.URL);
document.write("<hr>");

//Ques7//
function break_address(url_add) {
    var data = url_add.split("://")
    var protocol = data[0];
    data = data[1].split(".com");
    var domain = data[0];
    data = data[1].split("/");

    if(data[1]){
        return [protocol,domain,data[1]]
    }

    return [protocol,domain]
}

var url_add = "https://www.abc.com/xyz";
document.write("Original address: "+url_add);
document.write(break_address("<br>"+"["+url_add+"]"));
document.write("<hr>");

