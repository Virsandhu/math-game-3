function send(){
number_1= document.getElementById("n1").value;
number_2= document.getElementById("n2").value;
actual_ans= parseInt(number_1) * parseInt(number_2);

Qn= "<h4>"+ number_1+"X"+number_2+"</h4>";

input_box= "<br> Answer : <input type='number'id='check_input_box'>";

check_button= "<br><br> <button class='btn btn-info'onclick='check()'>Check</button>";

row= Qn+input_box+check_button;

document.getElementById("output").innerHTML=row;

number_1= document.getElementById("n1").value="";
number_1= document.getElementById("n2").value="";

}