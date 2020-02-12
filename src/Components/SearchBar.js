import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import PeedSearch from '../Queries/PeedSearch';
import SearchBarStyle from '../Static/Style/SearchBarStyle';

const SearchBar = () => {
    const classes = SearchBarStyle();
    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
    )
}


export default SearchBar;