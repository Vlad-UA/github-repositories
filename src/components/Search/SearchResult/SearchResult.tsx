import React from "react";
import { SearchResultItem } from "../SearchResultItem/SearchResultItem";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

interface IRepository {
  repo: {
    id: string;
    nameWithOwner: string;
  };
}

interface IDataGQL {
  search: {
    repos: IRepository[];
  };
}
interface SearchResultProps {
  debouncedSearchRepositoryValue: string;
  data: IDataGQL;
  loading: boolean;
  errorMessage: string | undefined;
}
export const SearchResult: React.FC<SearchResultProps> = (props) => {
  const { debouncedSearchRepositoryValue, data, loading, errorMessage } = props;

  if (loading)
    return (
      <Typography variant="h6" gutterBottom>
        Loading...
      </Typography>
    );

  if (errorMessage)
    return (
      <Typography variant="h6" gutterBottom>
        Error: {errorMessage}
      </Typography>
    );

  if (!debouncedSearchRepositoryValue || !data) return <></>;

  return (
    <TableContainer component={Paper} sx={{ minWidth: 100, maxWidth: 500 }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name (with owner)</TableCell>
            <TableCell align="right">Favorite</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(data as IDataGQL).search.repos.map(
            ({ repo: { id, nameWithOwner } }) => {
              return (
                <TableRow
                  key={id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <SearchResultItem id={id} name={nameWithOwner} />
                </TableRow>
              );
            },
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
