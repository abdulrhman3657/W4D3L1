let Book = {
    title: "book1",
    author: "author1",
    year: "2015",
    isAvailable: true,
    borrow: function func1 () {
        this.isAvailable = false;
        console.log(`the book avalibility is ${this.isAvailable}`)
    }
}


let obj1 = Book.publisher = {
    name: "publisher1",
    location: "qassim"
}

console.log(Book)
console.log(Book.title)

Book.year = 2025;
console.log(Book)

delete Book.author;
console.log(Book)

Book.borrow()
console.log(Book)


console.log(Book.publisher)

console.log(Book.publisher.location)

