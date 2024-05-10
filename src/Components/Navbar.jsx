import {Box, Stack, useMediaQuery, useTheme} from "@mui/material";
import LogoFull from '../assets/logo_full.png'
import LogoShort from '../assets/logo_short.png'

const Navbar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack
      direction={'row'}
      justifyContent={isSmallScreen ? 'space-between' : 'space-around'}
      alignItems={'center'}
      sx={{
        height: '2.5rem',
        padding: isSmallScreen ? '12px 0.5rem' : '15px 2.5rem',
        background: 'hsla(0,0%,100%,.9)',
        fontWeight: '300',
        fontSize: isSmallScreen ? '0.8rem' : '1rem',
        border: '0 solid #c9c7c6',
        boxShadow: '0 0 10px rgba(0,0,0,.1)',
        zIndex:1000
      }}
    >
      <Box
        component={'img'}
        src={isSmallScreen ? LogoShort : LogoFull}
        alt={'logo'}
        width={isSmallScreen ? '40px' : '120px'}
      />
      <Stack
        direction={'row'}
        sx={{gap: isSmallScreen? '10px': '20px'}}
      >
        <span>Producto</span>
        <span>Nosotros</span>
        <span>Testimonios</span>
        <span>Contacto</span>
      </Stack>
    </Stack>
  );
}

export default Navbar;