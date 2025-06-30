import { useState, useEffect } from 'react';
import { getNowPlaying, getUpcoming, getTopRated } from '../utils/api';
import { ROUTES } from '../utils/constants';
import MovieList from '../components/MovieList/MovieList';
import BookingTicket from '../components/BookingTicket/BookingTicket';
import {
  HomeContainer,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  LoadingMessage
} from './Home.styled';

const Home = () => {
  // State untuk menyimpan data film dari API
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data film saat komponen pertama kali di-mount
  useEffect(() => {
    const fetchMovies = async () => {
        // Ambil data film secara paralel
        const [nowPlayingData, upcomingData, topRatedData] = await Promise.all([
          getNowPlaying(),
          getUpcoming(),
          getTopRated()
        ]);
        
        setNowPlaying(nowPlayingData);
        setUpcoming(upcomingData);
        setTopRated(topRatedData);
        setLoading(false);
      };
    
    fetchMovies();
  }, []);

  if (loading) {
    // Tampilkan pesan loading saat data film masih di-fetch
    return <LoadingMessage>Loading movies...</LoadingMessage>;
  }

  return (
    <HomeContainer>
      {/* Hero Section: Judul dan subjudul utama halaman */}
      <HeroSection
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <HeroTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Welcome to Go<span>Cinema</span>
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Temukan film terbaru, yang akan datang, dan pesan tiket dengan mudah.
        </HeroSubtitle>
      </HeroSection>
      
      {/* Daftar film yang sedang tayang */}
      <MovieList 
        title="Now Showing" 
        movies={nowPlaying} 
        viewAllLink={ROUTES.NOW_SHOWING}
        limit={5}
      />
      
      {/* Daftar film yang akan datang */}
      <MovieList 
        title="Coming Soon" 
        movies={upcoming} 
        viewAllLink={ROUTES.COMING_SOON}
        limit={5}
      />
      
      {/* Daftar film top rated sebagai news */}
      <MovieList 
        title="News" 
        movies={topRated} 
        viewAllLink={ROUTES.NEWS}
        limit={5}
      />
      
      {/* Form booking tiket */}
      <BookingTicket nowPlayingMovies={nowPlaying} />
    </HomeContainer>
  );
};

export default Home;