import React, { useContext, useState } from "react";
import { RepositoriesContext } from "../../../helpers/context/useRepositoriesContext";
import { Button, TableCell } from "@mui/material";

interface SearchResultItemProps {
  id: string;
  name: string;
}
export const SearchResultItem: React.FC<SearchResultItemProps> = ({
  id,
  name,
}) => {
  const repository = useContext(RepositoriesContext);
  const isFavoriteInitial = () => repository.favoriteList.has(id);
  const [isFavorite, setIsFavorite] = useState<boolean>(isFavoriteInitial);

  const handlerClickAdd: React.MouseEventHandler<HTMLButtonElement> = () => {
    repository.addFavorite(id, name);
    setIsFavorite(true);
  };

  const handlerClickRemove: React.MouseEventHandler<HTMLButtonElement> = () => {
    repository.removeFavorite(id);
    setIsFavorite(false);
  };

  return (
    <>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">
        {isFavorite ? (
          <Button variant="contained" onClick={handlerClickRemove}>
            Remove
          </Button>
        ) : (
          <Button variant="contained" onClick={handlerClickAdd}>
            Add
          </Button>
        )}
      </TableCell>
    </>
  );
};
