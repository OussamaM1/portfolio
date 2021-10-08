import * as React from "react";
import { useState, useEffect } from "react";
import useFetch from "use-http";
import { SimpleGrid, Box, useMediaQuery } from "@chakra-ui/react";
import RepositoryCard from "./RepositoryCard";
import CardSkeleton from "./CardSkeleton";

const Repos = () => {
  const { get, loading } = useFetch("https://api.github.com");
  const [repos, setRepos]: any = useState([]);
  const [isLargerThan720] = useMediaQuery("(min-width: 720px)");
  const [isLargerThan982] = useMediaQuery("(min-width: 982px)");

  let columnWidth: any = 390;
  if (isLargerThan982) {
    columnWidth = 390;
  } else {
    if (isLargerThan720) {
      columnWidth = 300;
    } else {
      columnWidth = "100%";
    }
  }

  useEffect(() => {
    get("/users/oussamaM1/repos").then((res: any) => {
      setRepos(
        res
          ?.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
          .slice(0, 8)
      );
    });
  }, [get]);

  return (
    <Box>
      <Box
        as="h1"
        mt={0}
        mb={4}
        fontSize="3xl"
        lineHeight="shorter"
        fontWeight="bold"
        textAlign="left"
      >
        My repositories
      </Box>
      {loading ? (
        <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={4}>
          <CardSkeleton />
        </SimpleGrid>
      ) : (
        <Box mt={4}>
          <SimpleGrid columnWidth={columnWidth}>
            {repos?.map((repo: any) => (
              <RepositoryCard
                title={repo.name}
                description={repo.description}
                language={repo.language}
                url={repo.svn_url}
                stargazers_count={repo.stargazers_count}
                forks_count={repo.forks_count}
              />
            ))}
          </SimpleGrid>
        </Box>
      )}
    </Box>
  );
};

export default Repos;
