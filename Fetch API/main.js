document.querySelector('#getText').addEventListener('click', getText);
document.querySelector('#getUsers').addEventListener('click', getUsers);
document.querySelector('#getAPI').addEventListener('click', getAPI);

function getText(){
    /*
    fetch('sample.txt')
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        console.log(data);
    });
    */
   fetch('sample.txt')
   .then((res) => res.text())
   .then((data) => document.querySelector('#output').innerHTML = data)
   .catch((err) => console.log(err));
}

/*
function getUsers(){
    fetch('users.json')
    .then((res) => res.json)
    .then((data) => 

        

        let output = '<h2>Users</h2>';
        data.forEach((user) => {
            output += `
            <ul>
                <li>ID: ${user.id}</li>
                <li>${user.name}</li>
                <li>${user.email}</li>
            </ul>
        `;
        });
        
        document.querySelector('#output').innerHTML = output;
    )
}
*/


function getAPI(){
    
}