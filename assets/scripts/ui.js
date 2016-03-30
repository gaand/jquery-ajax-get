'use strict';

const getBooksSuccess = (data) => {
  if (data.books) {
    console.log(data.books.length);
  }
};

const getBooksFail = (error) => {
  console.error(error);
};

module.exports = {
  getBooksFail,
  getBooksSuccess,
};
