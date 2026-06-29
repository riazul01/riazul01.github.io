import type { PropsWithChildren, MouseEvent } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import { useEditorContext } from "providers/EditorProvider";
import Iconify from "components/base/Iconify";
import SidePanel from "./side-panel";
import { files } from "data/files";
import About from "pages/About";

const MainLayout = ({ children }: PropsWithChildren) => {
  const { openFiles, activeFile, handleSetActiveFile, handleSetOpenFiles } =
    useEditorContext();

  const closeFile = (e: MouseEvent<HTMLButtonElement>, fileName: string) => {
    e.stopPropagation();
    const newFiles = openFiles.filter((f: string) => f !== fileName);
    handleSetOpenFiles(newFiles);
    if (activeFile === fileName && newFiles.length > 0) {
      handleSetActiveFile(newFiles[newFiles.length - 1]);
    } else if (newFiles.length === 0) {
      handleSetActiveFile(null);
    }
  };

  return (
    <Stack direction="column" sx={{ height: "100vh", width: 1 }}>
      <Stack
        sx={(theme) => ({
          height: 1,
          overflow: "hidden",
          border: `1px solid ${theme.palette.divider}`,
        })}
      >
        <SidePanel />
        <Stack direction="column" sx={{ flex: 1 }}>
          {openFiles.length > 0 && (
            <>
              <Stack
                sx={(theme) => ({
                  height: 35,
                  borderBottom: `1px solid ${theme.palette.divider}`,
                  flexShrink: 0,
                })}
              >
                <Reorder.Group
                  axis="x"
                  values={openFiles}
                  onReorder={handleSetOpenFiles}
                  style={{
                    display: "flex",
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {openFiles.map((fileName) => (
                    <Reorder.Item
                      key={fileName}
                      value={fileName}
                      style={{ display: "flex" }}
                    >
                      <Stack
                        onClick={() => handleSetActiveFile(fileName)}
                        sx={(theme) => ({
                          px: 2,
                          gap: 1,
                          cursor: "pointer",
                          alignItems: "center",
                          borderRight: `1px solid ${theme.palette.divider}`,
                          borderTop:
                            activeFile === fileName
                              ? `2px solid ${theme.palette.primary.main}`
                              : "2px solid transparent",
                          bgcolor: theme.palette.background.default,
                          minWidth: 130,
                          userSelect: "none",
                        })}
                      >
                        <Iconify
                          icon={
                            files.find((f) => f.name === fileName)?.icon ?? ""
                          }
                          sx={{ fontSize: 14 }}
                        />
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontSize: "0.7rem",
                            color:
                              activeFile === fileName
                                ? "white"
                                : "text.secondary",
                          }}
                        >
                          {fileName}
                        </Typography>
                        <IconButton
                          size="small"
                          onClick={(e) => closeFile(e, fileName)}
                          sx={{ p: 0, ml: "auto", border: 0 }}
                        >
                          <Iconify
                            icon="ph:x-bold"
                            sx={{
                              fontSize: 12,
                              color:
                                activeFile === fileName
                                  ? "white"
                                  : "text.secondary",
                            }}
                          />
                        </IconButton>
                      </Stack>
                    </Reorder.Item>
                  ))}
                </Reorder.Group>
              </Stack>

              <Stack
                sx={(theme) => ({
                  px: 2,
                  py: 1,
                  gap: 1,
                  alignItems: "center",
                  borderBottom: `1px solid ${theme.palette.divider}`,
                })}
              >
                <Typography
                  variant="subtitle2"
                  sx={{ color: "text.secondary", fontSize: "0.65rem" }}
                >
                  Portfolio
                </Typography>
                <Iconify
                  icon="codicon:chevron-right"
                  sx={{ color: "text.secondary", fontSize: 12 }}
                />
                <Typography variant="subtitle2" sx={{ fontSize: "0.65rem" }}>
                  {activeFile || "empty"}
                </Typography>
              </Stack>
            </>
          )}

          <Box sx={{ flexGrow: 1, overflow: "auto" }}>
            <AnimatePresence mode="wait">
              {activeFile ? (
                <motion.div
                  key={activeFile}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.15 }}
                >
                  {activeFile === "Home.tsx" && <>{children}</>}
                  {activeFile === "About.md" && <About />}
                  {activeFile === "Projects.json" && <h1>Projects</h1>}
                  {activeFile === "Contact.sh" && <h1>Contact</h1>}
                </motion.div>
              ) : (
                <Stack
                  sx={{
                    height: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Iconify
                    icon="devicon:vscode"
                    sx={{ fontSize: 220, opacity: 0.3 }}
                  />
                </Stack>
              )}
            </AnimatePresence>
          </Box>
        </Stack>
      </Stack>
      <Stack
        sx={(theme) => ({
          px: 2,
          py: 0.5,
          gap: 2,
          bgcolor: theme.palette.primary.main,
        })}
      >
        <Stack sx={{ gap: 0.5, alignItems: "center" }}>
          <Iconify icon="codicon:git-branch" sx={{ fontSize: 12 }} />
          <Typography sx={{ fontSize: "0.65rem", fontWeight: 700 }}>
            main*
          </Typography>
        </Stack>
        <Typography variant="subtitle2" sx={{ fontSize: "0.65rem" }}>
          1M Errors
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ ml: "auto", fontSize: "0.65rem" }}
        >
          UTF-8
        </Typography>
        <Typography variant="subtitle2" sx={{ fontSize: "0.65rem" }}>
          TypeScript JSX
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ fontSize: "0.65rem", cursor: "pointer" }}
          onClick={() => window.location.reload()}
        >
          Reload
        </Typography>
        <Typography variant="subtitle2" sx={{ fontSize: "0.65rem" }}>
          V 1.0
        </Typography>
      </Stack>
    </Stack>
  );
};

export default MainLayout;
