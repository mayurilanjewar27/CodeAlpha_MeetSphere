import { Routes, Route } from "react-router-dom";
import Meeting from "./Pages/Meeting/Meeting";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Meeting />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;