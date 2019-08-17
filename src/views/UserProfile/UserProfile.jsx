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
import React,{Component} from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import firebase from 'firebase'
import avatar from "assets/img/faces/marc.jpg";

import {  FormGroup, FormControl, FormLabel as FormLabel } from "react-bootstrap";
const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};
class UserProfile extends Component {
  constructor(props){
    super(props);
    this.state={
      product_name:"",
      location:"",
      imageurl:"",
      barcode:0,
      price:0,
      availability:""
    }
  }

render() {
  const { classes } = this.props;


  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Product's Data</h4>
              <p className={classes.cardCategoryWhite}>Add Data Here</p>
            </CardHeader>
            <CardBody>
          
            <form 
            //  this.state={productname:""}onSubmit={this.handleSubmit}
            >
              
          <FormGroup controlId="email" bsSize="large">
            <FormLabel className="email"> Prioduct - </FormLabel>
              <FormControl
              autoFocus
              type="text"
              onChange={(e)=>{this.setState({product_name:e.target.value})}}
              
              // onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel className="pswd">Location - </FormLabel>
              <FormControl
              
              // onChange={this.handleChange}
              onChange={(e)=>{this.setState({location:e.target.value})}}
              type="string"
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel className="email"> Img URL - </FormLabel>
              <FormControl
              autoFocus
              type="string"
              onChange={(e)=>{this.setState({imageurl:e.target.value})}}
          

            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel className="pswd">Barcode - </FormLabel>
              <FormControl
              // value={this.state.password}
              onChange={(e)=>{this.setState({barcode:e.target.value})}}
           
              // onChange={this.handleChange}
              type="number"
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel className="email"> Price - - - </FormLabel>
              <FormControl
              autoFocus
              type="number"
              onChange={(e)=>{this.setState({price:e.target.value})}}
         
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel className="pswd">Available </FormLabel>
              <FormControl
              onChange={(e)=>{this.setState({availability:e.target.value})}}
            
              type="text"
            />
          </FormGroup>
        </form>


            </CardBody>
            <CardFooter>
              <Button color="primary" 
              onClick={()=>{
  const rootRef=firebase.database().ref().child('products');
  const catRef=rootRef.child('category');
  const apparelsRef=catRef.child('apparels');
  const productref = apparelsRef.child(this.state.barcode.toString())
  console.log(this.state)
  productref.set({
    product_name:this.state.product_name,
    location:this.state.location.toString(),
    barcode:Number(this.state.barcode),
    imageurl:this.state.imageurl.toString(),
    price:Number(this.state.price),
    availability:this.state.availability.toString()



  });
  alert("Data saved in apparel.")
              }}
               >SAVE</Button>
            </CardFooter>
          </Card>


        </GridItem>
        
      </GridContainer>
    </div>
  );
}


}
UserProfile.propTypes = {
  classes: PropTypes.object
};
export default withStyles(styles)(UserProfile);
