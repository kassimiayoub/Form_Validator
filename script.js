const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//Show input Error message
function showError(input,message){
    const formCont = input.parentElement;
    formCont.className = "form-control error";
    const small = formCont.querySelector("small");
    small.innerText = message;
}

//Show input Outline
function showSuccess(input){
    const formCont = input.parentElement;
    formCont.className = "form-control success";
}

//Check Email
function checkEmail(input) {
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(re.test(String(input.value).toLowerCase())){
    showSuccess(input);
  }
  else{
    showError(input,"Email is not valiiid");
  }
}

//Check Required
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ""){
            showError(input , `${getFieldName(input)} is required !!`)
        }
        else{
            showSuccess(input);
        }
    });
}

//Check Lenght 
function checkLenght(input, min, max){
    if(input.value.length < min ){
        showError(input,`${getFieldName(input)} must be at least ${min} caracteres.`);
    }
    else if(input.value.length > max){
        showError(input,`${getFieldName(input)} must less Than ${max} caracteres.`);
    }
    else{
        showSuccess(input);
    }
}

//Check Passwords Match
function checkPasswordsMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,"Passwords do not match.");
    }
}


//Get Field Name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event listeners
form.addEventListener("submit",function(e){
    e.preventDefault();
    checkRequired([username,email,password,password2]);
    checkLenght(username, 3, 10);
    checkLenght(password, 5, 20);
    checkEmail(email);
    checkPasswordsMatch(password,password2); 
})

