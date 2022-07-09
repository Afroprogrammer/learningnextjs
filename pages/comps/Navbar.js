import React from 'react';
import Link from 'next/link'
import Image from "next/image";
const Navbar = () => {
    return (
        <nav>
            <div className= "logo">
                <Image src="/newLogo.svg" width={500} height={200}/>
                <h1> Friends List </h1>
            </div>
            <Link href="/"><a> HOME </a></Link>
              <Link href="/about"><a> ABOUT </a></Link>
              <Link href="/friends/friend"><a> FRIENDS LIST </a></Link>
        </nav>

    );
};

export default Navbar;
