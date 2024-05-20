import Main from "./components/main/Main"
import Sidebar from "./components/sidebar/Sidebar"
import { createContext, useState } from "react"
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

const AppState = createContext();

const App = () => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState("user");

  return (
    <>
    <AppState.Provider value={{login, setLogin, user, setUser}}>
      <Routes>
        {login ?
          <Route path="/chat" element={<><Sidebar /> <Main user={user} /></>} />
        : null}
        <Route path="/signup" element={<><Signup/></>} />
        <Route path="/login" element={<><Login/></>} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </AppState.Provider>
    </>
  )
}

export default App
export {AppState}