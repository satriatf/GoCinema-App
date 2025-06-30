import { useState, useEffect } from 'react';
import { getTopRated } from '../../utils/api';
import { News as NewsComponent } from '../../components';
import {
  PageContainer,
  PageHeader,
  PageTitle,
  PageDescription,    
  LoadingMessage
} from './News.styled';

const NewsPage = () => {
  // State untuk menyimpan data film dan status loading
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ambil data film top rated saat komponen mount
  useEffect(() => {
    const fetchMovies = async () => {
        const data = await getTopRated();
        setMovies(data);
        setLoading(false);
    };

    fetchMovies();
  }, []);

  // Tampilkan pesan loading jika data masih di-fetch
  if (loading) {
    return <LoadingMessage>Loading movie news...</LoadingMessage>;
  }

  return (
    <PageContainer>
      {/* Header halaman */}
      <PageHeader>
        <PageTitle>Movie News</PageTitle>
        <PageDescription>
          Temukan berita terbaru tentang film, termasuk ulasan dan informasi terkini dari dunia perfilman.
        </PageDescription>
      </PageHeader>
      {/* Komponen News untuk menampilkan daftar film */}
      <NewsComponent movies={movies} />
    </PageContainer>
  );
};

export default NewsPage;