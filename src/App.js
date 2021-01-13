import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Container from "@material-ui/core/Container";
import Drawer from "./components/layouts/Drawer";

export default function App() {
  return (
    <div>
      <h1>AAAA</h1>
    </div>
  )
}
