import { useState, useEffect } from 'react';
import { getNowPlaying, getMovieTrailer } from '../../utils/api';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../utils/constants';
import {
  PageContainer,
  PageHeader,
  PageTitle,
  PageDescription,
  LoadingMessage,
  MoviesGrid,
  MovieCard,
  PosterWrapper,
  PlayOverlay,
  PlayButton,
  ContentWrapper,
  MovieTitle,
  GenreList,
  Genre,
  MovieDescription,
  TrailerNotification
} from './NowShowing.styled';

const NowShowing = () => {
  // State untuk daftar film, loading, dan notifikasi trailer
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState('');

  // Ambil data film saat komponen mount
  useEffect(() => {
    const fetchMovies = async () => {
        const data = await getNowPlaying();
        setMovies(data);
        setLoading(false);
    };
    
    fetchMovies();
  }, []);

  // Tampilkan notifikasi sementara
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  // Handler play trailer: buka trailer YouTube di tab baru
  const handlePlayTrailer = async (movie) => {
    try {
      showNotification('Loading trailer...');
      const trailer = await getMovieTrailer(movie.id);
      
      if (trailer) {
        // Buka trailer YouTube di tab baru
        const youtubeUrl = `https://www.youtube.com/watch?v=${trailer.key}`;
        window.open(youtubeUrl, '_blank');
        showNotification(`Opening trailer for ${movie.title}`);
      } else {
        showNotification(`Trailer not available for ${movie.title}`);
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
      showNotification('Error loading trailer');
    }
  };

  // Variants animasi container dan item
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

  // Tampilkan pesan loading jika data masih di-fetch
  if (loading) {
    return <LoadingMessage>Loading movies...</LoadingMessage>;
  }

  return (
    <PageContainer>
      {/* Header halaman */}
      <PageHeader>
        <PageTitle>Now Showing</PageTitle>
        <PageDescription>
          Saksikan film-film terbaru yang sedang diputar. Klik tombol untuk menonton cuplikannya.
        </PageDescription>
      </PageHeader>
      
      {/* Grid daftar film */}
      <MoviesGrid
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {movies.map(movie => (
          <MovieCard key={movie.id} variants={itemVariants}>
            {/* Klik poster untuk play trailer */}
            <PosterWrapper onClick={() => handlePlayTrailer(movie)}>
              <img 
                src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`} 
                alt={movie.title} 
              />
              <PlayOverlay className="play-overlay">
                <PlayButton
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              </PlayOverlay>
            </PosterWrapper>
            <ContentWrapper>
              <MovieTitle>{movie.title}</MovieTitle>
              <GenreList>
                {/* Genre placeholder */}
                <Genre>Action</Genre>
                <Genre>Drama</Genre>
              </GenreList>
              <MovieDescription>{movie.overview}</MovieDescription>
            </ContentWrapper>
          </MovieCard>
        ))}
      </MoviesGrid>

      {/* Notifikasi trailer, muncul jika notification ada */}
      {notification && (
        <TrailerNotification
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
        >
          {notification}
        </TrailerNotification>
      )}
    </PageContainer>
  );
};

// Export komponen utama NowShowing
export default NowShowing;