/*!

=========================================================
* Material Dashboard React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";


const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function TableList(props) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Shelf 1</h4>
            <p className={classes.cardCategoryWhite}>
              Products located at shelf 1
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Product", "Quantity", "Image Path", "Barcode No", "Price", "Edit"]}
              tableData={[
                ["Shirt", "200", "src/images/image.jpg", "12345678", "$36,738",  <Button color="primary">Edit</Button>],
                ["Shirt", "200", "src/images/image.jpg", "12345678", "$36,738",  <Button color="primary">Edit</Button>],
                ["Shirt", "200", "src/images/image.jpg", "12345678", "$36,738",  <Button color="primary">Edit</Button>],
                ["Shirt", "200", "src/images/image.jpg", "12345678", "$36,738",  <Button color="primary">Edit</Button>],
                ["Shirt", "200", "src/images/image.jpg", "12345678", "$36,738",  <Button color="primary">Edit</Button>],
                ["Shirt", "200", "src/images/image.jpg", "12345678", "$36,738",  <Button color="primary">Edit</Button>],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Shelf 2
            </h4>
            <p className={classes.cardCategoryWhite}>
            Products located at shelf 2
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Product", "Quantity", "Image Path", "Barcode No", "Price", "Edit"]}
              tableData={[
                ["Shirt", "200", "src/images/image.jpg", "12345678", "$36,738",  <Button color="primary">Edit</Button>],
                ["Shirt", "200", "src/images/image.jpg", "12345678", "$36,738",  <Button color="primary">Edit</Button>],
                ["Shirt", "200", "src/images/image.jpg", "12345678", "$36,738",  <Button color="primary">Edit</Button>],
                ["Shirt", "200", "src/images/image.jpg", "12345678", "$36,738",  <Button color="primary">Edit</Button>],
                ["Shirt", "200", "src/images/image.jpg", "12345678", "$36,738",  <Button color="primary">Edit</Button>],
                ["Shirt", "200", "src/images/image.jpg", "12345678", "$36,738",  <Button color="primary">Edit</Button>],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

TableList.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(TableList);
