import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Container utama navbar
export const NavContainer = styled.nav`
  background-color: #23272f; 
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
`;

// Konten navbar (logo & links)
export const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

// Logo GoCinema
export const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: #e50914;
  text-decoration: none;
  display: flex;
  align-items: center;

  span {
    color: #fff;
    margin-left: 4px;
  }
`;

// Container links navbar
export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    position: absolute;
    top: calc(100% + 1rem);
    left: 0;
    right: 0;
    width: 100%;
    background-color: #23272f; 
    backdrop-filter: blur(10px);
    flex-direction: column;
    align-items: center;
    gap: 0;
    padding: 1.5rem 0;
    border-radius: 0 0 12px 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    transform: translateY(-20px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    
    &.mobile-open {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
  }
`;

// Link navigasi dengan animasi
export const NavLink = styled(motion(Link))`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  font-size: 1rem;
  
  &:hover {
    color: #e50914;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #e50914;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  &.active {
    color: #e50914;
    
    &::after {
      width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1rem 2rem;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    &:last-child {
      border-bottom: none;
    }
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
    
    &:hover::after,
    &.active::after {
      width: 60%;
    }
    
    &:hover {
      background-color: rgba(229, 9, 20, 0.1);
    }
  }
`;

// Tombol menu mobile
export const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1002;
  
  span {
    width: 30px;
    height: 3px;
    background-color: #ffffff;
    border-radius: 2px;
    transition: all 0.3s ease;
    transform-origin: center;
  }
  
  &.open span:nth-child(1) {
    transform: rotate(45deg) translate(7px, 7px);
  }
  
  &.open span:nth-child(2) {
    opacity: 0;
    transform: translateX(20px);
  }
  
  &.open span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

// Overlay untuk menu mobile
export const MobileMenuOverlay = styled(motion.div)`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 998;
  }
`;