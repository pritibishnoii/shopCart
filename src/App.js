import './App.css';
import React, { useEffect, useState } from 'react';
import { Navbar } from './Components/Navbar';
import Cart from './Components/Cart';
import ShopItem from './Components/ShopItem.jsx';
import toast, { Toaster } from 'react-hot-toast';
import { Acordian } from './Components/Acordian.jsx';
import { LazyLoading } from './Components/LazyLoading.jsx';
import { List } from './Components/List.jsx';

function App() {
  const [cards, setCards] = useState([]);
  const [showItem, setShowItem] = useState(false);

  const addToCart = (item) => {
    const isItemInCart = cards.some(product => product.id === item.id);

    if (isItemInCart) {
      console.log("Item already present");
      toast.error("Product already present in cart!!!", {
        position: "top-right"
      })

    } else {
      const updatedCards = [...cards, item];
      setCards(updatedCards);

      // Save updated cart to localStorage
      localStorage.setItem("data", JSON.stringify(updatedCards));
      toast.success("Product added to cart!", {
        position: "top-right"
      });

    }
  }
  useEffect(() => {
    const storedCards = localStorage.getItem("data");
    if (storedCards) {
      setCards(JSON.parse(storedCards))
    }
  }, [])

  let cartLenght = cards.length;
  return (

    <div className="bg-slate-50 w-screen h-screen w-full h-screen">
      {/* <Toaster/>
      <Navbar cartLenght={cartLenght} setShowItem={setShowItem} />

      {showItem ? <ShopItem cards={cards} /> : <Cart addToCart={addToCart} />} */}

      <LazyLoading/>
      {/* <Acordian/> */}
      {/* <List /> */}

    </div>
  );
}

export default App;
