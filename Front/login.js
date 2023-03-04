const url = 'http://localhost:5000'

$("#Login").click(() => {
    const email = $("#email").val();
    const password = $("#password").val();

    const data = {
        email , 
        password 
    }

    console.log({data});


    axios({
        method : 'post',
        url : `http://localhost:5000/auth/login`,
        data:data,
        headers:{'Content-Type' : 'application/json; charset=UTF-8'}
    }).then(function(response){
        console.log({response});
        const {message , token} = response.data
        if(message == "Done"){
            localStorage.setItem('token',token)
            window.location.href = 'index.html'
        }
        else{
            alert("Fail to Login")
        }
    }).catch(function (error){
        console.log(error);
    });
    
});