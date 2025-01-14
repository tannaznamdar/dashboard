import { Outlet } from "react-router";
import Header from "../header/Header";

export default function PageLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
