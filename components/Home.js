import { useState } from 'react';
import Burger from './Burger';
import styles from '../styles/Home.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { addBurger, removeBurger } from '../reducers/burgers';

function Home() {

  const dispatch = useDispatch();

  const selectedBurgers = useSelector((state) => state.burgers.burgers);

  const burgersData = [
    { name: 'The New Yorker', image: 'newyorker.jpg', price:10},
    { name: 'The Californian', image: 'californian.jpg', price:9.50 },
    { name: 'The Parisian', image: 'parisian.jpg', price:8.50 },
  ];

  const price = selectedBurgers.reduce((acc, burger) => {
    const burgerData = burgersData.find(burgerData => burgerData.name === burger);
    return acc + burgerData.price;
  }, 0);

  const selectBurger = (newBurger) => {
    dispatch(addBurger(newBurger));
  };

  const minusBurger = (burgerToDelete) => {
    
    dispatch(removeBurger(burgerToDelete));
  }

  const burgers = burgersData.map((data, i) => {
    return <Burger key={i} selectBurger={selectBurger} removeBurger={minusBurger} name={data.name} image={data.image} price={data.price} />;
  });

  return (
    <div className={styles.container}>
      <img src="logo.png" className={styles.logo} />
      <h4 className={styles.text}>Number of burgers selected: <span id="counter">{selectedBurgers.length}</span></h4>
      <h3 className={styles.price}>Price : <span id='price'>{price}</span> €</h3>
      <div className={styles.burgerContainer}>
        {burgers}
      </div>
    </div>
  );
}

export default Home;
