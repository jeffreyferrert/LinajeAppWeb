import {Box, Stack, useMediaQuery, useTheme} from "@mui/material";
import LogoFull from '../assets/logo_full.png'
import LogoShort from '../assets/logo_short.png'
import {Link} from 'react-scroll'
import styled from '@emotion/styled'

const StyledStack = styled(Stack)({
  '& a': {
    color: 'gray',
    textDecoration: 'none',
    '&:hover': {
      color: 'black',
      textDecoration: 'underline'
    }
  }
});

const Navbar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack
      direction={'row'}
      justifyContent={'space-around'}
      alignItems={'center'}
      sx={{
        position: 'fixed',
        width: '100%',
        top: 0,
        height: '2.5rem',
        padding: isSmallScreen ? '12px 0.5rem' : '15px 2.5rem',
        background: 'hsla(0,0%,100%,.9)',
        fontWeight: '300',
        fontSize: isSmallScreen ? '0.8rem' : '1rem',
        border: '0 solid #c9c7c6',
        boxShadow: '0 0 10px rgba(0,0,0,.1)',
        zIndex: 1000
      }}
    >
      <Box
        component={'img'}
        src={isSmallScreen ? LogoShort : LogoFull}
        alt={'logo'}
        width={isSmallScreen ? '40px' : '120px'}
      />
      <StyledStack
        direction={'row'}
        sx={{gap: isSmallScreen ? '10px' : '20px'}}
      >
        <Link to="producto" smooth={true} duration={500} offset={-70}><span>Producto</span></Link>
        <Link to="nosotros" smooth={true} duration={500} offset={-70}><span>Nosotros</span></Link>
        <Link to="testimonios" smooth={true} duration={500} offset={-70}><span>Testimonios</span></Link>
        <Link to="contacto" smooth={true} duration={500} offset={-70}><span>Contacto</span></Link>
      </StyledStack>
    </Stack>
  );
}

export default Navbar;