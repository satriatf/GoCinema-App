import styled from 'styled-components';
import { motion } from 'framer-motion';

// Container utama halaman Now Showing
export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

// Header halaman (judul & deskripsi)
export const PageHeader = styled.div`
  margin: 2rem 0 3rem;
  text-align: center;
`;

// Judul halaman Now Showing
export const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Deskripsi halaman Now Showing
export const PageDescription = styled.p`
  font-size: 1.1rem;
  color: #ccc;
  max-width: 700px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Grid daftar film
export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
`;

// Kartu film dengan animasi
export const MovieCard = styled(motion.div)`
  background-color: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
`;

// Wrapper poster film, klik untuk play trailer
export const PosterWrapper = styled.div`
  position: relative;
  height: 0;
  padding-top: 150%;
  overflow: hidden;
  cursor: pointer;
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  &:hover .play-overlay {
    opacity: 1;
  }
`;

// Overlay play button di atas poster
export const PlayOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

// Tombol play (animasi)
export const PlayButton = styled(motion.div)`
  width: 80px;
  height: 80px;
  background-color: rgba(229, 9, 20, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &::after {
    content: '';
    width: 0;
    height: 0;
    border-left: 25px solid white;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    margin-left: 5px;
  }
`;

// Wrapper konten film (judul, genre, deskripsi)
export const ContentWrapper = styled.div`
  padding: 1.5rem;
`;

// Judul film
export const MovieTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 0.8rem;
  color: white;
`;

// Daftar genre (placeholder)
export const GenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

// Genre (placeholder)
export const Genre = styled.span`
  background-color: #333;
  color: #ddd;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

// Deskripsi film (overview)
export const MovieDescription = styled.p`
  font-size: 0.95rem;
  color: #ddd;
  margin: 0;
  line-height: 1.6;
  
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

// Pesan loading saat data di-fetch
export const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #ccc;
`;

// Notifikasi trailer (misal: loading, error, sukses)
export const TrailerNotification = styled(motion.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #e50914;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  font-weight: 500;
`;