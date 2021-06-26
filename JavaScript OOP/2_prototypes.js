function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}




Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`; 
}

// get Age

Book.prototype.getAge = function(){
    const age = new Date().getFullYear() - this.year;
    return `${this.title} is ${age} years old`;
}
 
// Revise / change year

Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
}

const book1 = new Book('Humans', 'Jhon Doe', '1982');


book1.revise('2018');
console.log(book1);