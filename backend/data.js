import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
          name: 'Basir',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],
    products: [
        {
            name:'data do back',
            category:'Shirts',
            image:'/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand:'Nike',
            rating: 4.2,
            numReviews: 10,
            description: 'high quality product 4real',
        },

        {
            name:'Adidas Fit Shirt',
            category:'CAT',
            image:'/images/p1.jpg',
            price: 120,
            countInStock: 20,
            brand:'Adidas',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name:'Lacoste Camisaria',
            category:'CATB',
            image:'/images/p1.jpg',
            price: 120,
            countInStock: 0,
            brand:'Lacoste',
            rating: 3.5,
            numReviews: 10,
            description: 'high quality product',
        },

        {
            name:'Nike Pants',
            category:'CATB',
            image:'/images/p1.jpg',
            price: 120,
            countInStock: 15,
            brand:'Nike',
            rating: 3.5,
            numReviews: 10,
            description: 'high quality product',
        },

        {
            name:'Puma Shirt',
            category:'Shirts',
            image:'/images/p1.jpg',
            price: 65,
            countInStock: 5,
            brand:'Nike',
            rating: 2.5,
            numReviews: 10,
            description: 'high quality product',
        },

        {
            name:'Tommy TSHIRT',
            category:'Shirts',
            image:'/images/p1.jpg',
            price: 320,
            countInStock: 12,
            brand:'Nike',
            rating: 4.8,
            numReviews: 15,
            description: 'high quality product',
        },
    ],
};

export default data;
