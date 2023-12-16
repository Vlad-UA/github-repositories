import React, { useContext } from "react";
import { Header } from "../Header/Header";
import {
  IRepository,
  RepositoriesContext,
} from "../../helpers/context/useRepositoriesContext";
import { RatingList } from "./RatingList/RatingList";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export const FavoriteRepositories = () => {
  const repositories = useContext(RepositoriesContext);

  const handlerClickRemove = (id: string) => {
    repositories.removeFavorite(id);
  };

  return (
    <div>
      <Header />
      <Typography variant="h6" gutterBottom>
        Favorite Repositories
      </Typography>

      <TableContainer component={Paper} sx={{ minWidth: 100, maxWidth: 600 }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name (with owner)</TableCell>
              <TableCell align="right">Favorite</TableCell>
              <TableCell align="right">Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.from(repositories.favoriteList.keys()).map((id) => {
              const repo = repositories.favoriteList.get(id) as IRepository;
              return (
                <TableRow key={repo.id}>
                  <TableCell component="th" scope="row">
                    {repo.name}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      onClick={() => handlerClickRemove(id)}
                    >
                      Remove
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <RatingList
                      id={id}
                      currentRating={repo.rating}
                      ChangeRating={repositories.setRating}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
