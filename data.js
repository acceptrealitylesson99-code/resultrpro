document.getElementById("btn").addEventListener("click", function() {

    let math = document.getElementById("math").value;
    let urdu = document.getElementById("urdu").value;
    let eng = document.getElementById("eng").value;
    let sindhi = document.getElementById("sindhi").value;
    let comp = document.getElementById("comp").value;

   
    let totalMarks =Number(math) + Number(urdu) + Number(eng) + Number(sindhi) + Number(comp);


    let percentage = (totalMarks / 500) * 100;

    let grade;

    if (percentage >= 90) {
        grade = "A+";}
        else if (percentage >= 80) {
            grade = "A";
        }
        else if (percentage >= 70) {
            grade = "B";
        }

            else if (percentage >= 60) {
grade = "C";
            }
            else{
                grade = "F";
            }

            let status;
    if (percentage  >=50){
        status="You Are Pass"
    }
    else{
        status = "You Are Fail"
    }

    document.getElementById("tot").innerHTML =  totalMarks;
    document.getElementById("per").innerHTML =  percentage.toFixed(2) + "%";
    document.getElementById("grade").innerHTML =  grade;
    document.getElementById("status").innerHTML =  status;

    


})