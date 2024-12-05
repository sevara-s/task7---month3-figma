function Book(title, author,year){
    this.book_title = title;
    this.book_author=author;
    this.book_year = year;
    // this.about_book = function(){
    //     return 
    // }
}

let book1 = new Book("Atomic Habits","James Clear",2018);
console.log(book1);