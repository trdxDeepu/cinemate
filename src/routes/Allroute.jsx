import { Routes, Route } from "react-router-dom";
import MovieDetail from '../pages/MovieDetail';
import MovieList  from '../pages/MovieList';
import SearchPage from "../pages/SearchPage"; 
import PageNotfound from '../pages/PageNotFound'

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="movie /:id" element={<MovieDetail />} />
        <Route path="movies/top" element={<MovieList />} />
        <Route path="movies/popular" element={<MovieList />} />
        <Route path="movies/upcoming" element={<MovieList />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="*" element={<PageNotfound />} />
      </Routes>
    </>
  );
};
