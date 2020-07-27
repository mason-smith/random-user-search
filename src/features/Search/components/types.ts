import { MouseEvent } from 'react';

// Local Dependencies
import { User } from '../types';

export interface ListProps {
  options: User[];
  activeSuggestion: number;
  onClick: (option: User) => void;
}
