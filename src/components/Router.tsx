import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../screens/home/Home";
import Login from "../screens/login/Login";
import Register from "../screens/register/register";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<h1> NOT FOUND </h1>} />
    </Routes>
  );
};

export default Router;
