// products.js

const product = [
    {
      name: 'Men',
      image: 'https://img.freepik.com/free-photo/handsome-man-presenting-something_1368-87.jpg?w=740&t=st=1726486539~exp=1726487139~hmac=59b85e00a85bfeafd3daaf3fcaa6f0b2e6774bf0f1249459d01dd1717b216795', // Replace with your actual image URL
      items: [
        { 
          name: 'Suit', 
          description: 'Formal suit for men', 
          image: 'https://example.com/suit.jpg' // Replace with your actual image URL
        },
        { 
          name: 'Watch', 
          description: 'Stylish wristwatch for men', 
          image: 'https://example.com/watch.jpg' // Replace with your actual image URL
        },
      ],
    },
    {
      name: 'Women',
      image: 'data:image/jpeg;base64,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', // Replace with your actual image URL
      items: [
        { 
          name: 'Dress', 
          description: 'Elegant dress for women', 
          image: 'https://example.com/dress.jpg' // Replace with your actual image URL
        },
        { 
          name: 'Handbag', 
          description: 'Chic handbag for women', 
          image: 'https://example.com/handbag.jpg' // Replace with your actual image URL
        },
      ],
    },
    {
      name: 'Children',
      image: 'https://img.freepik.com/free-photo/children-group-with-blackboard_23-2148107412.jpg?t=st=1726486642~exp=1726487242~hmac=62f4109668d94dcbdb3e72e052a56dabe27df7094b20ef4a34fa00fcea62b414', // Replace with your actual image URL
      items: [
        { 
          name: 'Toy Car', 
          description: 'Fun toy car for kids', 
          image: 'https://example.com/toycar.jpg' // Replace with your actual image URL
        },
        { 
          name: 'Playground Set', 
          description: 'Playground set for children', 
          image: 'https://example.com/playgroundset.jpg' // Replace with your actual image URL
        },
      ],
    },
  ];
  
  export default product;
  