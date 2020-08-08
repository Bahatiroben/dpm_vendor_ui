import React, { Component } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { TrendingUp } from "@material-ui/icons";
import useStyles from "../dashboard/DashboardPage";
class GetUsers extends Component {
  state = {};
  render() {
    return (
      <Container maxWidth={false} className={useStyles.container}>
        <Grid
          style={{
            color: "#A2302F",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "48px",
            lineHeight: "56px",
            textAlign: "center",
            paddingBottom: "40px",
          }}
        >
          Users
        </Grid>
        <Grid className={useStyles.title}>
          <TrendingUp style={{ padding: "0 5px", fontSize: "35px" }} />
          <Typography style={{ fontSize: "25px" }}>Trending Routes</Typography>
        </Grid>
        <Container
          maxWidth={false}
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          bbb
        </Container>
      </Container>
    );
  }
}

export default GetUsers;
