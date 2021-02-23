const products = [
  {
    id: 1, 
    title: 'Buckle Wrap Wooden Table',
    price: 52,
    quantity: 1,
    sale: {
      salePrice: 40
    },
    img: 'https://dummyimage.com/275x360/ccc/000',
    thumbnail: 'https://dummyimage.com/100x100/ccc/000',
    newProduct: false,
  },
  {
    id: 2, 
    title: 'Wooden Coffee Mug',
    price: 23.99,
    quantity: 1,
    sale: false,
    img: 'https://dummyimage.com/275x360/ccc/000',
    thumbnail: 'https://dummyimage.com/100x100/ccc/000',
    newProduct: false,
  },
  {
    id: 3, 
    title: 'Wooden Bluetooth Speaker',
    price: 23,
    quantity: 1,
    sale: false,
    img: 'https://dummyimage.com/275x360/ccc/000',
    thumbnail: 'https://dummyimage.com/100x100/ccc/000',
    newProduct: true,
  },
  {
    id: 4, 
    title: 'Wood White Chair',
    price: 45,
    quantity: 1,
    sale: false,
    img: 'https://dummyimage.com/275x360/ccc/000',
    thumbnail: 'https://dummyimage.com/100x100/ccc/000',
    newProduct: false,
  }
]


export default (req, res) => {
  res.status(200).json({ products })
}
