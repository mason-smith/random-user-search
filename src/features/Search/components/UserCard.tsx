import React, { FC } from 'react';

// Local Dependencies
import { UserCardProps } from './types';
import styles from './UserCard.module.css';

const UserCard: FC<UserCardProps> = (props) => {
  const { selectedUser } = props;

  console.log('selectedUser :>> ', selectedUser);

  return (
    <div className={`${styles.card} ${styles.cardContainer}`}>
      <img
        className={styles.round}
        alt={`${selectedUser.name.first} profile`}
        src={selectedUser.picture.large}
      />
      <h3>
        {selectedUser.name.first} {selectedUser.name.last}
      </h3>
      <p>{selectedUser.email}</p>
      <p>Cell: {selectedUser.cell}</p>
      <h6>
        {selectedUser.location.city}, {selectedUser.location.state}
      </h6>
    </div>
  );
};

export default UserCard;
