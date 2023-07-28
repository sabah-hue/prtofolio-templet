var uName = document.getElementById("uName");
var uEmail = document.getElementById('uEmail');
var comment = document.querySelector('.comment');


var nameAlert = document.getElementById('nameAlert');
var emailAlert = document.getElementById('emailAlert');

var addBtn = document.getElementById('addBtn');

var nameTest = false;var emailTest = false;

// clear form 
addBtn.addEventListener('click',()=>{
    uName.value = '';
    uEmail.value = '';
    comment.value = '';
})
// validation function
function validate(input , regex , nameAlert){
    if(regex.test(input.value)){
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
        nameAlert.classList.add('d-none');

        if(input == uName)
        nameTest = true;
        else if(input == uEmail)
        emailTest = true;

        if(nameTest && emailTest){
            addBtn.removeAttribute('disabled'); 
            console.log(nameTest , emailTest) 
        } 
    }
    else{
        addBtn.disabled = 'true';
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        nameAlert.classList.remove('d-none');
    }
}


    uName.addEventListener('input' , function(){
         validate(uName,/^[a-zA-Z]{8,}$/,nameAlert);
    }) 
    
    uEmail.addEventListener('input' , function(){
        validate(uEmail, /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,emailAlert);
    })   
