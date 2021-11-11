function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter((book) => !book.borrows[0].returned).length;
}

function getMostCommonGenres(books) {
  let countObj = {};
  books.forEach(book => {
    if (countObj[book.genre] != null) {
      countObj[book.genre]++;
    } else {
      countObj[book.genre] = 1;
    }
  });
  let countArray = [];
  for (const [key, value] of Object.entries(countObj)) {
    countArray.push({
      'name' : key,
      'count' : value
    });
  }
  sortBooks (countArray)
  return countArray.slice(0,5);
}


function getMostPopularBooks(books) {
  const borrows = books.map(book=>({name:book.title, count:book.borrows.length}));
  return borrows.sort((bookA,bookB) => bookB.count - bookA.count).slice(0,5);
  }


function getMostPopularAuthors(books, authors) {
  let result = [];
 authors.forEach((author) => {
  let theAuthor = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  };
  books.forEach((book) => {
   if (book.authorId === author.id) {
    theAuthor.count += book.borrows.length;
   }
  });
  result.push(theAuthor);
 });
 return result.sort((authA, authB) => authB.count - authA.count).slice(0, 5);
}



const sortBooks = (array) => {
  array.sort((entryA, entryB) => (entryA.count < entryB.count ? 1 : -1))
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
