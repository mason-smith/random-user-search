import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Local Dependencies
import { fetchRandomUsers } from './searchAction';
import { selectRandomUserList } from './selectors';
import { User } from './types';
import { RootState } from 'redux/store';

export const SearchPage = () => {
  const dispatch = useDispatch();

  // Random users selector
  const randomUsers = useSelector<RootState, User[]>(selectRandomUserList);

  useEffect(() => {
    // Fetch random users on mount
    dispatch(fetchRandomUsers());
  }, [dispatch]);

  console.log('randomUsers :>> ', randomUsers);

  return <div>SEARCH PAGE</div>;
};
