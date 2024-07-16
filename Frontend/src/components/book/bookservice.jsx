
const BASE_URL = 'http://localhost:5000/api/books';

const getBookById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const book = await response.json();
    return book;
  } catch (error) {
    console.error('Failed to fetch book:', error);
    throw error;
  }
};

const bookService = {
  getBookById,
};

export default bookService;
