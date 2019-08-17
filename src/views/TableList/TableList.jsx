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
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";
import firebase from 'firebase';
import { thisTypeAnnotation } from "@babel/types";


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
      fontWeight: "400",//iop
      lineHeight: "1"
    }
  }
};

class TableList extends Component {
  constructor(){
    super();
    this.state={
      // product_name:'shirt',
      // barcode:123456,
      products:[],
      app_products:[],
      sch_products:[],
    }

    this.delete = this.delete.bind(this);
    this.deleteApp = this.deleteApp.bind(this);
    this.deleteSch = this.deleteSch.bind(this);


  }
  componentWillMount(){
    const rootRef=firebase.database().ref().child('products');
    const catRef=rootRef.child('category');
    
    ///////////////////////////////////
    const health_beautyRef=catRef.child('health_beauty');
    var keys = []
    var products=[]
    health_beautyRef.once('value',snap=> {
      snap.forEach(item=>{
          var itemVal = item.val();
          keys.push(itemVal);
      });
      console.log(keys)
      for (var i=0; i < keys.length; i++) {
          products.push(keys[i]);
      }  
      this.setState({products:keys}) 
  });
  ////////////////Apparels////////////////
  const apparelsRef=catRef.child('apparels');
  var app_keys = []
  var app_products=[]
  apparelsRef.once('value',snap=> {
    snap.forEach(item=>{
        var itemVal = item.val();
        app_keys.push(itemVal);
    });
    for (var i=0; i < app_keys.length; i++) {
        app_products.push(app_keys[i]);
    }  
    this.setState({app_products:app_keys})    
});
//////////////////////////////////////////
const back_to_schoolRef=catRef.child('back_to_school');
var sch_keys = []
var sch_products=[]
back_to_schoolRef.once('value',snap=> {
  snap.forEach(item=>{
      var itemVal = item.val();
      sch_keys.push(itemVal);
  });
  for (var i=0; i < sch_keys.length; i++) {
      sch_products.push(sch_keys[i]);
  }  
  this.setState({sch_products:sch_keys})    
});
  }
delete =barcode =>{
  const rootRef=firebase.database().ref().child('products');
  const catRef=rootRef.child('category');
  const health_beautyRef=catRef.child('health_beauty');   
  console.log('here => ');
  health_beautyRef.child(barcode.toString()).remove();

}

deleteApp =barcode =>{
  const rootRef=firebase.database().ref().child('products');
  const catRef=rootRef.child('category');
  const apparelsRef=catRef.child('apparels');   
  console.log('here => ');
  apparelsRef.child(barcode.toString()).remove();

}
deleteSch =barcode =>{
  const rootRef=firebase.database().ref().child('products');
  const catRef=rootRef.child('category');
  const schoolRef=catRef.child('back_to_school');   
  console.log('here => ');
  schoolRef.child(barcode.toString()).remove();

}
  render(){
    var tableData=[];
      for(let i =0;i<this.state.products.length;i++){
        console.log('this => ',this.delete)
        tableData.push([this.state.products[i].product_name,
        this.state.products[i].location,
          this.state.products[i].url, 
          this.state.products[i].barcode ,
          this.state.products[i].price, 
        <Button 
        onClick={this.delete(this.state.products[i].barcode)} 
        color="primary"
        >
          Delete
          </Button>])
      }
     ///////////////////////////////////////APPARELS
        const { classes } = this.props;
        var app_tableData=[];
          for(let i =0;i<this.state.app_products.length;i++){
            app_tableData.push([this.state.app_products[i].product_name,
            this.state.app_products[i].location,
              this.state.app_products[i].url, 
              this.state.app_products[i].barcode ,
              this.state.app_products[i].price, 
            <Button 
            onClick={this.deleteApp.bind(this,this.state.app_products[i].barcode)} // WAITT
            color="primary"
            >
              Delete
              </Button>])
          }   
          console.log('= app_tableData ==');
          console.log(app_tableData);
  ///////////////////////////////////SCHOOL
  // const { classes } = this.props;
        var sch_tableData=[];
          for(let i =0;i<this.state.sch_products.length;i++){
            sch_tableData.push([this.state.sch_products[i].product_name,
            this.state.sch_products[i].location,
              this.state.sch_products[i].url, 
              this.state.sch_products[i].barcode ,
              this.state.sch_products[i].price, 
            <Button 
            onClick={this.deleteSch.bind(this,this.state.sch_products[i].barcode)} // WAITT
            color="primary"
            >
              Delete
              </Button>])
          }   

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
      
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>HEALTH & BEAUTY</h4>
            <p className={classes.cardCategoryWhite}>
              Products located at shelf 1
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Product", "Location", "Image url", "Barcode No", "Price", "Delete"]}
              tableData={tableData}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              APPARELS
            </h4>
            <p className={classes.cardCategoryWhite}>
            Products located at shelf 2
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Product", "Location", "Image url", "Barcode No", "Price", "Delete"]}
              tableData={app_tableData}
            />
          </CardBody>
        </Card>
      </GridItem>

      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Back To School
            </h4>
            <p className={classes.cardCategoryWhite}>
            Products located at shelf 3
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Product", "Location", "Image url", "Barcode No", "Price", "Delete"]}
              tableData={sch_tableData}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );

  }
  
  
}

TableList.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(TableList);
