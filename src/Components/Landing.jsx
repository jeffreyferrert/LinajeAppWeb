import Button from '@mui/material/Button';
import MailIcon from '@mui/icons-material/Mail';
import {Box, CardMedia, Stack, TextField, useMediaQuery, useTheme} from "@mui/material";
import AbcIcon from '@mui/icons-material/Abc';
import {Grid,} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const cardContent = {
  0: {
    icon: AbcIcon,
    title: 'VALUE PROP 1',
    description: 'description1'
  },
  1: {
    icon: AbcIcon,
    title: 'VALUE PROP 2',
    description: 'description2'
  },
  2: {
    icon: AbcIcon,
    title: 'VALUE PROP 3',
    description: 'description3'
  },
  3: {
    icon: AbcIcon,
    title: 'VALUE PROP 4',
    description: 'description4'
  }
}

const Landing = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

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
          <h1>LinajeApp</h1>
          <p>Lorem ipsum dolor sit amet, consectetur.<br/> Ipsum nam nulla reprehenderit.</p>
          <br/>
          <Button variant="contained" endIcon={<MailIcon/>} sx={{background: 'black'}}>
            Contactanos
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
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          position: 'absolute',
          top: isSmallScreen ? '16%' : '23%',
          minHeight: '100px',
          width: '80%',
          minWidth: isSmallScreen ? undefined : '600px',
          background: 'hsla(0,0%,100%,.9)',
          border: '1px solid black',
          borderRadius: '5px',
          textAlign: 'center'
        }}
      >
        <h3>SLOGAN O ALGO CORTO || 2 ORACIONES MAXIMO</h3>
        <Stack direction={isSmallScreen ? 'column' : 'row'} justifyContent={'space-around'} width={'100%'}
               marginTop={'-15px'}>

          {Object.values(cardContent).map((card, index) => {
            const Icon = card.icon;
            return (
              <Stack justifyContent={'center'} alignItems={'center'} key={index}
                     sx={{maxWidth: 300, padding: '10px', fontWeight: '300', margin: '0 auto'}}>
                <Icon/>
                {card.title}
                <br/>
                {card.description}
              </Stack>
            )
          })}
        </Stack>

      </Stack>

      {/*  APP FEATURES */}
      <Stack sx={{minHeight: '200px', width: '100%', background: '#FCEFE1', color: '#6C4D40'}}>
        <Stack
          justifyContent={'space-around'}
          alignItems={'center'}
          textAlign={'center'}
          direction={isSmallScreen ? 'column' : 'row'}
          marginTop={isSmallScreen ? '400px' : '130px'}
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
        alignItems={'center'}
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
        alignItems={'center'}
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
          <Stack>
            <Card sx={{width: isSmallScreen ? 320 : 275, margin: '0 auto'}}>
              <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                  TESTIMONIO 1
                </Typography>
                <CardMedia
                  component="img"
                  height="110"
                  image="/static/images/cards/paella.jpg"
                  alt="IMAGEN"
                />
                <Typography sx={{mb: 1.5}} color="text.secondary">
                  NOMBRE USUARIO
                </Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>
              </CardContent>
            </Card>
          </Stack>

          <Stack gap={'20px'}>
            <Card sx={{display: 'flex', maxWidth: isSmallScreen ? 320 : 400, margin: '0 auto'}}>
              <CardMedia
                component="img"
                height="100"
                width="100"
                image="/static/images/cards/paella.jpg"
                alt="IMAGEN"
              />
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
              <CardMedia
                component="img"
                height="100"
                width="100"
                image="/static/images/cards/paella.jpg"
                alt="IMAGEN"
              />
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
              <CardMedia
                component="img"
                height="100"
                width="100"
                image="/static/images/cards/paella.jpg"
                alt="IMAGEN"
              />
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
              <CardMedia
                component="img"
                height="100"
                width="100"
                image="/static/images/cards/paella.jpg"
                alt="IMAGEN"
              />
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
        alignItems={'center'}
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
            Contactanos
          </h1>

          <Grid container spacing={3} justifyContent={isSmallScreen ? 'center' : isMediumScreen ? 'left' : 'center'}>
            <Grid item xs={10} sm={5} xl={3}>
              <Stack direction="column" spacing={2}>
                <TextField id="outlined-basic" label="Nombre y Apellido" variant="outlined" fullWidth/>
                <TextField id="outlined-basic" label="Correo Electronico" variant="outlined" fullWidth/>
                <TextField id="outlined-basic" label="Número de celular" variant="outlined" fullWidth/>
              </Stack>
            </Grid>
            <Grid item xs={10} sm={7} xl={5}>
              <TextField id="outlined-basic" label="Mensaje" multiline variant="outlined" fullWidth rows={7.2}/>
            </Grid>
          </Grid>

          <Grid container spacing={3} justifyContent={'center'} mt={'1px'}>
            <Grid item xs={10} sm={5} xl={3}>
              <Button variant="contained" color="primary" fullWidth>Submit</Button>
            </Grid>
          </Grid>
        </Stack>
      </Stack>

    </Stack>
  )
}

export default Landing;

