import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import SearchBarStyle from '../Static/Style/SearchBarStyle';
import {withRouter} from 'react-router-dom';


const SearchBar = withRouter(({history}) => {
	const classes = SearchBarStyle();

  	const handleKeyPress = (e) => {
    	const term = e.target.value;
    	if (e.charCode === 13){
			history.push(`/search?term=${term}`);
			
		}
	}
  
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
			onKeyPress={handleKeyPress}
		/>
	</div>
  )
})


export default SearchBar;