'use client'

import styles from '@/app/page.module.css'
import Card from './components/Card'
import Cart from './components/Cart'
import {useState} from "react";


export default function Home() {
    const [itemList, setItemList] = useState([]);

    //add element to cart state
    const addCard = (cardColor) => {
        setItemList([...itemList, cardColor])
    }

    //remove element from cart state based on index(key)
    const deleteCard = (key) => {
        //remove item from the state based on
        setItemList([
        ...itemList.slice(0, key),
        ...itemList.slice(key+1)])
    }

    const colorList =['red', 'blue', 'yellow', 'black'];
    const ColorListJSX = colorList.map((color, key) =>
        (<Card cColor={color} key={key}
               // a key property is required internally by react to manage the components in the list
               clickHandler={addCard}
        />));
    return (
            <main className={styles.main}>
                <h1>Lecture 4</h1>
                <div>create basket, add to basket (click on card), elevate state, remove from basket (click on basket item)
                     </div>

                <div style={{display:"flex"}}>

                    <div style={{display:'flex', padding:'10px', margin: '10px', minWidth:'80vw'}}>
                        {ColorListJSX}
                    </div>

                    <Cart items={itemList} deleteHandler={deleteCard}/>

                </div>

                <a href='/'>Back</a>
            </main>
  )
}
