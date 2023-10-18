// function bmi(weight,height){
//     return (weight/(height**2))
// }
function calculateBMI(){
    let weight=Number(document.getElementById("input2").value)
    let height=Number(document.getElementById("input1").value)
     let bmi=(weight/((height**2)))
     document.getElementById("output").innerHTML=bmi+" kg/m<sup>2</sup>"
    }
    