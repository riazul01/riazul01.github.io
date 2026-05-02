import { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText, { listItemTextClasses } from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Iconify from "components/base/Iconify";
import { useEditorContext } from "providers/EditorProvider";

interface PortfolioFilesProps {
  foldername: string;
  files: { name: string; icon: string }[];
}

const PortfolioFiles = ({ foldername, files }: PortfolioFilesProps) => {
  const [open, setOpen] = useState(true);

  const { openFiles, handleSetActiveFile, handleSetOpenFiles } =
    useEditorContext();

  const handleFileClick = (fileName: string) => {
    handleSetActiveFile(fileName);
    if (!openFiles.includes(fileName)) {
      handleSetOpenFiles([...openFiles, fileName]);
    }
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton
        onClick={handleClick}
        sx={(theme) => ({
          mb: 0.5,
          px: 1.5,
          py: 0,
          bgcolor: `${theme.palette.background.elevation4} !important`,
        })}
      >
        <ListItemIcon sx={{ mr: 0.5, minWidth: "unset" }}>
          <Iconify
            icon="codicon:chevron-down"
            sx={{
              color: "text.primary",
              fontSize: 16,
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease-in-out",
            }}
          />
        </ListItemIcon>
        <ListItemText
          primary={foldername}
          sx={{
            [`& .${listItemTextClasses.primary}`]: {
              color: "text.primary",
              fontSize: "0.7rem",
              fontWeight: 500,
            },
          }}
        />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {files.map((file) => (
            <ListItemButton
              onClick={() => handleFileClick(file.name)}
              sx={{ px: 1.5, py: 0, mb: 0.5, color: "text.primary" }}
            >
              <ListItemIcon sx={{ minWidth: "unset", mr: 1 }}>
                <Iconify icon={file.icon} sx={{ fontSize: 18 }} />
              </ListItemIcon>
              <ListItemText
                primary={file.name}
                sx={{
                  [`& .${listItemTextClasses.primary}`]: {
                    fontSize: "caption.fontSize",
                    fontWeight: 500,
                  },
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default PortfolioFiles;
