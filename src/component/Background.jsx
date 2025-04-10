import React from 'react';
import styles from './Background.module.css'; // Import CSS module

const Background = () => {
  return (
    <>
    



    <div className={styles['background-container']}>
    <div className={styles.hero}>
    {/* Title */}
    <p className={styles.para}>Delivery or Takeaway Food</p>
    <h2 className={styles.subheading}>with unique food</h2>

    {/* Search Box */}
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Your Address or postal code"
        className={styles.inputField}
      />
      <button className={styles.searchBtn}>Search</button>
      <h3 className={styles.subheading}>Trending:- Pizza, Sushi, Burgher,Nudeln, Indisch, Thai uvm</h3>
    </div>
  </div>
     
    </div>
    </>
  );
};

export default Background;