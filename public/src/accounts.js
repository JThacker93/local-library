function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accA, accB) =>
    accA.name.last.toLowerCase() > accB.name.last.toLowerCase() ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  const { id: accId } = account;
  return books.reduce((acc, book) => {
    return (
      acc +
      book.borrows
        .filter((borrow) => borrow.id === accId)
        .reduce((accBorrows) => accBorrows + 1, 0)
    );
  },0);
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksTaken = [];
    books.forEach(book=>{
      if (book.borrows.find(book=>book.id === account.id && !book.returned)) {
        booksTaken.push(book);
      }
    })
    booksTaken.forEach(book=>{
      let anAuthor = authors.find(author => author.id === book.authorId);
      book['author'] = anAuthor;
    })
    return booksTaken;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,      
};
