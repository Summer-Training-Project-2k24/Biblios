//these functions interact with a backend or local storage
export const getCart = async () => {
    // Sample for cart fetch. Arpita you have to replace this with actual API call.
    return {
      items: [
        {
          book: {
            id: 1,
            name: 'Book 1',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3N8ZW58MHx8MHx8fDA%3D',
          },
          quantity: 1,
          price: 10,
        },
        {
          book: {
            id: 2,
            name: 'Book 2',
            imageUrl: 'https://images.unsplash.com/photo-1616330682546-2468b2d8dd17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJvb2tzfGVufDB8fDB8fHww',
          },
          quantity: 2,
          price: 20,
        },
      ],
      totalCount: 3,
      totalPrice: 50,
    };
  };
  
  export const removeFromCart = (bookId) => {
    // Mocking remove from cart. Replace with actual implementation.
    console.log(`Removed book with ID ${bookId}`);
  };
  
  export const changeQuantity = (bookId, quantity) => {
    // Mocking change quantity. Replace with actual implementation.
    console.log(`Changed quantity of book with ID ${bookId} to ${quantity}`);
  };