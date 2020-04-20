import React, { useState } from 'react';
import classes from './Navbar.module.scss';
import SearchIcon from '@material-ui/icons/Search';
import { Nav} from '../index';


function Navbar() {
    const [search, setSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('')

    const submitSearch = e => {
         e.preventDefault();
         setSearchValue('');
         alert ('searched'); 
    }
    const openSearch = () => {
        setSearch(!search);
    }

    return (
        <div className={classes.Navbar}>
           <ul className={classes.NavbarMenu}>
              <Nav />
           </ul>
           <div className={classes.Search}>
               <form className={classes.SearchForm} onSubmit={submitSearch}>
                    <input className={search ? classes.active :  classes.SearchInput} 
                            type='text' 
                            placeholder="Search"
                            value={searchValue}
                            onChange={e => setSearchValue (e.target.value)}/>
                    <SearchIcon className={classes.SearchIcon} onClick={openSearch} />
               </form>
           </div>
        </div>
    )
}
export default Navbar;