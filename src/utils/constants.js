export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
export const POSTER_SIZE = 'w500';
export const BACKDROP_SIZE = 'original';

// Daftar route utama aplikasi
export const ROUTES = {
  HOME: '/',                
  NOW_SHOWING: '/now-showing', 
  COMING_SOON: '/coming-soon', 
  NEWS: '/news',               
};

// Daftar menu navigasi untuk Navbar
export const MENU_ITEMS = [
  { name: 'Home', path: ROUTES.HOME },
  { name: 'Now Showing', path: ROUTES.NOW_SHOWING },
  { name: 'Coming Soon', path: ROUTES.COMING_SOON },
  { name: 'News', path: ROUTES.NEWS },
];