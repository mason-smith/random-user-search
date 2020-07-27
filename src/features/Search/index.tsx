import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Local Dependencies
import { fetchRandomUsers } from './searchAction';
import { selectRandomUserList } from './selectors';
import { User } from './types';
import { RootState } from 'redux/store';
import Input from 'components/Input';
import Button from 'components/Button';
import styles from './Search.module.css';

export const SearchPage = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  // Random users selector
  const randomUsers = useSelector<RootState, User[]>(selectRandomUserList);

  useEffect(() => {
    // Fetch random users on mount
    dispatch(fetchRandomUsers());
  }, [dispatch]);

  useEffect(() => {
    console.log('searchValue :>> ', searchValue);
    console.log('randomUsers :>> ', randomUsers);
  }, [randomUsers, searchValue]);

  return (
    <div className={styles.primaryInput}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          setSearchValue(searchValue);
        }}
      >
        <Input
          value={searchValue}
          handleChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for user"
          overrideClasses={styles.overrideInput}
        />
      </form>
      <Button onClick={() => console.log(searchValue)}>Select User</Button>
    </div>
  );
};
