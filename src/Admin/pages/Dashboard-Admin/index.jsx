import React, { useEffect } from "react";
import Sidebar from "../../Components/Sidebar";

const DashboardAdmin = () => {
  useEffect(() => {
    document.title = "Dashboard Admin - Alvin AI";
  }, []);

  return (
    <div>
      <Sidebar />
    </div>
  );
};

export default DashboardAdmin;
