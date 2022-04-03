import { BiSearch } from "react-icons/bi";

const SearchBar = ({ name, value, handleChange }) => {
    return (
        <>
            <p className="title">Filter</p>
            <div className="searchbar">
                <BiSearch className="searchbar_icon" size= {21}/>
                <input type="search" id="search" placeholder="Search" name={name} value={value} className="search" onChange={handleChange} />
            </div>
        </>

    )
}

export default SearchBar;