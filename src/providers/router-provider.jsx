import { RouterProvider } from "react-aria-components";
import { useNavigate } from "react-router";
export const RouteProvider = ({
  children
}) => {
  const navigate = useNavigate();
  return <RouterProvider navigate={navigate}>{children}</RouterProvider>;
};