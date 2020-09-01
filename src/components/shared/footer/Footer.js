import React from "react"
import {Grid} from "@material-ui/core"

export const Footer = () => {
  return (
    <div style={{marginTop: "10px"}}>
      <Grid
        style={{
          textAlign: "center",
          alignContent: "center",
          height: "30px",
          background: "#EEEEEE",
          paddingTop: "10px",
        }}
      >
        © 2020 Copyright DPM
      </Grid>
    </div>
  )
}
