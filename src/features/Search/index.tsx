import React, { useEffect, useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Local Dependencies
import { fetchRandomUsers } from './searchAction';
import { selectRandomUserList } from './selectors';
import { User } from './types';
import { RootState } from 'redux/store';
import Input from 'components/Input';
// import Button from 'components/Button';
import styles from './Search.module.css';
import List from './components/List';
import UserCard from './components/UserCard';

export const SearchPage = () => {
  const dispatch = useDispatch();

  // Pieces of local state
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [activeSuggestion, setActiveSuggestion] = useState<number>(0);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Random users selector
  const randomUsers = useSelector<RootState, User[]>(selectRandomUserList);

  useEffect(() => {
    // Fetch random users on mount
    dispatch(fetchRandomUsers());
  }, [dispatch]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    const filteredArray = randomUsers
      .filter((user: User) => {
        return (
          // Check user email
          user.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
          // Check user last name
          user.name.last.toLowerCase().includes(e.target.value.toLowerCase())
        );
      })
      .filter(
        // Remove possible duplicates
        (user, index, self) =>
          index === self.findIndex((r) => r.id.value === user.id.value)
      );
    if (e.target.value.length >= 3) {
      setFilteredUsers(filteredArray.splice(0, 10));
    } else {
      // Don't display anything if less than 3 characters
      setFilteredUsers([]);
    }
  };

  const handleClick = (option: User) => {
    // Update the user input and reset the rest of the state
    setActiveSuggestion(0);
    setFilteredUsers([]);
    setSelectedUser(option);
  };

  const handleKeyDown = (keyCode: number) => {
    // User pressed the enter key, update the input and close the
    // suggestions
    if (keyCode === 13) {
      setActiveSuggestion(0);
      setSelectedUser(filteredUsers[activeSuggestion]);
      setFilteredUsers([]);
    }
    // User pressed the up arrow, decrement the index
    else if (keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1);
    }
    // User pressed the down arrow, increment the index
    else if (keyCode === 40) {
      if (activeSuggestion - 1 === filteredUsers.length) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1);
    }
  };

  return (
    <>
      <div className={styles.primaryInput}>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            setSearchValue(searchValue);
          }}
        >
          <Input
            value={searchValue || ''}
            onChange={(e) => handleSearchChange(e)}
            placeholder="Search for user"
            overrideClasses={styles.overrideInput}
            onKeyDown={(e) => handleKeyDown(e.keyCode)}
            list="random-users"
            name="random-users"
            id="random-users"
          />
        </form>
        {/* <Button onClick={() => console.log(searchValue)}>Select User</Button> */}
      </div>
      {selectedUser ? (
        <div className={styles.selectedUser}>
          <UserCard selectedUser={selectedUser} />
        </div>
      ) : null}
      <List
        onClick={(e) => handleClick(e)}
        options={filteredUsers}
        activeSuggestion={activeSuggestion}
      />
    </>
  );
};
