import React from "react";
import { UserAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const { user, loading } = UserAuth();
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading ...</div>;
  }
  if (!user) {
    navigate("/login");
  }
  return <div>Admin Dashboard is Here! {user && user.name}</div>;
};

export default AdminDashboard;
