import React from "react";
import {
  useRepositoriesContext,
  RepositoriesContext,
} from "./helpers/context/useRepositoriesContext";
import { apolloClient } from "./helpers/apolloClient/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { Routes } from "./helpers/navigation/Routes";
import { Container } from "@mui/material";

export const App: React.FC = () => {
  const contextValue = useRepositoriesContext();

  return (
    <ApolloProvider client={apolloClient}>
      <RepositoriesContext.Provider value={contextValue}>
        <Container maxWidth="sm">
          <Routes />
        </Container>
      </RepositoriesContext.Provider>
    </ApolloProvider>
  );
};
