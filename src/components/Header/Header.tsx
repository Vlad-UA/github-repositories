import React from "react";

import { Link as RouterLink } from "react-router-dom";
import { paths } from "../../helpers/navigation/paths";

import Link from "@mui/material/Link";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const Header: React.FC = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav>
        <List>
          <Link to={paths.main} component={RouterLink}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="Search" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to={paths.favoritesRepositories} component={RouterLink}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FavoriteIcon />
                </ListItemIcon>
                <ListItemText primary="Favorite Repositories" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </nav>
    </Box>
  );
};
