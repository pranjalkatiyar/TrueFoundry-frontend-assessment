import { useState } from "react";
import JsonInput from "./components/JsonInput/JsonInput";
import OutputForm from "./components/OutputForm/OutputForm";

function App() {
  const [jsonSchema, setJsonSchema] = useState("");
  return (
    <div className="w-screen h-screen grid grid-cols-2">
      <JsonInput jsonSchema={jsonSchema} setJsonSchema={setJsonSchema} />
      <OutputForm jsonSchema={jsonSchema} setJsonSchema={setJsonSchema} />
    </div>
  );
}

export default App;
