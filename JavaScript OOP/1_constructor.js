function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

const book1 = new Book('Humans', 'Jhon Doe', 1982);
console.log(book1.author);

