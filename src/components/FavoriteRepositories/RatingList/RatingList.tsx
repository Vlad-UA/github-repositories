import React from "react";
import { TSetRating } from "../../../helpers/context/useRepositoriesContext";
import { Box, FormControl, MenuItem, Select } from "@mui/material";

interface RatingListProps {
  id: string;
  currentRating: number;
  ChangeRating: TSetRating;
}

export const RatingList: React.FC<RatingListProps> = ({
  id,
  currentRating,
  ChangeRating,
}) => {
  return (
    <Box>
      <FormControl fullWidth>
        <Select
          value={currentRating}
          onChange={(event) => ChangeRating(id, Number(event.target.value))}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
