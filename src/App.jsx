
import {Route,Routes} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import EditPage from "./pages/EditPage"


function App() {
   // here: https://css-tricks.com/snippets/javascript/random-hex-color/
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return (
    <div className="App">
     <h1 className="d-flex  align-items-center justify-content-center pt-3 pb-3 "
     style={{ backgroundColor: "#" + `${randomColor}` }}
     >Memes Genearator</h1>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/edit" element={<EditPage/>} />
     </Routes>
    </div>
  )
}

export default App
