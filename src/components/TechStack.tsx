import { useState } from "react";
import {
  VStack,
  Text,
  Tabs,
  TabPanels,
  Box,
  TabPanel,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import SkillCard from "./SkillCard";
import { skills } from "../configs/data";

const TechStack = () => {
  const [skillsList] = useState(skills);

  return (
    <Box>
      <VStack spacing={3}>
        <VStack>
          <Box
            as="h1"
            mt={0}
            mb={4}
            fontSize="3xl"
            lineHeight="shorter"
            fontWeight="bold"
            textAlign="left"
          >
            Tech stack
          </Box>
          <Text
            fontSize={"xl"}
            color={useColorModeValue("gray.500", "gray.200")}
            maxW="lg"
            textAlign="center"
          >
            A list of my favorite tools and technologies that I use on a regular
            basis.
          </Text>
        </VStack>
        <Box w="78%">
          <Tabs
            variant="soft-rounded"
            colorScheme="blue"
            align="center"
            w="100%"
          >
            <TabPanels minHeight={"45vh"}>
              <TabPanel px={0}>
                <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={8}>
                  {skillsList.map((tool, index) => (
                    <SkillCard
                      key={index}
                      name={tool.name}
                      image={tool.image}
                      link={tool.link}
                    />
                  ))}
                </SimpleGrid>
              </TabPanel>
              <TabPanel px={0}>
                <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                  {skillsList.map((tool, index) => (
                    <SkillCard
                      key={index}
                      name={tool.name}
                      image={tool.image}
                      link={tool.link}
                    />
                  ))}
                </SimpleGrid>
              </TabPanel>
              <TabPanel px={0}>
                <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                  {skillsList.map((tool, index) => (
                    <SkillCard
                      key={index}
                      name={tool.name}
                      image={tool.image}
                      link={tool.link}
                    />
                  ))}
                </SimpleGrid>
              </TabPanel>
              <TabPanel px={0}>
                <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                  {skillsList.map((tool, index) => (
                    <SkillCard
                      key={index}
                      name={tool.name}
                      image={tool.image}
                      link={tool.link}
                    />
                  ))}
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </VStack>
    </Box>
  );
};

export default TechStack;
