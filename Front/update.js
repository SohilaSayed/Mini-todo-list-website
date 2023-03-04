const headers = {
    'Content-Type' : 'application/json; charset=UTF-8',
    'authorization':`Bearer ${localStorage.getItem('token')}`
}


const noteID = localStorage.getItem('NoteId')

$("#updateNote").click(() => {
    const data = {
        title: $('#title').val(),
        description: $('#description').val()
    }
    axios({
        method: "put",
        url: `http://localhost:5000/note/update/${noteID}`,
        data,
        headers
    }).then((response) => {
        const { message } = response.data;
        console.log({rr:response.data});
        if (message == 'Done') {
            alert("Updated Successfully")
            window.location.href = 'index.html';
        } else {
            alert("In-valid data")
        }
    }).catch((err) => {
        console.log({ message: "Catch error", err });
    })
})