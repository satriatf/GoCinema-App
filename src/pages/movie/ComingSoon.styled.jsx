import styled from 'styled-components';
// Container utama halaman Coming Soon
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

// Judul halaman Coming Soon
export const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Deskripsi halaman Coming Soon
export const PageDescription = styled.p`
  font-size: 1.1rem;
  color: #ccc;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Pesan loading saat data di-fetch
export const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #ccc;
`;