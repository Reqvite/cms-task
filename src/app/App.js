import React, { useState, useEffect } from "react";
import AppRoutes from "./Providers/AppRoutes";
import { Navigate, useLocation } from "react-router-dom";
import Cms from "components/Cms/Cms";

const App = () => {
  const [tabs, setTabs] = useState([]);
  const [isLoading, seIsLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    fetch("/tabs.json")
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => a.order - b.order);
        setTabs(data);
        seIsLoading(false);
      });
  }, []);

  return (
    !isLoading && (
      <main>
        {pathname === "/" && <Navigate to={tabs[0]?.id} replace={true} />}
        <Cms tabs={tabs} />
        <AppRoutes tabs={tabs} />
      </main>
    )
  );
};

export default App;
