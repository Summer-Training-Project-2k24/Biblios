const commerce = require("./lib/commerce")
const bookModel = require("./Books");

async function populate() {

    const { data } = await commerce.products.list();

    for (let i = 0; i < data.length; i++) {
        try {
            await bookModel.create({
                name: data[i].name,
                price: data[i].price.formatted_with_symbol,
                imageUrl: data[i].assets[0].url,
                description: data[i].description, // Ensure you include all required fields
            });
        } catch (error) {
            console.error('Error creating book entry:', error);
        }
    }


}

populate();