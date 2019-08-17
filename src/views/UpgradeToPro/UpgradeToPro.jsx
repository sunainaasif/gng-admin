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
  const home_appliancesRef=catRef.child('home_appliances');
  const productref = home_appliancesRef.child(this.state.barcode.toString())
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







// /*!

// =========================================================
// * Material Dashboard React - v1.7.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/material-dashboard-react
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */
// import React from "react";
// // nodejs library to set properties for components
// import PropTypes from "prop-types";
// // @material-ui/core components
// import withStyles from "@material-ui/core/styles/withStyles";
// // @material-ui/icons
// import Close from "@material-ui/icons/Close";
// import Check from "@material-ui/icons/Check";
// // core components
// import GridItem from "components/Grid/GridItem.jsx";
// import GridContainer from "components/Grid/GridContainer.jsx";
// import Danger from "components/Typography/Danger.jsx";
// import Success from "components/Typography/Success.jsx";
// import Button from "components/CustomButtons/Button.jsx";
// import Card from "components/Card/Card.jsx";
// import CardHeader from "components/Card/CardHeader.jsx";
// import CardBody from "components/Card/CardBody.jsx";

// const styles = {
//   cardCategoryWhite: {
//     "&,& a,& a:hover,& a:focus": {
//       color: "rgba(255,255,255,.62)",
//       margin: "0",
//       fontSize: "14px",
//       marginTop: "0",
//       marginBottom: "0"
//     },
//     "& a,& a:hover,& a:focus": {
//       color: "#FFFFFF"
//     }
//   },
//   cardTitleWhite: {
//     color: "#FFFFFF",
//     marginTop: "0px",
//     minHeight: "auto",
//     fontWeight: "300",
//     fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//     marginBottom: "3px",
//     textDecoration: "none",
//     "& small": {
//       color: "#777",
//       fontSize: "65%",
//       fontWeight: "400",
//       lineHeight: "1"
//     }
//   },
//   tableUpgradeWrapper: {
//     display: "block",
//     width: "100%",
//     overflowX: "auto",
//     WebkitOverflowScrolling: "touch",
//     MsOverflowStyle: "-ms-autohiding-scrollbar"
//   },
//   table: {
//     width: "100%",
//     maxWidth: "100%",
//     marginBottom: "1rem",
//     backgroundColor: "transparent",
//     borderCollapse: "collapse",
//     display: "table",
//     borderSpacing: "2px",
//     borderColor: "grey",
//     "& thdead tr th": {
//       fontSize: "1.063rem",
//       padding: "12px 8px",
//       verticalAlign: "middle",
//       fontWeight: "300",
//       borderTopWidth: "0",
//       borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
//       textAlign: "inherit"
//     },
//     "& tbody tr td": {
//       padding: "12px 8px",
//       verticalAlign: "middle",
//       borderTop: "1px solid rgba(0, 0, 0, 0.06)"
//     },
//     "& td, & th": {
//       display: "table-cell"
//     }
//   },
//   center: {
//     textAlign: "center"
//   }
// };

// function UpgradeToPro(props) {
//   const { classes } = props;
//   return (
//     <GridContainer justify="center">
//       <GridItem xs={12} sm={12} md={8}>
//         <Card>
//           <CardHeader color="info">
//             <h4 className={classes.cardTitleWhite}>
//               Material Dashboard PRO React
//             </h4>
//             <p className={classes.cardCategoryWhite}>
//               Are you looking for more components? Please check our Premium
//               Version of Material Dashboard Angular.
//             </p>
//           </CardHeader>
//           <CardBody>
//             <div className={classes.tableUpgradeWrapper}>
//               <table className={classes.table}>
//                 <thead>
//                   <tr>
//                     <th />
//                     <th className={classes.center}>Free</th>
//                     <th className={classes.center}>PRO</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>Components</td>
//                     <td className={classes.center}>30</td>
//                     <td className={classes.center}>200</td>
//                   </tr>
//                   <tr>
//                     <td>Plugins</td>
//                     <td className={classes.center}>2</td>
//                     <td className={classes.center}>10</td>
//                   </tr>
//                   <tr>
//                     <td>Example Pages</td>
//                     <td className={classes.center}>7</td>
//                     <td className={classes.center}>28</td>
//                   </tr>
//                   <tr>
//                     <td>Login, Register, Pricing, Lock Pages</td>
//                     <td className={classes.center}>
//                       <Danger>
//                         <Close />
//                       </Danger>
//                     </td>
//                     <td className={classes.center}>
//                       <Success>
//                         <Check />
//                       </Success>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>
//                       ReactTables, ReactVectorMap, ReactSweetAlert, Wizard,
//                       Validation, ReactBigCalendar etc...
//                     </td>
//                     <td className={classes.center}>
//                       <Danger>
//                         <Close />
//                       </Danger>
//                     </td>
//                     <td className={classes.center}>
//                       <Success>
//                         <Check />
//                       </Success>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>Mini Sidebar</td>
//                     <td className={classes.center}>
//                       <Danger>
//                         <Close />
//                       </Danger>
//                     </td>
//                     <td className={classes.center}>
//                       <Success>
//                         <Check />
//                       </Success>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>Premium Support</td>
//                     <td className={classes.center}>
//                       <Danger>
//                         <Close />
//                       </Danger>
//                     </td>
//                     <td className={classes.center}>
//                       <Success>
//                         <Check />
//                       </Success>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td />
//                     <td className={classes.center}>Free</td>
//                     <td className={classes.center}>Just $59</td>
//                   </tr>
//                   <tr>
//                     <td />
//                     <td className={classes.center}>
//                       <Button round disabled>
//                         Current Version
//                       </Button>
//                     </td>
//                     <td className={classes.center}>
//                       <Button
//                         round
//                         color="danger"
//                         href="https://www.creative-tim.com/product/material-dashboard-pro-react?ref=mdr-upgrade-live"
//                       >
//                         Upgrade to Pro
//                       </Button>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </CardBody>
//         </Card>
//       </GridItem>
//     </GridContainer>
//   );
// }

// UpgradeToPro.propTypes = {
//   classes: PropTypes.object
// };

// export default withStyles(styles)(UpgradeToPro);
