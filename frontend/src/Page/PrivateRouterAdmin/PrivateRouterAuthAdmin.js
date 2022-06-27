import { Outlet } from "react-router-dom";
import { LoadingToRedirectAdmin } from "../../imports";

function PrivateRouterAdmin({ element: Element, ...rest }) {
  const token = window.localStorage.getItem("firstLoginAdmin");
  console.log('tokenprivate',token)
  return <>{!token ? <Outlet /> : <LoadingToRedirectAdmin />}</>;
}

export default PrivateRouterAdmin;
