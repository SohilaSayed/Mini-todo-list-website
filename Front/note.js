
const data = {
    title : $("#title").val(), 
    description:$("#description").val(),
    createdBy:$("#createdBy").val()
}
console.log({data});


axios.get('http://localhost:5000/note',{
    data
}).then(function (response) {
    console.log(response);
    response.data.forEach(function(data){
        console.log(data);
        if(data){
            var len = data.length;
            var txt = "";
            if(len > 0){
                for(var i=0;i<len;i++){
                    txt += "<tr><td>"+data[i].title+"</td><td>"+data[i].description+"</td><td>"+data[i].createdBy.name+"</td></tr>";
                    
                }
                if(txt != ""){
                    $("#table").append(txt).removeClass("hidden");
                }
            }
        }
    });
    
}).catch(function (err) {
    console.log(err);
})
