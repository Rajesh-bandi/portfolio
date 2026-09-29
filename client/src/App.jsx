import { useState } from "react";
import WelcomeScreen from "@/components/WelcomeScreen";
import Home from "@/pages/Home";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded ? <WelcomeScreen onWelcomeComplete={() => setLoaded(true)} /> : <Home />}
      <Analytics />
    </>
  );
}

export default App;
