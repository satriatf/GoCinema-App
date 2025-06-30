import styled from 'styled-components';
import { motion } from 'framer-motion';

// Container utama Coming Soon
export const ComingSoonContainer = styled.div`
  margin: 2rem 0;
`;

// Grid untuk kartu film
export const ComingSoonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

// Kartu film Coming Soon dengan animasi
export const ComingSoonCard = styled(motion.div)`
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
`;

// Wrapper poster film dengan badge "COMING SOON"
export const PosterWrapper = styled.div`
  position: relative;
  height: 0;
  padding-top: 150%;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: 'COMING SOON';
    position: absolute;
    top: 10px;
    right: 10px;
    background: #e50914;
    color: #fff;
    padding: 0.3rem 0.5rem;
    font-size: 0.7rem;
    font-weight: 600;
    border-radius: 4px;
    letter-spacing: 1px;
  }
`;

// Wrapper konten judul dan tanggal rilis
export const ContentWrapper = styled.div`
  padding: 1.5rem;
`;

// Judul film
export const MovieTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: #fff;
`;

// Tanggal rilis film
export const ReleaseDate = styled.p`
  font-size: 0.9rem;
  color: #e50914;
  font-weight: 500;
  margin: 0;
`;