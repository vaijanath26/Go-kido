import React from 'react';
import styles from './Background.module.css'; // Import CSS module

const Background = () => {
  return (
    <div className={styles['background-container']}>
      <div className={styles.content}>
      <p className={styles.para} >Delivery or Takeaway Food</p>
        <h2 className={styles.subheading} >with unique food</h2>

        <div className={styles.searchBox} >
          <input
            type="text"
            placeholder="Your Address or postal code"
            className={styles.inputField}
          />
          <button className={styles.SearchBTN}>Search</button>
          <h3 className={styles.subheading}>Trending:- Pizza, Sushi, Burgher, Nudeln, Indisch, Thai uvm</h3>
      </div>
      </div>

      {/* Wave Animations */}
      <div className={styles['wave-container']}>
        <div className={`${styles['wave']} ${styles['wave1']}`}></div>
        <div className={`${styles['wave']} ${styles['wave2']}`}></div>
        <div className={`${styles['wave']} ${styles['wave3']}`}></div>
      </div>
    </div>
  );
};

export default Background;