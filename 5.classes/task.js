class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
    
  fix() {
    this.state *= 1.5;
  }
    
  set state(number) {
    if (number < 0) {
      this._state = 0;
    }
    if (number > 100) {
      this._state = 100;
    } else {
      this._state = number;
    }
  }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super (name, releaseDate, pagesCount);
    this.state = 100;
    this.type = "magazine";
  }
}
  
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super (name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}
  
class NovelBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super (name, releaseDate, pagesCount, author);
    this.type = "novel";
  }
}
  
class FantasticBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super (name, releaseDate, pagesCount, author);
    this.type = "fantastic";
  }
}
  
class DetectiveBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super (name, releaseDate, pagesCount, author);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    } 
  }
  
  findBookBy(type, value) {
    for (const book of this.books) {
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }
  
  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        return this.books.splice(i, 1)[0];
      }
    }
    return null;
  }
}

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }
  
  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      return;
    }
    if (!this.marks[subject]) {
      this.marks[subject] = [];
    }
      this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!this.marks[subject]) {
      return 0;
    }
    return this.marks[subject]
      .reduce((acc, mark) => acc + mark, 0) / this.marks[subject].length;
  }
  
  getAverage() {
    const subjects = Object.keys(this.marks);
      if (subjects.length === 0) {
        return 0;
      }
      return subjects
        .reduce((acc, subject) => acc + this.getAverageBySubject(subject), 0) 
        / subjects.length;
  }
}