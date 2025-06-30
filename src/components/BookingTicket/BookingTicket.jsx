import { useState, useEffect } from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../utils/constants';
import {
  BookingContainer,
  BookingTitle,
  BookingContent,
  PosterContainer,
  FormContainer,
  FormGroup,
  Label,
  Input,
  Select,
  SubmitButton
} from './BookingTicket.styled';
import PropTypes from 'prop-types';

const BookingTicket = ({ nowPlayingMovies }) => {
  const [selectedMovie, setSelectedMovie] = useState('');
  const [name, setName] = useState('');
  const [tickets, setTickets] = useState(1);
  const [moviePoster, setMoviePoster] = useState('');

  useEffect(() => {
    if (nowPlayingMovies && nowPlayingMovies.length > 0) {
      setSelectedMovie(nowPlayingMovies[0].id.toString());
    }
  }, [nowPlayingMovies]);

  useEffect(() => {
    if (selectedMovie && nowPlayingMovies) {
      const movie = nowPlayingMovies.find(m => m.id.toString() === selectedMovie);
      if (movie) {
        setMoviePoster(`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`);
      }
    }
  }, [selectedMovie, nowPlayingMovies]);

  const handleMovieChange = (e) => {
    setSelectedMovie(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed!\nName: ${name}\nMovie: ${nowPlayingMovies.find(m => m.id.toString() === selectedMovie)?.title}\nTickets: ${tickets}`);
    setName('');
    setTickets(1);
  };

  const posterVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.5 }
    }
  };

  return (
    <BookingContainer>
      <BookingTitle>Book Your Tickets</BookingTitle>
      <BookingContent>
        <PosterContainer
          key={selectedMovie}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={posterVariants}
        >
          {moviePoster && <img src={moviePoster} alt="Movie Poster" />}
        </PosterContainer>
        
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Your Name</Label>
              <Input 
                type="text" 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="tickets">Number of Tickets</Label>
              <Input 
                type="number" 
                id="tickets" 
                min="1" 
                max="10" 
                value={tickets} 
                onChange={(e) => setTickets(parseInt(e.target.value))} 
                required 
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="movie">Select Movie</Label>
              <Select 
                id="movie" 
                value={selectedMovie} 
                onChange={handleMovieChange}
                required
              >
                {nowPlayingMovies?.map(movie => (
                  <option key={movie.id} value={movie.id}>
                    {movie.title}
                  </option>
                ))}
              </Select>
            </FormGroup>
            
            <SubmitButton 
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </SubmitButton>
          </form>
        </FormContainer>
      </BookingContent>
    </BookingContainer>
  );
};

//  PropTypes untuk validasi props
BookingTicket.propTypes = {
  nowPlayingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};

export default BookingTicket;