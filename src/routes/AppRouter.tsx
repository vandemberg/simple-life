import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Team from "../pages/Members";
import TeamNew from "../pages/MemberNew";
import MemberJira from "../pages/MemberJira";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teams/1/members" element={<Team />} />
      <Route path="/teams/1/members/new" element={<TeamNew />} />
      <Route path="/teams/1/members/:id/jira" element={<MemberJira />} />
    </Routes>
  );
};

export default AppRouter;
