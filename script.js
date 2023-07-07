class Book {
    constructor(title, author, description) {
        this.title = title
        this.author = author
        this.description = description
    }
}

class libraries {
    constructor() {
        this.books = []
    }

    addbook(bookInfo) {
        const {title, author, description} = bookInfo;
        const book = new Book(title, author, description);

        this.books.push(book);
        return book;
    }

    getBooks() {
        return this.books
    }

    removeBookById(bookId) {
        const bookIndex = this.books.findIndex(book => book.id === bookId);
        /*if (bookIndex !== -1) {
            this.books.splice(bookIndex, 1);
            return "book removed"
        } else {
            //return "book not find";
        }*/
        this.books.pop(bookIndex)
        return "book removed"
    }

    getBookById(bookId) {
        return this.books.find(book => book.title === bookId)
    }

    updateBookById(bookId, bookInfo) {
        const book = this.getBookById(bookId);
        if (book) {
            if (bookInfo.title) {
            book.title = bookInfo.title;
            }
            if (bookInfo.description) {
            book.description = bookInfo.description;
            }
            if (bookInfo.author) {
            book.author = bookInfo.author;
            }

            return book
        }
    }
}