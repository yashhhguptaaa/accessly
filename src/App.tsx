import { useState } from "react";
import { Header } from "./components/Header";
import type { User } from "./types";
import { Feed } from "./components/Feed";

function App() {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = () => {
    console.log("Navigate to login");
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <Header user={user} onLogin={handleLogin} onLogout={handleLogout} />
      <Feed />
    </>
  );
}

export default App;
