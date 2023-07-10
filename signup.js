
let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let email = document.getElementById('email')
let password = document.getElementById('password')
let address = document.getElementById('address')
let city = document.getElementById('city')
let gender = document.getElementById('gender')



const regExp = {
    firstName: /^[a-zA-z]+$/,
    lastName: /^[a-zA-z]+$/,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})$/,
    city: /^[a-zA-z]+$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#@%\?\+-])[\w+!#@%\?\+-]{8,16}$/
}


// console.log(firstName)

firstName.addEventListener('keyup',(e)=>{
    if(regExp.firstName.test(firstName.value)){

        console.log(true)
    }else{
        console.log(false)

    }

})

lastName.addEventListener('keyup',(e)=>{
    if(regExp.lastName.test(lastName.value)){

        console.log(true)
    }else{
        console.log(false)

    }

})


city.addEventListener('keyup',(e)=>{
    if(regExp.city.test(city.value)){

        console.log(true)
    }else{
        console.log(false)

    }

})
email.addEventListener('keyup',(e)=>{
    if(regExp.email.test(email.value)){

        console.log(true)
    }else{
        console.log(false)

    }

})

password.addEventListener('keyup',(e)=>{
    if(regExp.password.test(password.value)){

        document.getElementById('error').innerHTML =''
    }else{
        document.getElementById('error').innerHTML ='wrong password'
        console.log(false)

    }

})