document.getElementById('button1').addEventListener('click', loadUser);


function loadUser(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'user.json', true);

    xhr.onload = () =>{
        if(this.status == 200){
            var user = JSON.parse(this.responseText);
            
            var output = '';
            output += '<ul>' +
            '<li>ID: '+user.id+'</li>'+
            '<li>Name: '+user.name+'</li>'+
            '<li>Email: '+user.email+'</li>'+
            '</ul>';

            document.getElementById('user').innerHTML = output;
        }
    }

    xhr.send();
}


