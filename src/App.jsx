import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Homepage from "./pages/Homepage";

function App() {
  // function firstUniqueChar(str) {
  //   for (let i = 0; i < str.length; i++) {
  //     if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
  //       return str[i];  // Return the first unique character
  //     }
  //   }
  //   return -1; //return -1 if all characters repeat
  // }
  
  
  // console.log(firstUniqueChar("leetcode")); 
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage/>} />
      </Route>
    </Routes>
  );
}

export default App;
