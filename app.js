var value = document.querySelector("#number");          //used query selector to assign value of id=number to variable-value 
var increment = document.querySelector("#increase");    //  "        " "       " 
var decrement = document.querySelector("#decrease");   //   "          "       "


function action()
{   
   var numb=parseInt(value.innerText)         //used parseint parse a string argument and return a string 

    var valueee = numb + 1;                   //simple adding +1 to the current value of it 
    
    document.getElementById("number").innerText = valueee; //updation //here we use #number so that we can replace the default 0 and used .innerHTML to display the output 
}

increment.addEventListener('click', action);     //added a click event listener to know if the user has pressed +, after clicking we called the  "action" fn

function action1()
{
    var valuee = parseInt(value.innerText) - 1;
    document.getElementById("number").innerText = valuee;

    // var numb = parseInt(value.innerText);
    // var subt= numb -1;
    // console.log(subt);
}

decrement.addEventListener('click', action1);   //added a click event listenet to know if the user has pressed -, after clicking we called the "action1" fn

//mistakes committed- not parsing and converting string into integer 
//                  - not using innerText/HTML to get the integer from the variable. Why do we need to use inner to get the value 
//                  - not using innerText/HTML in the right way to output


var anumb = document.querySelector("#anum");
var bnum = document.querySelector("#bnum");
var addn = document.querySelector("#addn");
var subn = document.querySelector("#subn");
var mult = document.querySelector("#mult");
var divi = document.querySelector("#divi");
var res = document.querySelector("#res");



addn.addEventListener('click', addition);
// subn.addEventListener('click', subtraction);
// mult.addEventListener('click', multiply);
// divi.addEventListener('click', division);        

function addition()
{
    var anumber = parseInt(anumb.innerHTML)
    // var ress = parseInt(anum.innerText) + parseInt(bnum.innerText);
    console.log(anumber)
    // document.getElementById("res").innerText = ress;
}