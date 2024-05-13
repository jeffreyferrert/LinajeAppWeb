import Navbar from "./Components/Navbar.jsx";
import Landing from "./Components/Landing.jsx";
import Footer from "./Components/Footer.jsx";
import {Stack} from "@mui/material";

function App() {

  return (
    <Stack backgroundColor={'#F6F5F2'} width={'100vw'} height={'100vh'} color={'black'}
           fontFamily={'Poppins, sans-serif'}>
      <Navbar/>
      <Landing/>
      <Footer/>
    </Stack>
  )
}

export default App
