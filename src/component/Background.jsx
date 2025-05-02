import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Background.module.css';

const Background = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className={styles['background-container']}>
      <div className={styles.content}>
        <p className={styles.para}>Delivery or Takeaway Food</p>
        <h2 className={styles.subheading}>with unique food</h2>

        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Your Address or postal code"
            className={styles.inputField}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className={styles.SearchBTN} onClick={handleSearch}>
            Search
          </button>
          <h3 className={styles.subheading}>
            Trending:- Pizza, Sushi, Burgher, Nudeln, Indisch, Thai uvm
          </h3>
        </div>
      </div>
      <div className={styles['wave-container']}>
        <div className={`${styles['wave']} ${styles['wave1']}`}></div>
        <div className={`${styles['wave']} ${styles['wave2']}`}></div>
        <div className={`${styles['wave']} ${styles['wave3']}`}></div>
      </div>
    </div>
  );
};

export default Background;
