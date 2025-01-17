import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/index.jsx";
import { RouterProvider } from "react-router-dom";
import React from "react";
import { ToastContainer, toast } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={AppRouter} />
    <ToastContainer />
  </>
);
