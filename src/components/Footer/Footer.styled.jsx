import styled from 'styled-components';

// Container utama footer
export const FooterContainer = styled.footer`
  background-color: #23272f; 
  color: #fff;
  padding: 2rem;
  margin-top: 4rem;
`;

// Konten footer (centered)
export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

// Copyright dan link
export const Copyright = styled.p`
  margin: 0;
  font-size: 0.9rem;

  a {
    color: #e50914;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;