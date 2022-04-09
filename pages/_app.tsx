import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { RecoilRoot } from "recoil";
import "../firebase/clientApp";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <RecoilRoot>
      <div>
        <AppBar position="fixed">
          <Toolbar variant="dense">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              SEINAN CUP Portal
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Component {...pageProps} />
      </div>
    </RecoilRoot>
  );
}

export default MyApp;
