
import './App.css';

import { ChakraProvider, HStack, Button, Box, useMediaQuery  } from "@chakra-ui/react";
import { Link, Element } from 'react-scroll';
import { extendTheme } from "@chakra-ui/react";
import Navigation from './Components/Navigation';
import Profile from './Components/Profile';
import { Flex, Image } from '@chakra-ui/react';




const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.100",
        margin: 0
      },
    },
  },
});

function App() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
    return (
      
      <ChakraProvider theme={theme}>
        
        <Navigation />
       
        
        <HStack spacing='80px'>
          <Flex>
          <Profile/>
          </Flex>
          
          <Flex>
            <Image
            boxSize={isMobile ? "150px" : "300px"}
            src={process.env.PUBLIC_URL + "/images/1684809288078.jpg"}
            alt="headshot"
          />
          </Flex>
        
        </HStack>
        <Link to="resumeSection" smooth={true} duration={500}>
          <Button colorScheme="teal" style={{left:"50%"}}  mt={4} >
            View Resume
          </Button>
        </Link>
        <Element name="resumeSection"   >
          <Box
            position="absolute" // Use relative positioning
            top = "180%"// Adjust the negative value to control the distance it goes down
            style={{left : "25%"}}
            py={10}
            textAlign="center"
          >
          
          <embed
          src={process.env.PUBLIC_URL + "/pdfs/renzoE2023SummerResume.pdf"}
          type="application/pdf"
          width={isMobile ? "100%" : "800px"}
          height="800px"
          />
            <Link to="headerSection" smooth={true} duration={500}>
              <Button colorScheme="teal" mt={4}  >
                Back to Top
              </Button>
            </Link>
          </Box>
        </Element>
        
      </ChakraProvider>
    );
  }

export default App;
