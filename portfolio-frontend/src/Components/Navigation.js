import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import '../App.css';
import { Flex, Box, Button, Spacer, Text, ChakraProvider } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';
import { extendTheme } from "@chakra-ui/react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  const history = useNavigate();




  return (
    
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Text fontSize="xl" fontWeight="bold">
          Renzo's Portfolio
        </Text>
      </Flex>
      <Spacer />
      <Box
        display={{ base: "block", md: "none" }}
        onClick={toggleMenu}
        cursor="pointer"
      >
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </Box>
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        width={{ base: "full", md: "auto" }}
      >
        <Flex align="center" justify="flex-end">
          <Button variant="ghost" mr={2}  onClick={() => {
            history('Portfolio-Website/')
          }}>
            Home
          </Button>
          <Button variant="ghost" mr={2} onClick={() => {
            history('Portfolio-Website/about')
          }}>
            About
          </Button>
          <Button variant="ghost" mr={2}>
            Experience
          </Button>
          <Button variant="ghost" onClick={() => {
            history('/Portfolio-Website/photography')
          }}>
            Photography
            </Button>
        </Flex>
      </Box>
    </Flex>
    
  );
}


