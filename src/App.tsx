import React from 'react';

// Local Dependencies
import styles from './App.module.css';
import { SearchPage } from 'features/Search';

const App = () => {
  return (
    <div className={styles.App}>
      <SearchPage />
    </div>
  );
};

export default App;
