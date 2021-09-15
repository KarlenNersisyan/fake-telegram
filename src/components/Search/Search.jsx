import React from 'react';

import { Search } from '../Icons/icons';
import { types } from '../../constants/formTypes.constant';

import classes from './Search.module.css';

function InputSearch() {
  return (
    <div className={classes.searchBox}>
      <input
        type={types.input.search.type}
        className={classes.search}
        placeholder={types.input.search.name}
      />
      <div className={classes.searchIcon}>
        <Search />
      </div>
    </div>
  );
}

export default InputSearch;
