import Analysis from "./routes/Analysis";
import AddWord from "./routes/AddWord";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-white h-screen">
      <div className="bg-green-400 mx-auto max-w-screen-lg rounded-lg py-3 px-6 m-2 shadow-md">
        <h1 className="text-center text-red-400 text-3xl font-bold">WordLabeler</h1>
        <Navigation />
        <Routes>
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/addword" element={<AddWord />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
