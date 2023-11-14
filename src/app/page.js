'use client'
import styles from './page.module.css'


export default function Home() {


  return (
    <main className={styles.main}>
        <h1>lecture examples</h1>
      <div>
          <a href={"./l3"}>Lecture 3</a><br/>
          <a href={"./l4"}>Lecture 4</a><br/>
      </div>

    </main>
  )
}
