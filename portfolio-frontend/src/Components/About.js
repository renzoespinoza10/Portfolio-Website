
import { Box, Heading, Text, Image } from '@chakra-ui/react';

function About() {
  return (
    
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4} color="teal.500">
        About Me
      </Heading>
      <Image boxSize="300px"
                src={process.env.PUBLIC_URL + "/images/outside.jpg"}
                alt="outside">
      </Image>
      <Text fontSize="lg" lineHeight="tall" mt={2}>
        Hi there! I'm Renzo, a passionate developer with a love for creating
        awesome web applications. I'm always eager to learn new technologies
        and explore creative solutions to complex problems.
      </Text>
      <Text fontSize="lg" lineHeight="tall" mt={4}>
        In my free time, you'll find me experimenting with new coding projects,
        enjoying nature, or capturing moments through photography.
      </Text>
      <Text fontSize="lg" lineHeight="tall" mt={4}>
        I grew up in Davie, FL, a suburb of Ft. Lauderdale. Surrounded by a vibrant
        Latino culture, I was raised to love soccer. This, hand-in-hand with being
        a fan of all things tech, was how I enjoyed my childhood years. To this day,
        apart from coding, soccer is what I'm most passionate about. I take pleasure
        in spending my free time playing soccer and exercising at the gym. My time
        alone in San Francisco this past summer has deepened my appreciation for nature,
        hiking, and photography as well. I aim to build on my summer experience and
        further develop my photography hobby, which I'll showcase on this website.
      </Text>
      <Text fontSize="lg" lineHeight="tall" mt={4}>
        After years of rigorous coursework in grade school, I was fortunate enough
        to get matched with Rice University through the QuestBridge Scholarship.
        Despite having little to no impressions of Rice and not originally being
        excited about attending school in Houston, I had no idea of the memories
        and invaluable experiences that awaited me at Rice. The diversity of Houston
        and the plethora of exciting people at Rice have contributed to significant
        personal growth and ignited a drive for excellence in software engineering.
        I've accumulated internship experience at multiple companies and have relocated
        to multiple cities.
      </Text>
      <Text fontSize="lg" lineHeight="tall" mt={4}>
        I'm preparing now more than ever for my post-graduation journey by actively
        seeking full-time opportunities in software engineering.
      </Text>
      <Text>
        For any inquiries feel free to contact me at renzo.espinoza01@gmail.com .
      </Text>
    </Box>
  );
}

export default About;
