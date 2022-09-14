import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Payment from "./Payment";
import Success from "./Success";

function App() {
  return (
   
   <div>
      <Routes>
          <Route path="/pay" element={<Payment />}>
          </Route>
          <Route path="/success" element={ <Success />}>
          </Route>
     </Routes>
   </div>
  );
}

export default App;
