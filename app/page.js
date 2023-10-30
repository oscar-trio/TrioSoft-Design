"use client"
import Link from "next/link";
import  {useEffect} from 'react';
import mNav from './components/JsContent/MNav';
import lazyLoading from './components/JsContent/LazyLoading';

//import Image from 'next/image'
//import styles from './page.module.css'
import Hero from './components/Hero/Hero'


export default function Home() {
 
  useEffect(() => {

    lazyLoading();
  }, []);

  return (
    // <main className={styles.main}>
     <main >

<Hero />
       </main>
  )
}
