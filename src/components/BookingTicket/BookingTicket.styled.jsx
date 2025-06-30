import styled from 'styled-components';
import { motion } from 'framer-motion';

// Container utama booking
export const BookingContainer = styled.section`
  background: #1a1a1a;
  border-radius: 12px;
  padding: 2rem;
  margin: 3rem 0;
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
`;

// Judul booking
export const BookingTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 1.5rem;
  text-align: center;
`;

// Layout konten booking (poster & form)
export const BookingContent = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Poster film dengan animasi
export const PosterContainer = styled(motion.div)`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  height: 400px;

  @media (max-width: 768px) {
    height: 350px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Container form booking
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// Grup input form
export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

// Label input
export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
`;

// Input teks & angka
export const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  background: #2c2c2c;
  border: 1px solid #444;
  border-radius: 4px;
  color: #fff;
  font-family: 'Poppins', sans-serif;

  &:focus {
    outline: none;
    border-color: #e50914;
  }
`;

// Select dropdown
export const Select = styled.select`
  width: 100%;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  background: #2c2c2c;
  border: 1px solid #444;
  border-radius: 4px;
  color: #fff;
  font-family: 'Poppins', sans-serif;

  &:focus {
    outline: none;
    border-color: #e50914;
  }
`;

// Tombol submit dengan animasi
export const SubmitButton = styled(motion.button)`
  background: #e50914;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 0.5rem;
  font-family: 'Poppins', sans-serif;

  &:hover {
    background: #f40612;
  }
`;