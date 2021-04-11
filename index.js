const birthdayCalculator=()=>{
    var birthYear =document.getElementById("birthYear").value
    var century = birthYear.slice(0,2)
    var bYear = birthYear.slice(2,4)
    var birthMonth = document.getElementById("birthMonth").value
    var birthDay = document.getElementById("birthDay").value
    var birthDate =  ( ( (century/4) -2*century-1) + ((5*bYear/4) ) + (26*(birthMonth+1)/10) + birthDay ) % 7
    console.log(birthDate);
}
document.getElementById("birthdateclaculator").addEventListener("click",()=>{
    birthdayCalculator()
})
const 