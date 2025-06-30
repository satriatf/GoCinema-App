import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MENU_ITEMS } from '../../utils/constants';
import { 
  NavContainer, 
  NavContent, 
  Logo, 
  NavLinks, 
  NavLink,
  MobileMenuButton,
  MobileMenuOverlay
} from './Navbar.styled';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <NavContainer>
      <NavContent>
        <Logo to="/" onClick={closeMobileMenu}>
          Go<span>Cinema</span>
        </Logo>
        
        <NavLinks className={isMobileMenuOpen ? 'mobile-open' : ''}>
          {MENU_ITEMS.map((item) => (
            <NavLink 
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
              onClick={closeMobileMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </NavLink>
          ))}
        </NavLinks>

        <MobileMenuButton 
          onClick={toggleMobileMenu}
          className={isMobileMenuOpen ? 'open' : ''}
        >
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuButton>
      </NavContent>

      {isMobileMenuOpen && (
        <MobileMenuOverlay 
          onClick={closeMobileMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </NavContainer>
  );
};

export default Navbar;