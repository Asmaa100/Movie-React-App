import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Favourites  from "./pages/favourites";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";



// const App = () => {
//   let routes = useRoutes([
//     { path: "/", element: <Favourites /> },
//   ]);
//   return routes;
// };

const AppWrapper = () => {
  return (
    <Router>
     <Navbar/>
     <div className='container-fluid mt-5'>

     <Routes>
        <Route path="/" exact element= {<Home/>}/>
        <Route path="/favourites" element= {<Favourites/>}/>
        <Route path="/movies" element= {<Movies/>}/>
        <Route path="/movie-details/:id" element= {<MovieDetails />}/>
        <Route path="*" element= {<NotFound/>}/>
      </Routes>
     </div>
      
    </Router>
  );
};

export default AppWrapper;