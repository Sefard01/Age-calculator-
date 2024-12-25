function calculate() {
  let birthdate = document.getElementById("birthdate").value;
  let year = new Date(birthdate).getFullYear();
  let age = new Date().getFullYear() - year;
  


  
  document.getElementById("output").innerText = age;
}


