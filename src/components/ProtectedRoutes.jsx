import { Navigate, Route } from "react-router-dom";

export const ProtectedRoute = ({ element, ...rest }) => {
  // Check if user is authenticated (e.g., by checking session or token)
  const isAuthenticated = sessionStorage.getItem("user_id");

  // Render the component if authenticated, otherwise redirect to login
  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};
