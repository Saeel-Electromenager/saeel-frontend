import React from "react";
import {
  TextField,
  Grid,
  Container,
  Button,
  InputAdornment,
} from "@mui/material";

import loginIcon from "../assets/img_bac.jpg";
import "../styles/Home.css";
import Logo from "../assets/logo.png";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

export default function connexion() {
  return (
    <div className="grid">
      <Container mawWith="lg">
        <nav style={{ width: "100%", height: "100px" }}>
          {" "}
          <img src={Logo} className="logo" />
        </nav>
        <Grid container="lg" spacing={2} justifyContent="center">
          <Grid item md={7} xs={12} textAlign="center">
            {" "}
            <img
              className="icon-img"
              src={loginIcon}
              style={{ width: "500PX", height: "460px" }}
              alt="icon"
            />{" "}
          </Grid>
          <Grid item md={5} xs={11} paddingLeft="20PX">
            <h1>Re Bonjour !</h1>
            <p class="mb-0">
              Pour rester connecté avec nous, veuillez-vous identifier avec
              votre adresse email et votre mot de passe..
            </p>

            <Grid>
              <Grid
                item
                md={12}
                xs={10}
                lg={11}
                style={{ paddingTop: "26px", paddingBottom: "26px" }}
              >
                {" "}
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {" "}
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  type="email"
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  style={{ width: "100%" }}
                />{" "}
              </Grid>
              <Grid
                item
                md={12}
                xs={10}
                lg={11}
                style={{ paddingBottom: "20px" }}
              >
                {" "}
                <TextField
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        {" "}
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                  type="password"
                  id="o"
                  label="password"
                  variant="outlined"
                  style={{ width: "100%" }}
                />{" "}
              </Grid>
              <Grid>
                {" "}
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="se souvenir de moi "
                  labelPlacement="end"
                />
              </Grid>
              <Grid
                item
                md={12}
                xs={10}
                lg={11}
                textAlign="center"
                style={{ paddingBottom: "16px" }}
              >
                {" "}
                <Button variant="contained" style={{ background: "#5C4EBD" }}>
                  Se Connecter
                </Button>
              </Grid>
            </Grid>
            <Grid item md={12} xs={10} lg={11} textAlign="center">
              {" "}
              <h6>
                vous n'etes pas encore inscrit ? <a href="#">inscrivez vous</a>
              </h6>{" "}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
