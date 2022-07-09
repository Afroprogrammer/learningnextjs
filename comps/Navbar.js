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
            <Link href="/pages"><a> HOME </a></Link>
              <Link href="/pages/about"><a> ABOUT </a></Link>
              <Link href="/friends"><a> FRIENDS LIST </a></Link>
        </nav>

    );
};

export default Navbar;
