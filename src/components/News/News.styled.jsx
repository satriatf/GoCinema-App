import styled from 'styled-components';
import { motion } from 'framer-motion';

// Container utama News
export const NewsContainer = styled.div`
  margin: 2rem 0;
`;

// Grid daftar berita
export const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

// Kartu berita dengan animasi
export const NewsCard = styled(motion.div)`
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 1.5rem;
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Wrapper gambar berita
export const ImageWrapper = styled.div`
  height: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Wrapper konten berita
export const ContentWrapper = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

// Judul berita
export const NewsTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 0.8rem;
  color: #fff;
`;

// Tanggal berita
export const NewsDate = styled.p`
  font-size: 0.85rem;
  color: #aaa;
  margin: 0 0 1rem;
`;

// Deskripsi berita (3 baris, ellipsis jika lebih)
export const NewsDescription = styled.p`
  font-size: 0.95rem;
  color: #ddd;
  margin: 0;
  line-height: 1.6;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

// Rating user
export const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;

  span {
    background: #e50914;
    color: #fff;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-weight: 600;
    font-size: 0.9rem;
    margin-right: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: #ddd;
    margin: 0;
  }
`;