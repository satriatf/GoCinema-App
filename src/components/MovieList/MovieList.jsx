import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../utils/constants';
import {
  Section,
  SectionHeader,
  ViewAllLink,
  MoviesGrid,
  MovieCard,
  MoviePoster,
  MovieInfo,
  MovieTitle,
  MovieDate
} from './MovieList.styled';

const MovieList = ({ title, movies, viewAllLink, limit = 4 }) => {
  const [displayMovies, setDisplayMovies] = useState([]);

  useEffect(() => {
    if (movies && movies.length > 0) {
      setDisplayMovies(movies.slice(0, limit));
    }
  }, [movies, limit]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Section>
      <SectionHeader>
        <h2>{title}</h2>
        {viewAllLink && <ViewAllLink to={viewAllLink}>View All</ViewAllLink>}
      </SectionHeader>
      
      <MoviesGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {displayMovies.map((movie) => (
          <MovieCard key={movie.id} variants={itemVariants}>
            <MoviePoster>
              <img 
                src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`} 
                alt={movie.title} 
              />
            </MoviePoster>
            <MovieInfo>
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieDate>
                {movie.release_date ? new Date(movie.release_date).toLocaleDateString() : 'Coming Soon'}
              </MovieDate>
            </MovieInfo>
          </MovieCard>
        ))}
      </MoviesGrid>
    </Section>
  );
};

//  PropTypes untuk validasi props
MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
    })
  ).isRequired,
  viewAllLink: PropTypes.string,
  limit: PropTypes.number,
};

export default MovieList;