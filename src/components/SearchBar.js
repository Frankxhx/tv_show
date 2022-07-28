import React, { useContext, useState } from 'react'
import AlertsContext from '../context/alerts/alertsContext';
import ShowContext from '../context/shows/showsContext';
import Alert from './Alert';


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const {searchShows} = useContext(ShowContext);
    const {alert, setAlert} = useContext(AlertsContext);


    const onSearchHandler = (e) => {
        e.preventDefault();
        if(searchTerm === ""){
            setAlert("Please enter something", "danger")
        }
        else{
        searchShows(searchTerm);
        }
    }
    
    return (
    <div className='searchBar'>
        {alert ? <Alert message={alert.message} type={alert.type} /> : null}
        <form className='searchBar_form'>
            <input type='text' placeholder='Search For Tv Show' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value) } />
             <button className='btn btn-block' onClick={onSearchHandler} >Search</button>
        </form>
    </div>
  )
}

export default SearchBar