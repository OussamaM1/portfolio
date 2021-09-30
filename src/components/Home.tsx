import { Flex, Avatar, Box, Image } from "@chakra-ui/react";
import User from "../assets/images/user.jpg";

const Home = () => {
  return (
    <Flex direction="column" align="center">
      <Flex direction={["column", "column", "row"]}>
        <Avatar m="auto" mb={[16, 5, "auto"]} size={"2xl"} src={User} />
        <Box
          ml={["auto", "auto", 16]}
          m={["auto", "initial"]}
          w={["90%", "85%", "80%"]}
          maxW="800px"
        >
          <Box
            as="h1"
            mt={0}
            mb={4}
            fontSize="3xl"
            lineHeight="shorter"
            fontWeight="bold"
            textAlign="left"
          >
            Hello! 👋
          </Box>

          <Box
            as="h2"
            fontSize="xl"
            fontWeight="400"
            mt={5}
            mb={2}
            textAlign="left"
          >
            My name is Oussama , i'm a software engineer student , Competitive
            programming enthusiast and a chess player, Currently looking for a
            graduate internship opportunity.
          </Box>
        </Box>
      </Flex>
      <Flex direction={["column", "column", "row"]}>
        <Image
          mt={3}
          src="https://github-readme-stats.vercel.app/api/?username=oussamaM1&show_icons=true&count_private=true&theme=react&bg_color=1F222E&title_color=7cebf5&icon_color=2d7de4&show_icons=true&border_color=7cebf5&border_radius=10"
          alt="Oussama's Github Stats"
        />
        <Image
          mt={3}
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=oussamaM1&langs_count=8&layout=compact&theme=react&bg_color=1F222E&title_color=7cebf5&icon_color=2d7de4&show_icons=true&border_color=7cebf5&border_radius=10"
          alt="Oussama's Top Languages"
        />
      </Flex>
      <Box as="h2" fontSize="sm" fontWeight="400" mt={2}>
        <b>Note:</b> Top languages is only a metric of the languages my public
        code consists of and doesn't reflect experience or skill level.
      </Box>
    </Flex>
  );
};
export default Home;
