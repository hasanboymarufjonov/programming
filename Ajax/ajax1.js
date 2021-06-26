   // create event listenter
   document.getElementById('button').addEventListener('click', loadText);

   function loadText(){
       // create XHR Object
       var xhr = new XMLHttpRequest();
       
       // Open - type, url, async

       xhr.open('GET', 'sample.txt', true);

       xhr.onload = function() {
           if (this.status == 200) {
             document.getElementById('text').innerHTML = this.responseText;  
           } 
       }


/*
       xhr.onreadystatechange = () =>{
           if (this.readyState = 4 && this.status == 200) {
               console.log(this.responseText)
           }
       }
*/

       xhr.send();

   }
