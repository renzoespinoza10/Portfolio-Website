
import { Box, Heading, Text, Image, VStack } from '@chakra-ui/react';


function Photography(){
    return (
        <VStack>
            <Heading as="h1" size="xl" mb={4} color="teal.500">
                Photography
            </Heading>
            <Text>
                Here are some of my most recent flicks. Feel free to take a look!
                For inquiries feel free to contact me at renzo.espinoza01@gmail.com
            </Text>
            <Box>
                <Image htmlWidth="800px" htmlHeight= "600px"
                src={process.env.PUBLIC_URL + "/images/photography-pics/photo1.jpg"}
                alt="pic1">
                </Image>
            </Box>
            <Box>
                <Image htmlWidth="800px" htmlHeight= "600px"
                src={process.env.PUBLIC_URL + "/images/photography-pics/photo2.jpg"}
                alt="pic2">
                </Image>
            </Box>
            <Box>
                <Image htmlWidth="800px" htmlHeight= "600px"
                src={process.env.PUBLIC_URL + "/images/photography-pics/photo3.jpg"}
                alt="pic3">
                </Image>
            </Box>
            <Box>
                <Image htmlWidth="800px" htmlHeight= "600px"
                src={process.env.PUBLIC_URL + "/images/photography-pics/photo4.jpg"}
                alt="pic4">
                </Image>
            </Box>
            <Box>
                <Image htmlWidth="800px" htmlHeight= "600px"
                src={process.env.PUBLIC_URL + "/images/photography-pics/photo5.jpg"}
                alt="pic5">
                </Image>
            </Box>
            <Box>
                <Image htmlWidth="800px" htmlHeight= "600px"
                src={process.env.PUBLIC_URL + "/images/photography-pics/photo6.jpg"}
                alt="pic6">
                </Image>
            </Box>
            <Box>
                <Image htmlWidth="800px" htmlHeight= "600px"
                src={process.env.PUBLIC_URL + "/images/photography-pics/photo7.jpg"}
                alt="pic7">
                </Image>
            </Box>
            <Box>
                <Image htmlWidth="800px" htmlHeight= "600px"
                src={process.env.PUBLIC_URL + "/images/photography-pics/photo8.jpg"}
                alt="pic8">
                </Image>
            </Box>
            <Box>
                <Image htmlWidth="800px" htmlHeight= "600px"
                src={process.env.PUBLIC_URL + "/images/photography-pics/photo9.jpg"}
                alt="pic9">
                </Image>
            </Box>
            <Box>
                <Image htmlWidth="800px" htmlHeight= "600px"
                src={process.env.PUBLIC_URL + "/images/photography-pics/photo10.jpg"}
                alt="pic10">
                </Image>
            </Box>
            <Box>
                <Image htmlWidth="800px" htmlHeight= "600px"
                src={process.env.PUBLIC_URL + "/images/photography-pics/photo11.jpg"}
                alt="pic11">
                </Image>
            </Box>
        </VStack>
    )
}
export default Photography