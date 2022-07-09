import React from 'react';
import styles from '../../styles/friends.module.css'

export const getStaticProps = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();


    return{
        props: {friends: data}
    }
}
const Friends = ({friends}) => {
    return (
        <div>
            <h1> All My hommies </h1>
            { friends.map(friend => (
               <div key={friend.id}>
                   <a className={styles.single}>
                       <h3> {friend.name }</h3>
                   </a>
               </div>
            ))}
        </div>
    );
};

export default Friends;
