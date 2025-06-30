import styled from 'styled-components';
import { motion } from 'framer-motion';

// Container utama halaman Home
export const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

// Bagian hero/banner di atas halaman
export const HeroSection = styled(motion.div)`
  margin: 2rem 0 4rem;
  text-align: center;
`;

// Judul utama di hero section
export const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
  
  span {
    color: #e50914;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

// Subjudul di hero section
export const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #ccc;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Pesan loading saat data film di-fetch
export const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #ccc;
`;

