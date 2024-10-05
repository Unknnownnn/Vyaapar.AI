import { Label } from 'src/components/label';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor width="100%" height="100%" src={`/assets/icons/navbar/${name}.svg`} />
);

export const navData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: icon('ic-analytics'),
  },
  {
    title: 'Portfolio',
    path: '/user',
    icon: icon('ic-user'),
  },
  {
    title: 'Companies',
    path: '/products',
    icon: icon('ic-cart'),
    
  },
  {
    title: 'Forum',
    path: '/blog',
    icon: icon('ic-blog'),
  },
  {
    title: 'Sign in to Web3',
    path: '/sign-in',
    icon: icon('ic-lock'),
  },

];
