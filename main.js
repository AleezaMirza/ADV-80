student_array=[];
display_student_array=[];

function submit(){
    for(var i=1 ; i<=4 ; i++){
        name=document.getElementById("name_of_the_student_"+i).value;
        console.log(name);
        student_array.push(name);
    }

    console.log(student_array);
    Array_length=student_array.length;

    for(var i=0 ; i<Array_length ; i++){
        display_student_array.push("<h4>Name-"+student_array[i]+"</h4>");
    }

    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    arraywithoutcommas=display_student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=arraywithoutcommas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    display_student_array.sort();
    arraywithoutcommas=display_student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=arraywithoutcommas;  

}