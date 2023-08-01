import { EmailIcon } from '@chakra-ui/icons';
import { Button, HStack, Heading, VStack, Flex, Text, Code, Box } from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa';


const subHeading =
  "My name is Renzo Espinoza! I'm a university student and" +
  '\n' +
  "aspiring software engineer."

const jobTitle = '<SOFTWARE ENGINEER/>'

function Profile() {
  return (
    <Flex w="100%" direction={{ base: "column", md: "row" }}>
      <Box p={{ base: 5, md: 10 }}>
        <FaLaptopCode size="80" color="teal" />
      </Box>
      <VStack name = "headerSection"
        spacing={6}
        p={{ base: 5, md: "120" }}
        align={{ base: "center", md: "flex-start" }}
      >
        <Heading as='h1' size={{ base: '2xl', md: '3xl', lg: '4xl' }}>
          Hi There! I'm Renzo!
        </Heading>
        <Code fontSize={{ base: "lg", md: "xl", lg: "2xl" }} colorScheme="cyan">
          {jobTitle}
        </Code>
        
        <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} color="gray.600">
          {subHeading}
        </Text>
        <HStack spacing={4}>
          <Button
            colorScheme="teal"
            leftIcon={<FaLinkedin />}
            isRound={true}
            onClick={() =>
              window.open("https://www.linkedin.com/in/renzo-espinoza-cs/")
            }
          >
            LinkedIn
          </Button>
          <Button
            colorScheme="teal"
            leftIcon={<FaGithub />}
            isRound={true}
            onClick={() => window.open("https://github.com/renzoespinoza10")}
          >
            Github
          </Button>
          <Button
            colorScheme="teal"
            leftIcon={<EmailIcon />}
            isRound={true}
            onClick={(e) => {
              window.location.href = "mailto:renzo.espinoza01@gmail.com";
              e.preventDefault();
            }}
          >
            Email
          </Button>
        </HStack>
        
        
      </VStack>
      
    </Flex>
  );
}

export default Profile;
