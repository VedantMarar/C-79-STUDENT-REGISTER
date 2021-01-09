    var studentnames=[];

 function submit(){
   var s1=document.getElementById("student_1").value;
   var s2=document.getElementById("student_2").value;
   var s3=document.getElementById("student_3").value;
   var s4=document.getElementById("student_4").value;
   studentnames.push(s1);
   studentnames.push(s2);
   studentnames.push(s3);
   studentnames.push(s4);

   document.getElementById("output").innerHTML=studentnames;
   console.log(studentnames);
   document.getElementById("Submit_Button").style.display="none";
   document.getElementById("Sort_Button").style.display="block";
 }

 function sort(){
     studentnames.sort();
     console.log(studentnames);
     document.getElementById("output").innerHTML=studentnames;
 }
 

