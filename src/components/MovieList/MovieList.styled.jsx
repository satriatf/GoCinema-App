import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Section utama MovieList
export const Section = styled.section`
  margin: 3rem 0;
`;

// Header section (judul & link View All)
export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  h2 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #fff;
    margin: 0;
  }
`;

// Link "View All"
export const ViewAllLink = styled(Link)`
  color: #e50914;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

// Grid daftar film
export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

// Kartu film dengan animasi
export const MovieCard = styled(motion.div)`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  background: #1a1a1a;
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
  }
`;

// Poster film
export const MoviePoster = styled.div`
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
    transition: transform 0.3s ease;
  }

  ${MovieCard}:hover & img {
    transform: scale(1.05);
  }
`;

// Info film (judul & tanggal)
export const MovieInfo = styled.div`
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

// Judul film
export const MovieTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: #fff;
`;

// Tanggal rilis film
export const MovieDate = styled.p`
  font-size: 0.85rem;
  color: #aaa;
  margin: 0;
  margin-top: auto;
`;