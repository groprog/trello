import React, { useState, useCallback } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
function App() {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const handleMobileDrawerOpen = useCallback(() => {
    setIsMobileDrawerOpen(true);
  }, [setIsMobileDrawerOpen]);
  const [selectedTab, setSelectedTab] = useState(null);
  const selectHome = useCallback(() => {
    document.title =
      "WaVer - Free template for building an SaaS or admin application";
    setSelectedTab("Home");
  }, [setSelectedTab]);

  const selectBlog = useCallback(() => {
    document.title = "WaVer - Blog";
    setSelectedTab("Blog");
  }, [setSelectedTab]);
  const handleMobileDrawerClose = useCallback(() => {
    setIsMobileDrawerOpen(false);
  }, [setIsMobileDrawerOpen]);
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <Navbar
            selectedTab={selectedTab}
            mobileDrawerOpen={isMobileDrawerOpen}
            handleMobileDrawerOpen={handleMobileDrawerOpen}
            handleMobileDrawerClose={handleMobileDrawerClose}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
