import { VStack, Heading, Box } from "@chakra-ui/react"


function Experience(){
    return(
        <VStack>
            <Box>
                <Heading  fontSize="xl" mt = {8} mb={8} lineHeight="tall" color="teal.500">
                    Summer 2024 : Salesforce - Software Engineer Intern
                </Heading>
            </Box>
            <Box>
                <Heading  fontSize="xl" mt = {8} mb={8} lineHeight="tall" color="teal.500">
                    Summer 2023 : Dell Technologies - Software Engineer Intern
                </Heading>
            </Box>
            <Box>
                <Heading  fontSize="xl"  mt = {8} mb={8} lineHeight="tall" color="teal.500">
                    Spring 2023 : Renzoe Box - Software Engineer Intern
                </Heading>
            </Box>
            <Box>
                <Heading  fontSize="xl"  mt = {8} mb={8} lineHeight="tall" color="teal.500">
                    Fall 2022: Baylor College of Medicine - Software Engineer Research Assistant
                </Heading>
            </Box>
        </VStack>
    )
}

export default Experience