import { MdSearch } from 'react-icons/md';

const SearchBar =({setSearchcontentFunction}) =>{   

    return(
        <div className='search-bar'>
            <MdSearch className='search-icon' size='1.3em'/>
            <input type='text' placeholder='Type your search..' onChange={(event)=>setSearchcontentFunction(event.target.value)}/>
        </div>
    );
}

export default SearchBar;