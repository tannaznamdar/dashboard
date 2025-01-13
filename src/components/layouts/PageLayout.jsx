import { Outlet } from "react-router";
import Header from "../Header";

export default function PageLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
