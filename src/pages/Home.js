import React, { useContext } from 'react'
import SearchBar from '../components/SearchBar'
import ShowContext from '../context/shows/showsContext'
import ListItem from '../components/ListItem'
import Loader from '../components/Loader'

const Home = () => {
  const showsContext = useContext(ShowContext);
  const {loading, shows} = showsContext;

  return (
    <div className='home'>
      <SearchBar />
      {loading ? <Loader />: <div className="homePage_list">{shows.map(item => 
      <ListItem 
      key={item.show.id}
      id={item.show.id}
      image={item.show.image ? item.show.image.medium: "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"}
      name={item.show.name}
      rating={item.show.rating.average ? item.show.rating.average : "No rating"}
      />)}</div> }
    </div>
  )
}

export default Home 