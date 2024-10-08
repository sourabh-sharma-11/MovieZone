import React, { useState } from 'react'
import { movies } from './Data.js'
import Navbar from './Navbar.jsx'

const Movies = () => {
  const [movieList, setMovieList] = useState(movies)
  const filterByCategory = (cat) => {
    setMovieList(movies.filter((data) => data.category == cat))
  }
  return (
    <>
    {/* <Navbar/> */}
      <div className='my-3 mx'>
        <div className='mx-auto text-center' style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap',gap:'10px'}}> <button onClick={() => setMovieList(movies)} type="button" className="btn btn-outline-primary mx-3 " >All</button>
          <button onClick={() => filterByCategory('Action')} type="button" className="btn   btn-outline-primary mx-3">Action</button>
          <button onClick={() => filterByCategory('Thriller')} type="button" className="btn btn-outline-light mx-3">Thriller</button>
          <button onClick={() => filterByCategory('Animation')} type="button" className=" btn btn-outline-info mx-3">Animation</button>
          <button onClick={() => filterByCategory('Horror')} type="button" className="btn btn-outline-warning mx-3">Horror</button>
          <button onClick={() => filterByCategory('Drama')} type="button" className="btn btn-outline-info mx-3">Drama</button>
          <button onClick={() => filterByCategory('Sci-Fi')} type="button" className="btn   btn-outline-light mx-3">Sci-Fi</button>
        </div>
      </div>

      <div
        style={{
          display: 'flex', justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          textAlign: 'center',
          //backgroundColor:'yellow', x
          margin: 'auto',
          marginTop: '1.5rem'
        }}>
        {movieList.map((data) => <div key={data.id} style={{ maxWidth: '280px', textAlign: 'center' }}>
          <div style={{ padding: '10px' }} className='hover_effect'>
            <img src={data.poster_path} alt="" style={{ width: '200px', height: '280PX', borderRadius: '10PX', border: '1PX solid yellow' }} />
          </div>
          <h5>{data.title}</h5>
          <p>{data.release_date}</p>
        </div>
        )}
      </div>
    </>
  )
}

export default Movies