import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
const initialState = {
  products: [
      {id: 1, title: 'Nike Casual', description: 'High abrasion sole increases longevity and durability. Cup shaped insole gives additional support and comfort.', price: '124.45', image: Item1, amount: 5},
      {id: 2, title: 'Reebook Running shoes', description: 'EVA midsole makes shoes Lightweight without compromising on cushioning', price: '200', image: Item2, amount: 3},
      {id: 3, title: 'HRX by Hrithik Roshan', description: 'Designed to provide neutral support to your feet and ankle. Constructed with knitted fabric', price: '250.00', image: Item3, amount: 4},
      {id: 4, title: 'Puma Adapt IDP', description: 'High abrasion sole increases longevity and durability. Cup shaped insole gives additional support and comfort.', price: '104.99', image: Item4, amount: 2}
  ]
};
 
const productReducer = (state = initialState, action) => {
 
    return state;
};
 
export default productReducer;