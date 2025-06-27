import React from "react";
import { UserAuth } from "../context/authContext";


const AdminDashboard = () => {
  const { user } = UserAuth();

  return <div>Admin Dashboard is Here! { user && user.name }</div>;
};

export default AdminDashboard;
