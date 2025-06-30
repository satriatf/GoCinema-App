import PropTypes from 'prop-types'; 
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../utils/constants';
import {
  NewsContainer,
  NewsGrid,
  NewsCard,
  ImageWrapper,
  ContentWrapper,
  NewsTitle,
  NewsDate,
  NewsDescription,
  Rating
} from './News.styled';

const News = ({ movies = [] }) => {
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
    <NewsContainer>
      <NewsGrid
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {movies.map(movie => (
          <NewsCard key={movie.id} variants={itemVariants}>
            <ImageWrapper>
              <img 
                src={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : '/fallback.jpg'} 
                alt={movie.title} 
              />
            </ImageWrapper>
            <ContentWrapper>
              <NewsTitle>{movie.title}</NewsTitle>
              <NewsDate>
                {movie.release_date ? new Date(movie.release_date).toLocaleDateString() : '-'}
              </NewsDate>
              <NewsDescription>{movie.overview}</NewsDescription>
              <Rating>
                <span>{movie.vote_average ? movie.vote_average.toFixed(1) : '-'}</span>
                <p>User Rating</p>
              </Rating>
            </ContentWrapper>
          </NewsCard>
        ))}
      </NewsGrid>
    </NewsContainer>
  );
};

// Validasi props
News.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string,
      overview: PropTypes.string,
      vote_average: PropTypes.number
    })
  )
};

export default News;