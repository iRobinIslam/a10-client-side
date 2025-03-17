import React, { useContext } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import { Navigate } from "react-router-dom";

const Privateroute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="text-center mt-4">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/signin"></Navigate>;
  }
  return children;
};

export default Privateroute;
