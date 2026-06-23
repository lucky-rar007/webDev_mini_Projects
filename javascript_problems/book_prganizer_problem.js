let books = [
  {
    title: "thisistitle1",
    authorName: "author1",
    releaseYear: 1949
  },
  {
    title: "thisistitle2",
    authorName: "author2",
    releaseYear: 1999
  },
  {
    title: "thisistitle3",
    authorName: "author3",
    releaseYear: 1990
  }
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

const year = 1950;

let filteredBooks = books.filter(
  book => book.releaseYear <= year
);

filteredBooks.sort(sortByYear);