import { useState, useEffect } from 'react';
import { getUpcoming } from '../../utils/api';
import { ComingSoon as ComingSoonComponent } from '../../components';
import {
  PageContainer,
  PageHeader,
  PageTitle,
  PageDescription,
  LoadingMessage
} from './ComingSoon.styled';

const ComingSoonPage = () => {
  // State untuk menyimpan data film dan status loading
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ambil data film upcoming saat komponen mount
  useEffect(() => {
    const fetchMovies = async () => {
        const data = await getUpcoming();
        setMovies(data);
        setLoading(false);
    };

    fetchMovies();
  }, []);

  // Tampilkan pesan loading jika data masih di-fetch
  if (loading) {
    return <LoadingMessage>Loading upcoming movies...</LoadingMessage>;
  }

  return (
    <PageContainer>
      {/* Header halaman */}
      <PageHeader>
        <PageTitle>Coming Soon</PageTitle>
        <PageDescription>
          Lihat  film-film yang akan tayang segera di bioskop. Temukan jadwal tayang di sini.
        </PageDescription>
      </PageHeader>
      {/* Komponen ComingSoon untuk menampilkan daftar film */}
      <ComingSoonComponent movies={movies} />
    </PageContainer>
  );
};

export default ComingSoonPage;