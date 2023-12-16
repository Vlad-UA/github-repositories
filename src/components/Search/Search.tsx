import React, { useEffect, useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { SearchResult } from "./SearchResult/SearchResult";
import { Header } from "../Header/Header";
import { TextField, Typography } from "@mui/material";

const GET_GITHUB_REPOSITORIES = gql`
  query getGithubRepositories($query: String!) {
    search(type: REPOSITORY, query: $query, first: 5) {
      repos: edges {
        repo: node {
          ... on Repository {
            id
            name
            nameWithOwner
          }
        }
      }
    }
  }
`;

export const Search: React.FC = () => {
  const [searchRepositoryValue, setSearchRepositoryValue] =
    useState<string>("");
  const [getRepositories, { loading, error, data }] = useLazyQuery(
    GET_GITHUB_REPOSITORIES,
  );
  const debouncedSearchRepositoryValue = useDebounce(
    searchRepositoryValue,
    500,
  );

  useEffect(() => {
    if (debouncedSearchRepositoryValue) {
      getRepositories({
        variables: { query: debouncedSearchRepositoryValue + " in:name" },
      }).catch((error) => console.log("GraphQL error", error));
    }
  }, [debouncedSearchRepositoryValue, getRepositories]);

  const handlerChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchRepositoryValue(event.target.value);
  };

  return (
    <div>
      <Header />
      <Typography variant="h6" gutterBottom>
        Github search repositories (first 5)
      </Typography>
      <TextField
        value={searchRepositoryValue}
        onChange={handlerChange}
        label="Github name"
        variant="outlined"
      />
      <SearchResult
        debouncedSearchRepositoryValue={debouncedSearchRepositoryValue}
        data={data}
        loading={loading}
        errorMessage={error?.message}
      />
    </div>
  );
};
