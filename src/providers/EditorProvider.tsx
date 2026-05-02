import { createContext, use, useState, type PropsWithChildren } from "react";

export interface EditorContextInterface {
  activeFile: string | null;
  openFiles: string[];
  handleSetActiveFile: (activeFile: string | null) => void;
  handleSetOpenFiles: (files: string[]) => void;
}

export const EditorContext = createContext({} as EditorContextInterface);

const EditorProvider = ({ children }: PropsWithChildren) => {
  const [activeFile, setActiveFile] = useState<string | null>("Home.tsx");
  const [openFiles, setOpenFiles] = useState([
    "Home.tsx",
    "About.md",
    "Projects.json",
  ]);

  const handleSetActiveFile = (activeFile: string | null) => {
    setActiveFile(activeFile);
  };

  const handleSetOpenFiles = (files: string[]) => {
    setOpenFiles(files);
  };

  return (
    <EditorContext
      value={{ activeFile, openFiles, handleSetActiveFile, handleSetOpenFiles }}
    >
      {children}
    </EditorContext>
  );
};

export const useEditorContext = () => use(EditorContext);

export default EditorProvider;
