import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const AppRoutes = ({ tabs }) => {
  const renderTabContent = (path) => {
    const TabComponent = lazy(() => import(`components/${path}`));

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <TabComponent />
      </Suspense>
    );
  };

  return (
    <Routes>
      {tabs.map((tab) => (
        <Route
          key={tab.id}
          path={`/${tab.id}`}
          element={renderTabContent(tab.path)}
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
