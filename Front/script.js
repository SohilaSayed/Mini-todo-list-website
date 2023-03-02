

const headers = {
    'Content-Type' : 'application/json; charset=UTF-8',
    'authorization':`Bearer ${localStorage.getItem('token')}`
}


$("#createNote").click(() => {
    const data = {
        title : $("#title").val(), 
        description:$("#description").val()
    }
    console.log({data});

    axios({
        method : 'post',
        url : `http://localhost:5000/note/add`,
        data,
        headers
    }).then(function(response){
        console.log({response});
        const {message} = response.data
        if(message == "Done"){
            alert("Added Successfully")
            getData()
        }
        else{
            alert("Fail to Add")
        }
    }).catch(function (error){
        console.log(error);
    });
    
});
$("#allNotes").click(() => {
    const data = {
        title : $("#title").val(), 
        description:$("#description").val()
    }
    console.log({data});

    axios({
        method : 'get',
        url : `http://localhost:5000/note`,
        data,
        headers
    }).then(function(response){
        console.log({response});
        const {message} = response.data
        if(message == "Done"){
            window.location.href = 'note.html'
        }
        else{
            alert("Fail to Load")
        }
    }).catch(function (error){
        console.log(error);
    });
    
});


