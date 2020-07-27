import React, { FC } from 'react';

// Local Dependencies
import { ListProps } from './types';
import styles from './List.module.css';

const List: FC<ListProps> = (props) => {
  const { options, activeSuggestion } = props;
  return (
    <div className={styles.list}>
      {options?.length ? (
        <ul className={styles.suggestions}>
          {options.map((option, idx) => {
            let active;

            // Flag the active suggestion with a class
            if (idx === activeSuggestion) {
              active = styles.suggestionActive;
            }
            return (
              <li
                className={active}
                key={option.name.first}
                // onClick={onClick}
              >
                <img
                  alt={`${option.name.first} ${option.name.last} thumbnail`}
                  src={option.picture.thumbnail}
                ></img>
                {`${option.name.first} ${option.name.last} - ${option.phone}`}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No results were found</p>
      )}
    </div>
  );
};

export default List;
