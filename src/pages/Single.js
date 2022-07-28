import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import ShowContext from '../context/shows/showsContext'

const Single = () => {
    const {getSingleShow, singleShow, loading} = useContext(ShowContext);
    const {id} = useParams();
    useEffect(() => {
      getSingleShow(id);

      // eslint-disable-next-line
    }, []);

    const removeTags = (text) => {
      if (text === null || text === ""){
        return false;
      }
      else{
        text = text.toString();
      }
      return text.replace(/(<([^>]+)>)/gi, "");
    };

  return (
    <>
    {loading ? <Loader /> : 
    <div className='singleShow'>
      <img src={singleShow.image ? singleShow.image.medium: "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"} 
      alt={singleShow.name} />
        <div className='singleShow_info'>
          <h1>{singleShow.name}</h1>
          {singleShow.genres && singleShow.genres.map(genre => (
            <span key={genre} className="singleShow_genre" >{genre}</span>
          ))}
          <p>
            <strong>Status: </strong> {singleShow.status && singleShow.status}
          </p>
          <p>
            <strong>Rating: </strong> {singleShow.rating ? singleShow.rating.average : "No rating"}
          </p>
          <p>
            <strong>Official Site: </strong> {singleShow.officialSite ? (<a href={singleShow.officialSite} 
            target='_blank' rel='noreferrer'>{singleShow.officialSite}</a>) : "No official site"}
          </p>
          <p>
            {singleShow.summary && removeTags(singleShow.summary)}
          </p>
        </div>
    </div>}
    </>
    )
}

export default Single