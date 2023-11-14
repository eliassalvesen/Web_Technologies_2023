'use client'
import Image from 'next/image'
import styles from '@/app/page.module.css'
import Card from './components/Card'


const colorList =['red', 'blue', 'yellow', 'black'];
    const ColorListJSX = () => {
		return (<>
            {colorList.map((color, key) =>
        (<Card cColor={color} key={key}/>))}</>)
	}
    // a key property is required internally by react to manage the components in the list

export default function Home() {

  return (
    <main className={styles.main}>
        <h1>Lecture 3</h1>
        <div>create components, style components, add event </div>
      <div style={{display:'flex', padding:'10px', margin: '10px'}}>
          <ColorListJSX />
      </div>
    <a href='/'>Back</a>
    </main>
  )
}
