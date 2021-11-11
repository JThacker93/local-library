function findAuthorById(authors, id) {
  let found = authors.find(author => author.id === id);
 return found;
}

function findBookById(books, id) {
  let found = books.find(book => book.id === id);
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  let borrowedBooks = books.filter((book)=>  book.borrows[0].returned === false)
  let returnedBooks = books.filter((book)=>  book.borrows[0].returned === true)
 return [borrowedBooks,returnedBooks]
}

function getBorrowersForBook(book, accounts) {
  let result = [];
  let borrowArray = book.borrows; 
  borrowArray.forEach(borrow=>{
    let account = accounts.find(acc => acc.id === borrow.id);
    let obj = account;
    obj['returned'] =  borrow.returned;
    result.push(obj);
  })
  return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};