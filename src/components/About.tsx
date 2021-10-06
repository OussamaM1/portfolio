import {
  Box,
  Stack,
  VStack,
  Heading,
  Flex,
  Text,
  Tag,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import placeholder from "../assets/images/placeholder.png";
import { experiences, education } from "../configs/data";

interface CardProps {
  title: string;
  role: string;
  skills: string[];
  period: string;
  logo: string;
  alt: string;
  description?: string;
}

const Card = (props: CardProps) => {
  const { title, role, skills, period, logo, alt, description } = props;
  return (
    <Box
      px={4}
      py={5}
      borderWidth="1px"
      _hover={{ shadow: "lg" }}
      bg={useColorModeValue("white", "gray.800")}
      position="relative"
      rounded="md"
    >
      <Flex justifyContent="space-between">
        <Flex>
          <Image
            rounded="full"
            w={16}
            h={16}
            objectFit="cover"
            boxShadow="md"
            fallbackSrc={placeholder}
            src={logo}
            alt={alt}
          />
          <Stack spacing={1} pl={3} align="left">
            <Heading align="left" fontSize={15}>
              {title}
            </Heading>
            <Text as="i" align="left" fontSize="sm">
              {role}
            </Text>

            <Stack
              spacing={1}
              mt={3}
              isInline
              alignItems="center"
              display={["none", "none", "flex", "flex"]}
            >
              {skills.map((skill) => (
                <Tag size="sm" padding="1" key={skill}>
                  {skill}
                </Tag>
              ))}
            </Stack>
          </Stack>
        </Flex>
        <Stack display={["none", "none", "flex", "flex"]}>
          <Text as="i" color={"gray.400"} fontSize={12}>
            {period}
          </Text>
        </Stack>
      </Flex>
      <Stack
        spacing={1}
        mt={3}
        isInline
        alignItems="center"
        display={["flex", "flex", "none", "none"]}
      >
        {skills.map((skill) => (
          <Tag size="sm" padding="0 3px" key={skill}>
            {skill}
          </Tag>
        ))}
      </Stack>
      <Text p={3} align="left" fontSize="sm">
        {description}
      </Text>
    </Box>
  );
};

const About = () => {
  return (
    <Box>
      <Heading>
        <Flex alignItems="center">
          <Box
            as="h1"
            mt={0}
            fontSize="3xl"
            lineHeight="shorter"
            fontWeight="bold"
            textAlign="left"
          >
            Experience
          </Box>
        </Flex>
      </Heading>
      <VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 6]} mt={3}>
        {experiences.map((company, index) => (
          <Card
            key={index}
            title={company.title}
            role={company.role}
            skills={company.skills}
            period={company.period}
            logo={company.logo}
            alt={company.alt}
            description={company.description}
          />
        ))}
      </VStack>
      <Heading>
        <Flex alignItems="center">
          <Box
            as="h1"
            mt={0}
            fontSize="3xl"
            lineHeight="shorter"
            fontWeight="bold"
            textAlign="left"
          >
            Education
          </Box>
        </Flex>
      </Heading>
      <VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 6]} mt={3}>
        {education.map((e, index) => (
          <Card
            key={index}
            title={e.title}
            role={e.role}
            skills={e.skills}
            period={e.period}
            logo={e.logo}
            alt={e.alt}
            description={e.description}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default About;
