import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import PortfolioFiles from "./PortfolioFiles";
import { files } from "data/files";

const Explorer = () => {
  return (
    <>
      <List
        sx={{ width: 1, bgcolor: "transparent" }}
        component="nav"
        aria-labelledby="list-subheader"
        disablePadding
        subheader={
          <ListSubheader
            component="div"
            id="list-subheader"
            sx={{
              px: 1.5,
              py: 1.44,
              color: "text.secondary",
              fontSize: "0.7rem",
              lineHeight: 1,
              textTransform: "uppercase",
              bgcolor: "transparent",
            }}
          >
            Explorer
          </ListSubheader>
        }
      >
        <PortfolioFiles foldername="PORTFOLIO" files={files} />
      </List>
    </>
  );
};

export default Explorer;
