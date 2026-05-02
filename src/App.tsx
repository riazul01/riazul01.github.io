import EditorProvider from "providers/EditorProvider";
import { Outlet } from "react-router";

const App = () => {
  return (
    <EditorProvider>
      <Outlet />
    </EditorProvider>
  );
};

export default App;
