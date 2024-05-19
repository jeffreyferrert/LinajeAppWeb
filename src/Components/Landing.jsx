import Button from '@mui/material/Button';
import {Box, Stack, TextField, useMediaQuery, useTheme} from "@mui/material";
import AbcIcon from '@mui/icons-material/Abc';
import {Grid,} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

const cardContent = {
  0: {
    icon: AccessTimeIcon,
    title: 'Experiencia',
    description: 'Hecho por criadores con décadas de experiencia para toda la comunidad gallística.'
  },
  1: {
    icon: PlaylistAddCheckIcon,
    title: 'Conveniencia',
    description: 'Conecta todo el historial de los animales, linajes, peleas, fotos y videos en una plataforma móvil personal.'
  },
  2: {
    icon: SearchIcon,
    title: 'Transparencia',
    description: 'Conoce de forma correcta y simple a los mejores individuos y linajes.'
  },
}

const Landing = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isExtraLargeScreen = useMediaQuery(theme.breakpoints.down('xl'));

  return (
    <Stack justifyContent={'center'} alignItems={'center'}
           sx={{position: 'relative', background: 'hsla(0,0%,100%,.9)'}}>

      {/* BANNER PRINCIPAL */}
      <Stack
        direction={isSmallScreen ? 'column' : 'row'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{height: '450px', width: '100%', marginBottom: '50px'}}
      >
        {/* TEXTOS */}
        <Stack
          alignItems={'center'}
          sx={{width: isSmallScreen ? '100%' : '30%', minWidth: '300px', fontWeight: '300'}}
        >
          <h1>Linajeapp</h1>
          <p style={{width: '90%', marginTop: '-10px', textAlign: 'center'}}>Plataforma digital que ayuda en la
            crianza animal para lograr las mejores decisiones</p>
          <br/>
          <Button variant="contained" sx={{background: 'black', border: '1px solid gray', borderRadius: '30px'}}>
            Contáctanos
          </Button>
        </Stack>

        {/* IMAGEN */}
        <Stack
          justifyContent={'center'}
          alignItems={'center'}
          sx={{height: '80%', width: isSmallScreen ? '90%' : '40%', minWidth: '300px',}}
        >
          <Stack justifyContent={'center'}
                 alignItems={'center'}
                 sx={{width: '50%', minWidth: '300px', height: '50%', background: 'lightgray'}}
          >
            IMAGEN
          </Stack>
          {/*<Box component={'img'} src={bannerImage} alt={'banner-img'} width={'300px'}/>*/}
        </Stack>
      </Stack>

      {/* FLOATING VALUE PROPS */}
      <Stack
        id="producto"
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          position: 'absolute',
          top: isSmallScreen ? '14%' : '22%',
          minHeight: '100px',
          width: isMediumScreen ? '85%' : isExtraLargeScreen ? '80%' : '70%',
          minWidth: isSmallScreen ? undefined : '600px',
          background: 'hsla(0,0%,100%,.9)',
          border: '1px solid black',
          borderRadius: '5px',
          textAlign: 'center',
        }}
      >
        <h3>SLOGAN O ALGO CORTO || 2 ORACIONES MAXIMO</h3>
        <Stack
          direction={isSmallScreen ? 'column' : 'row'}
          justifyContent={'space-around'}
          width={'100%'}
          marginTop={'-15px'}
        >
          {Object.values(cardContent).map((card, index) => {
            const Icon = card.icon;
            return (
              <Stack
                justifyContent={'center'} alignItems={'center'} key={index}
                sx={{
                  fontSize: isMediumScreen ? '0.8rem' : isExtraLargeScreen ? '0.9rem' : '0.85rem',
                  maxWidth: isMediumScreen ? 300 : 300,
                  padding: '10px',
                  fontWeight: '300',
                  margin: '0 auto'
                }}
              >
                <Icon/>
                <Typography variant="h6" sx={{fontWeight: 'bold'}}>
                  {card.title}
                </Typography>
                <br/>
                {card.description}
              </Stack>
            )
          })}
        </Stack>

      </Stack>

      {/*  APP FEATURES */}
      <Stack
        sx={{
          minHeight: '200px', width: '100%', background: '#FCEFE1', color: '#6C4D40',
        }}>
        <Stack
          justifyContent={'space-around'}
          alignItems={'center'}
          textAlign={'center'}
          direction={isSmallScreen ? 'column' : 'row'}
          marginTop={isSmallScreen ? '450px' : isMediumScreen ? '180px' : '130px'}
        >
          <Box maxWidth={'200px'} margin={'0 auto'}><p>FEATURE 1</p><p>FEATURE 1</p><p>FEATURE 1</p></Box>
          <Box sx={{
            width: isSmallScreen ? '80%' : '1px',
            height: isSmallScreen ? '1px' : '60%',
            background: '#6C4D40',
          }}/>
          <Box maxWidth={'200px'} margin={'0 auto'}><p>FEATURE 2</p><p>FEATURE 2</p><p>FEATURE 2</p></Box>
          <Box sx={{
            width: isSmallScreen ? '80%' : '1px',
            height: isSmallScreen ? '1px' : '60%',
            background: '#6C4D40'
          }}/>
          <Box maxWidth={'200px'} margin={'0 auto'}><p>FEATURE 3</p><p>FEATURE 3</p><p>FEATURE 3</p></Box>
        </Stack>

      </Stack>

      {/* NOSOTROS */}
      <Stack
        id="nosotros" alignItems={'center'}
        sx={{minHeight: '400px', width: '100%', background: 'hsla(0,0%,100%,.9)',}}
      >
        <h1 style={{margin: '20px'}}>Nosotros</h1>
        <Stack
          direction={isSmallScreen ? 'column-reverse' : 'row'}
          justifyContent={'center'}
          gap={'20px'}
          alignItems={'center'}
        >
          {/* IMAGEN */}
          <Stack
            justifyContent={'center'}
            alignItems={'center'}
            sx={{height: '60%', width: isSmallScreen ? '90%' : '25%', minWidth: '300px', minHeight: '250px'}}
          >

            <Stack
              justifyContent={'center'}
              alignItems={'center'}
              sx={{width: '50%', minWidth: '200px', height: '50%', background: 'lightgray'}}
            >
              IMAGEN
            </Stack>
            {/*<Box component={'img'} src={bannerImage} alt={'banner-img'} width={'300px'}/>*/}
          </Stack>

          {/* TEXTOS */}
          <Stack
            sx={{width: isSmallScreen ? '90%' : '40%', minWidth: isSmallScreen ? '300px' : '350px', fontWeight: '300'}}
          >
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aut commodi consequuntur culpa eius
              harum iure iusto laboriosam, maxime nostrum numquam odio provident quia quis tempora totam vero
              voluptatibus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet corporis dolorem ducimus eligendi,
              quod!</p>

          </Stack>
        </Stack>
      </Stack>

      {/* TESTIMONIOS */}
      <Stack
        id="testimonios" alignItems={'center'}
        sx={{minHeight: '400px', width: isSmallScreen ? '100%' : isMediumScreen ? '80%' : '70%', padding: '1.5rem 0'}}
      >
        <h1
          style={{
            margin: '20px',
            alignSelf: isSmallScreen ? 'center' : 'center',
            width: isSmallScreen ? '100%' : '100%',
            textAlign: isSmallScreen ? 'center' : 'inherit'
          }}
        >
          Testimonios
        </h1>

        <Stack
          justifyContent={'space-around'}
          direction={isSmallScreen ? 'column' : 'row'}
          gap={'20px'}
          sx={{width: isMediumScreen ? '100%' : '80%', margin: '0 auto'}}
        >
          <Stack gap={'20px'}>
            <Card sx={{display: 'flex', maxWidth: isSmallScreen ? 320 : 400, margin: '0 auto'}}>
              <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{width: 200}}>
                  <Typography sx={{mb: 1.5, fontSize: 11}} color="text.secondary" gutterBottom>
                    TESTIMONIO 2
                  </Typography>
                  <Typography sx={{fontSize: 11}} color="text.secondary">
                    NOMBRE USUARIO
                  </Typography>
                  <Typography variant="body2" sx={{fontSize: 11}}>
                    Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </CardContent>
              </Box>
            </Card>

            <Card sx={{display: 'flex', maxWidth: isSmallScreen ? 320 : 400, margin: '0 auto'}}>
              <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{width: 200}}>
                  <Typography sx={{mb: 1.5, fontSize: 11}} color="text.secondary" gutterBottom>
                    TESTIMONIO 2
                  </Typography>
                  <Typography sx={{fontSize: 11}} color="text.secondary">
                    NOMBRE USUARIO
                  </Typography>
                  <Typography variant="body2" sx={{fontSize: 11}}>
                    Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Stack>

          <Stack gap={'20px'}>
            <Card sx={{display: 'flex', maxWidth: isSmallScreen ? 320 : 400, margin: '0 auto'}}>
              <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{width: 200}}>
                  <Typography sx={{mb: 1.5, fontSize: 11}} color="text.secondary" gutterBottom>
                    TESTIMONIO 2
                  </Typography>
                  <Typography sx={{fontSize: 11}} color="text.secondary">
                    NOMBRE USUARIO
                  </Typography>
                  <Typography variant="body2" sx={{fontSize: 11}}>
                    Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </CardContent>
              </Box>
            </Card>

            <Card sx={{display: 'flex', maxWidth: isSmallScreen ? 320 : 400, margin: '0 auto'}}>
              <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{width: 200}}>
                  <Typography sx={{mb: 1.5, fontSize: 11}} color="text.secondary" gutterBottom>
                    TESTIMONIO 2
                  </Typography>
                  <Typography sx={{fontSize: 11}} color="text.secondary">
                    NOMBRE USUARIO
                  </Typography>
                  <Typography variant="body2" sx={{fontSize: 11}}>
                    Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Stack>

          <Stack gap={'20px'} display={isMediumScreen ? 'none' : 'inherit'}>
            <Card sx={{display: 'flex', maxWidth: isSmallScreen ? 320 : 400, margin: '0 auto'}}>
              <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{width: 200}}>
                  <Typography sx={{mb: 1.5, fontSize: 11}} color="text.secondary" gutterBottom>
                    TESTIMONIO 2
                  </Typography>
                  <Typography sx={{fontSize: 11}} color="text.secondary">
                    NOMBRE USUARIO
                  </Typography>
                  <Typography variant="body2" sx={{fontSize: 11}}>
                    Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </CardContent>
              </Box>
            </Card>

            <Card sx={{display: 'flex', maxWidth: isSmallScreen ? 320 : 400, margin: '0 auto'}}>
              <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{width: 200}}>
                  <Typography sx={{mb: 1.5, fontSize: 11}} color="text.secondary" gutterBottom>
                    TESTIMONIO 2
                  </Typography>
                  <Typography sx={{fontSize: 11}} color="text.secondary">
                    NOMBRE USUARIO
                  </Typography>
                  <Typography variant="body2" sx={{fontSize: 11}}>
                    Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Stack>

        </Stack>
      </Stack>

      {/* CONTACTANOS */}
      <Stack
        id="contacto" alignItems={'center'}
        sx={{
          minHeight: '400px',
          width: '100%',
          padding: '1.5rem 0',
          background: 'hsla(0,0%,100%,.9)'
        }}
      >
        <Stack sx={{width: isSmallScreen ? '100%' : isMediumScreen ? '80%' : '70%',}}>
          <h1
            style={{
              margin: '20px',
              alignSelf: isSmallScreen ? 'center' : 'center',
              width: isSmallScreen ? '100%' : '100%',
              textAlign: isSmallScreen ? 'center' : 'inherit'
            }}
          >
            Contacto
          </h1>

          <Grid container spacing={3} justifyContent={isSmallScreen ? 'center' : isMediumScreen ? 'left' : 'center'}>
            <Grid item xs={10} sm={5} xl={3}>
              <Stack direction="column" spacing={2}>
                <TextField id="outlined-basic" label="Nombre y Apellido" variant="outlined" fullWidth/>
                <TextField id="outlined-basic" label="Número de celular" variant="outlined" fullWidth/>
                <TextField id="outlined-basic" label="Correo Electronico" variant="outlined" fullWidth/>
              </Stack>
            </Grid>
            <Grid item xs={10} sm={7} xl={5}>
              <TextField id="outlined-basic" label="Mensaje" multiline variant="outlined" fullWidth rows={7.2}/>
            </Grid>
          </Grid>

          <Grid container spacing={3} justifyContent={'center'} mt={'1px'}>
            <Grid item xs={10} sm={5} xl={3}>
              <Button variant="contained" sx={{background: 'black', border: '1px solid gray', borderRadius: '30px'}}
                      fullWidth
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Stack>

    </Stack>
  )
}

export default Landing;

