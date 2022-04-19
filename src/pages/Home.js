import React from 'react'
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className='home ' >
        <h1 className='text-center text-light mt-5'> Hello From Home Page Let is start  :)  </h1>
        <Link className="col-lg-2 offset-5 btn btn-primary  text-light fs-5 mt-3" aria-current="page" to="/movies">
              Movies
            </Link>
    </div>
  )
}

export default Home