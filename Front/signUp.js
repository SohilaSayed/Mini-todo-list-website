const url = 'http://localhost:5000'

$("#buttonn").click(() => {
    const name = $("#name").val();
    const email = $("#email").val();
    const password = $("#password").val();
    const cPassword = $("#cPassword").val();
    const age = $("#age").val();

    const data = {
        name ,
        email , 
        password , 
        cPassword , 
        age
    }

    console.log({data});


    axios({
        method : 'post',
        url : `http://localhost:5000/auth/signUp`,
        data:data,
        headers:{'Content-Type' : 'application/json; charset=UTF-8'}
    }).then(function(response){
        console.log({response});
        const {message , result} = response.data
        if(message == "Done"){
            window.location.href = 'login.html'
        }
        else if(message == "Email exist"){
            alert("Email Exist")
        }
        else{
            alert("Fail to sign Up")
        }
    }).catch(function (error){
        console.log(error);
    });
    
});