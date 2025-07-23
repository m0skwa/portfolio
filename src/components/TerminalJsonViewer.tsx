"use client"

import { Box, Text } from "@chakra-ui/react";

interface TerminalJsonViewerProps {
    data: unknown;
}

const TerminalJsonViewer: React.FC<TerminalJsonViewerProps> = ({ data }) => {
    return (
        <Box
            bg="gray.900"
            color="green.200"
            p={6}
            borderRadius="md"
            fontFamily="monospace"
            fontSize="md"
            whiteSpace="pre"
            overflow="auto"
            boxShadow="lg"
            minHeight="400px"
            width="100%"
            maxW={{ base: "90%", sm: "90%", md: "700px", lg: "800px" }}
            mx="auto"
        >
            <Text color="green.400" mb={2}>
                <Text as="span" color="cyan.300">
                    m0skwa@portfolio
                </Text>
                <Text as="span">:</Text>
                <Text as="span" color="purple.300">
                    ~
                </Text>
                <Text as="span">$</Text> cat whoami.json
            </Text>
            <Box>{JSON.stringify(data, null, 2)}</Box>
        </Box>
    );
};

export default TerminalJsonViewer;
