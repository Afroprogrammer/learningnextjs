import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
      <>
 <Head>
     <title> Home|Friends List</title>
     <meta name="keywords" content="Friends"/>
 </Head>
        <div>
            <h1 className={styles.title}> Homepage </h1>
          <p className={styles.text}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci, assumenda blanditiis delectus dolore dolorem eligendi esse est, eveniet ex fuga fugit nisi praesentium quisquam recusandae suscipit ut vero voluptatibus? </p>
            <p className={styles.text}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci, assumenda blanditiis delectus dolore dolorem eligendi esse est, eveniet ex fuga fugit nisi praesentium quisquam recusandae suscipit ut vero voluptatibus? </p>
            <Link href="/friends">
                <a className={styles.btn}>  See friends list </a>
            </Link>
    </div>
      </>
  )
}
