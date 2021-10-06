import React from "react";
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Box,
  Link,
  Image,
} from "@chakra-ui/react";

const SkillCard = ({
  name,
  image,
  link,
}: {
  name: string;
  image: string;
  link: any;
}) => {
  return (
    <Link href={link} isExternal>
      <HStack
        p={4}
        bg={useColorModeValue("white", "gray.800")}
        rounded="xl"
        borderWidth="1px"
        borderColor={useColorModeValue("gray.100", "gray.700")}
        w="100%"
        textAlign="left"
        align="start"
        spacing={4}
        _hover={{ shadow: "md" }}
      >
        <Box
          rounded="lg"
          position="relative"
          overflow="hidden"
          lineHeight={0}
          boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
        >
          <Box
            bg={"gray.200"}
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            opacity={0.25}
          ></Box>
          <Image
            src={image}
            height={26}
            width={26}
            layout="fixed"
            rounded="md"
          />
        </Box>
        <VStack>
          <Text fontWeight="bold" fontSize="md">
            {name}
          </Text>
        </VStack>
      </HStack>
    </Link>
  );
};

export default SkillCard;
