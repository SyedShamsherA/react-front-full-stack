import React from "react";
import "./App.css";
import Card from "@mui/material/card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { defaults } from "lodash";

export default function Snippet() {
    const [counter, setCounter] = React.useState(0);
    const [CardOne_ButtonValue, CardOne_setButtonValue] = React.useState("Add to Cart");
    const [CardTwo_ButtonValue, CardTwo_setButtonValue] = React.useState("Add to Cart");
    const [CardThree_ButtonValue, CardThree_setButtonValue] = React.useState("Add to Cart");

    const CardOne_handleIncrement = () => {
        if (CardOne_ButtonValue === "Add to Cart") {
            CardOne_setButtonValue("Remove from Cart");
            setCounter(counter + 1);
        }else if (CardOne_ButtonValue === "Remove from Cart") {
            CardOne_setButtonValue("Add to Cart");
            setCounter(counter - 1)
        }
    };

    const CardTwo_handleIncrement = () => {
        if (CardTwo_ButtonValue === "Add to Cart") {
            CardTwo_setButtonValue("Remove from Cart");
            setCounter(counter + 1);
        }else if (CardTwo_ButtonValue === "Remove from Cart") {
            CardTwo_setButtonValue("Add to Cart");
            setCounter(counter - 1)
        }
    };

    const CardThree_handleIncrement = () => {
        if (CardThree_ButtonValue === "Add to Cart") {
            CardThree_setButtonValue("Remove from Cart");
            setCounter(counter + 1);
        }else if (CardThree_ButtonValue === "Remove from Cart") {
            CardThree_setButtonValue("Add to Cart");
            setCounter(counter - 1)
        }
    };

    return (
        <>
          <div className="header-tag">
            <Badge color="secondary" badgeContent={counter}>
              <ShoppingCartIcon size="large" />
            </Badge>
          </div>
          <div className="big-bg">
            <div className="main-div">
              <div className="little-div">
                <Card sx={{ minWidth: 400, borderRadius: "16px" }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Free
                    </Typography>
                    <Typography variant="h5" component="div"></Typography>
                    <Typography sx={{ mb: 1.5 }} variant="h4" display="inline">
                      <b>$0</b>
                      <Typography variant="subtitle1" display="inline">
                        /Month
                      </Typography>
                      <hr />
                    </Typography>
                    <Typography variant="body2" align="center">
                      <div className="little-typography">
                        <CheckIcon />
                        Single User
                        <br />
                        <br />
                        <CheckIcon />
                        5GB Storage
                        <br />
                        <br />
                        <CheckIcon disableColumnFilter />
                        Unlimited Public Projects
                        <br />
                        <br />
                        <CheckIcon />
                        Community Access
                        <br />
                        <br />
                        <div className="Disable">
                          <HighlightOffSharpIcon />
                          <span>Unlimited Private Projects</span>
                          <br />
                          <br />
                          <HighlightOffSharpIcon />
                          Dedicated Phone Support
                          <br />
                          <br />
                          <HighlightOffSharpIcon />
                          Free Subdomain
                          <br />
                          <br />
                          <HighlightOffSharpIcon />
                          Monthly Status Reports
                        </div>
                        <br />
                      </div>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      variant="contained"
                      sx={{ borderRadius: "20px", height: "40px" }}
                      onClick={() => CardOne_handleIncrement()}
                    >
                      {CardOne_ButtonValue}
                    </Button>
                  </CardActions>
                </Card>
              </div>
              <div className="little-div">
                <Card sx={{ minWidth: 400, borderRadius: "16px" }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Plus
                    </Typography>
                    <Typography variant="h5" component="div"></Typography>
                    <Typography sx={{ mb: 1.5 }} variant="h4" display="inline">
                      <b>$9</b>
                      <Typography variant="subtitle1" display="inline">
                        /Month
                      </Typography>
                      <hr />
                    </Typography>
                    <Typography variant="body2">
                      <div className="little-typography">
                        <CheckIcon justifyContent="bottom" /> Single User
                        <br />
                        <br />
                        <CheckIcon /> 5GB Storage
                        <br />
                        <br />
                        <CheckIcon /> Unlimited Public Projects
                        <br />
                        <br />
                        <CheckIcon />
                        Community Access
                        <br />
                        <br />
                        <CheckIcon />
                        Unlimited Private Projects
                        <br />
                        <br />
                        <CheckIcon />
                        Dedicated Phone Support
                        <br />
                        <br />
                        <CheckIcon />
                        Free Subdomain
                        <br />
                        <br />
                        <div className="Disable">
                          <HighlightOffSharpIcon /> Monthly Status Reports
                        </div>
                        <br />
                      </div>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      variant="contained"
                      sx={{ borderRadius: "20px", height: "40px" }}
                      onClick={() => CardTwo_handleIncrement()}
                    >
                      {CardTwo_ButtonValue}
                    </Button>
                  </CardActions>
                </Card>
              </div>
              <div className="little-div">
                <Card sx={{ minWidth: 400, borderRadius: "16px" }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Pro
                    </Typography>
                    <Typography variant="h5" component="div"></Typography>
                    <Typography sx={{ mb: 1.5 }} variant="h4" display="inline">
                      <b>$49</b>
                      <Typography variant="subtitle1" display="inline">
                        /Month
                      </Typography>
                      <hr />
                    </Typography>
                    <Typography variant="body2">
                      <div className="little-typography">
                        <CheckIcon />
                        Single User
                        <br />
                        <br />
                        <CheckIcon />
                        5GB Storage
                        <br />
                        <br />
                        <CheckIcon />
                        Unlimited Public Projects
                        <br />
                        <br />
                        <CheckIcon />
                        Community Access
                        <br />
                        <br />
                        <CheckIcon />
                        Unlimited Private Projects
                        <br />
                        <br />
                        <CheckIcon />
                        Dedicated Phone Support
                        <br />
                        <br />
                        <CheckIcon />
                        Free Subdomain
                        <br />
                        <br />
                        <CheckIcon />
                        Monthly Status Reports
                        <br />
                        <br />
                      </div>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      className="button-class"
                      variant="contained"
                      sx={{ borderRadius: "20px", height: "40px" }}
                      onClick={() => CardThree_handleIncrement()}
                    >
                      {CardThree_ButtonValue}
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </div>
          </div>
        </>
      );
}

