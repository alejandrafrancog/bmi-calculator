function calculateBMI(){
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value)/100;
    console.log(weight,height);
    if(weight && height && (height<=265)){
        const bmi = (weight/ (height*height) ).toFixed(2);
        document.getElementById("result").textContent = `Your BMI is ${bmi}`;
        document.getElementById("result").style.backgroundColor = "greenyellow";
        document.getElementById("result").style.padding = "2px";
        document.getElementById("result").style.color = "black";


    }else{
        document.getElementById("result").textContent = "Please, type in valid values";
        document.getElementById("result").style.backgroundColor = "rgb(243, 112, 112)";
        document.getElementById("result").style.padding = "2px";
        document.getElementById("result").style.color = "white";
    }
}
