import { EmailIcon } from '@chakra-ui/icons';
import { Button, HStack, Heading, VStack, Flex, Text, Code,Box, StackDivider, Icon } from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa';

const subHeading =
  "My name is Renzo Espinoza! I'm a university student and" +
  '\n' +
  "aspiring software engineer."

const jobTitle = '<SOFTWARE ENGINEER/>'

function Profile() {
  return (
    <Flex w="100%">
      <Box p = {10}>
        
      <FaLaptopCode size= "80" color = "teal"/>
      </Box>
      <VStack spacing={12} p={"120"}>
        <Heading as='h1' size='3xl'>Hi There! I'm Renzo!</Heading>
        <Code fontSize="large" colorScheme = "cyan">{jobTitle}</Code>
        <Text  fontSize="med" color="gray.600">{subHeading}</Text>
        <HStack>
          <Button colorScheme="teal" leftIcon={<FaLinkedin />} isRound={true}>
            LinkedIn
          </Button>
          <Button colorScheme="teal" leftIcon={<FaGithub />} isRound={true}>
            Github
          </Button>
          <Button colorScheme="teal" leftIcon={<EmailIcon />} isRound={true}>
            Email
          </Button>
        </HStack>
        
      </VStack>
    </Flex>
    
  );
}

export default Profile;
