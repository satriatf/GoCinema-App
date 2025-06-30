import { FooterContainer, FooterContent, Copyright } from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>
          <p>&copy; 2025 GoCinema.</p>
          Created by <a href="https://github.com/satriatf" target="_blank" rel="noopener noreferrer">Satria Tri Ferdiansyah</a>
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;