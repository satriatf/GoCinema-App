import PropTypes from 'prop-types';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../utils/constants';
import {
  ComingSoonContainer,
  ComingSoonGrid,
  ComingSoonCard,
  PosterWrapper,
  ContentWrapper,
  MovieTitle,
  ReleaseDate
} from './ComingSoon.styled';


const ComingSoon = ({ movies }) => {
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
    <ComingSoonContainer>
      <ComingSoonGrid
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {movies.map(movie => (
          <ComingSoonCard key={movie.id} variants={itemVariants}>
            <PosterWrapper>
              <img 
                src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`} 
                alt={movie.title} 
              />
            </PosterWrapper>
            <ContentWrapper>
              <MovieTitle>{movie.title}</MovieTitle>
              <ReleaseDate>
                Release: {new Date(movie.release_date).toLocaleDateString()}
              </ReleaseDate>
            </ContentWrapper>
          </ComingSoonCard>
        ))}
      </ComingSoonGrid>
    </ComingSoonContainer>
  );
};

//  PropTypes untuk validasi props
ComingSoon.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      release_date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ComingSoon;