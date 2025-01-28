//all the books in bookstore
const bookstore = [
  {
    title: "The Housemaid",
    author: "Freida McFadden",
    price: 14.99,
    availability: true,
  },
  {
    title: "Witchcraft for Wayward Girls",
    author: "Grady Hendrix",
    price: 16.99,
    availability: true,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    price: 11.99,
    availability: false,
  },
  {
    title: "The Boy, the Mole, the Fox and the Horse",
    author: "Charlie Mackesy",
    price: 22.99,
    availability: true,
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    price: 9.99,
    availability: false,
  },
];

//function to show all those books
const showBooks = () => {
  return bookstore;
};

//function to filter all those books by availability
const filterAvailability = (status) => {
  let availabilityArr = [];

  for (let currentBook = 0; currentBook < bookstore.length; currentBook++) {
    if (bookstore[currentBook].availability === status) {
      availabilityArr.push(bookstore[currentBook]);
    }
  }

  return availabilityArr;
};

//function to filter all those books by author
const filterAuthor = (author) => {
  let authorArr = [];

  for (let currentBook = 0; currentBook < bookstore.length; currentBook++) {
    if (bookstore[currentBook].author === author) {
      authorArr.push(bookstore[currentBook]);
    }
  }

  return authorArr;
};

//function to filter all those books by price
const filterPrice = (price) => {
  let priceArr = [];
  for (let currentBook = 0; currentBook < bookstore.length; currentBook++) {
    if (bookstore[currentBook].price <= price) {
      priceArr.push(bookstore[currentBook]);
    }
  }

  return priceArr;
};

//function to update availability
const updateAvailability = (title, availability) => {
  for (let currentBook = 0; currentBook < bookstore.length; currentBook++) {
    if (bookstore[currentBook].title === title) {
      bookstore[currentBook].availability = availability;

      return bookstore[currentBook];
    }
  }
};

module.exports = {
  bookstore,
  showBooks,
  filterAuthor,
  filterAvailability,
  filterPrice,
  updateAvailability,
};
