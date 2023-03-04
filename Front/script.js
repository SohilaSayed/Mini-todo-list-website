

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
        }
        else{
            alert("Fail to Add")
        }
    }).catch(function (error){
        console.log(error);
    });
    
});

const data = {
    title : $("#title").val(), 
    description:$("#description").val(),
    createdBy:$("#createdBy").val()
}
function get_all(){
    let cartonna = ``
    axios.get('http://localhost:5000/note',{
    data,
    headers
    }).then(function (response) {
        console.log({response});
        response.data.note.forEach(function(data){
            console.log(data);
            cartonna+='<tr>';
            cartonna+='<td id ="title">' + data.title + '</td>'; 
            cartonna+='<td id ="description">' + data.description + '</td>';
            cartonna+='<td id ="createdBy">' + data.createdBy.name + '</td>';
            cartonna+='<td id ="status">' + data.status + '</td>';
            cartonna+=`<td id ="button"><button onclick= 'updateItem("${data._id}")' class="btn btn-success">Update</button>  <button onclick= 'deleteItem("${data._id}")' class="btn btn-danger">Delete</button></td>`;
            cartonna+='</tr>';
        });
        document.getElementById('tbody').innerHTML = cartonna;
        
    }).catch(function (err) {
        console.log(err);
    })
}
function deleteItem(id) {

    axios({
        method: 'delete',
        url: `http://localhost:5000/note/delete/${id}`,
        headers
    }).then(function (response) {
        console.log(response.data);
        const { message } = response.data
        if (message == "Done") {
            alert("Deleted successfully")
            window.location.href = 'index.html';
        } else {
            alert("Fail to Delete your note")
        }
    }).catch(function (error) {
        console.log(error);
    });
}
function deleteAllItems() {

    axios({
        method: 'delete',
        url: `http://localhost:5000/note/deleteAll`,
        headers
    }).then(function (response) {
        console.log(response.data);
        const { message } = response.data
        if (message == "Done") {
            alert("Deleted All notes successfully")
            window.location.href = 'index.html'
        } else {
            alert("Fail to Delete your notes")
        }
    }).catch(function (error) {
        console.log(error);
    });
}
function updateItem(id) {
    localStorage.setItem("NoteId", id)
    window.location.href = 'update.html';
}
function updateAllItem() {

    axios({
        method: 'put',
        url: `http://localhost:5000/note/updateAll`,
        headers
    }).then(function (response) {
        console.log(response.data);
        const { message } = response.data
        if (message == "Done") {
            alert("Updated successfully")
            window.location.href = 'index.html'
        } else {
            alert("Fail to update your notes")
        }
    }).catch(function (error) {
        console.log(error);
    });
}

