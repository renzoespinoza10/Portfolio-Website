
import '../App.css';
import {Flex, Box, Button, Spacer, Text} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";


function Navigation() {
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
        <Box display={{ base: "block", md: "none" }} onClick={() => {}}>
      
          <HamburgerIcon />
        </Box>
        <Box
          display={{ base: "none", md: "block" }}
          width={{ base: "full", md: "auto" }}
        >
          <Flex align="center" justify="flex-end">
            <Button variant="ghost" mr={2}>
              Home
            </Button>
            <Button variant="ghost" mr={2}>
              About
            </Button>
            <Button variant="ghost" mr={2}>
              Experience
            </Button>
            <Button variant="ghost">Photography</Button>
          </Flex>
        </Box>
      </Flex>
    );
  }
  


export default Navigation;
