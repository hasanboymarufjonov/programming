/*
var form = document.getElementById('addForm'); 
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li =document.createElement('li');

  // Add class
  li.className = 'list-group-item';

  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete'; 

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();

  //Get li
  var items = itemList.getElementsByTagName('li'); 

  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) !=-1){
       item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

}
*/

var addForm = document.getElementById('addForm');
var items = document.getElementById('items')

// submit

addForm.addEventListener('submit', submitlist);

// add item

function submitlist(e){
  e.preventDefault();

  // took element
  var item = document.getElementById('item').value;
  

  // create element
  var li = document.createElement('li');

  // class
  li.className = 'list-group-item'

  li.appendChild(document.createTextNode(item));

  // del button
  var delbtn = document.createElement('button');
  delbtn.className = 'btn btn-danger btn-sm float-right delete'
  delbtn.appendChild(document.createTextNode('X'));

  li.appendChild(delbtn);
  items.appendChild(li);
  
}

items.addEventListener('click', removeitem);

function removeitem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?')){
      var li = e.target.parentElement;
      items.removeChild(li);
    }
  }
}

var filter =document.getElementById('filter');

filter.addEventListener('keyup', filterItems);

function filterItems(e){
  var text = e.target.value.toLowerCase();
  
  var itemss = items.getElementsByTagName('li');

  Array.from(itemss).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) !=-1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })
}

