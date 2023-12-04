/* eslint-disable no-unused-vars */
import { Fields } from "./Fields.jsx";
import { Preview } from "./Preview.jsx";
import { DataContextProvider } from "./DataContextProvider.jsx";
import "../styles/App.css";

function App() {
  return (
    <main>
      <DataContextProvider>
        <Fields />
        <Preview />
      </DataContextProvider>
    </main>
  );
}

export default App;
