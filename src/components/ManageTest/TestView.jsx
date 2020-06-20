import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Labelbox from "../../helpers/labelbox/labelbox";
import Button from "@material-ui/core/Button";
import "./TestView.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Upload } from "antd";
import { Tag } from 'antd';
import AddIcon from '@material-ui/icons/Add';
import dateformat from 'dateformat';
import ValidationLibrary from "../../helpers/validationfunction";
import { apiurl } from "../../App";
import axios from 'axios';

export default class TestView extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      name:"",
      labmanage_test: {
        'lab_test_category': {
          'value': '',
          validation: [{ 'name': 'required' }],
          error: null,
          errmsg: null,
        },
        'lab_instruction':{
          'value': '',
          validation: [{ 'name': 'required' }],
          error: null,
          errmsg: null,
        },
     
        // lab_test_list:[{
          lab_test_name:{
            'value': '',
            validation: [{ 'name': 'required' }],
            error: null,
            errmsg: null,
          },
          lab_cost:{
            'value': '',
            validation: [{ 'name': 'required' }],
            error: null,
            errmsg: null,
          },  },
      //  }],
            }
          }
      log=(e)=> {
        console.log(e);
      }
      changeDynamic = (data, key) => {
        if (key === 'profile_pic') {
          this.handleChange(data)
      }
        // console.log(data,"hai")
        var labmanage_test = this.state.labmanage_test;
        var errorcheck = ValidationLibrary.checkValidation(data, labmanage_test[key].validation);
        labmanage_test[key].value = data;
        labmanage_test[key].error = !errorcheck.state;
        labmanage_test[key].errmsg = errorcheck.msg;
        this.setState({ labmanage_test });
      }
      checkValidation = () => {
        var labmanage_test = this.state.labmanage_test;
        var medicineKeys = Object.keys(labmanage_test);
        // console.log(medicineKeys);
        for (var i in medicineKeys) {
          var errorcheck = ValidationLibrary.checkValidation(labmanage_test[medicineKeys[i]].value, labmanage_test[medicineKeys[i]].validation);
          // console.log(errorcheck);
          labmanage_test[medicineKeys[i]].error = !errorcheck.state;
          labmanage_test[medicineKeys[i]].errmsg = errorcheck.msg;
        }
        var filtererr = medicineKeys.filter((obj) =>
          labmanage_test[obj].error == true);
        // console.log(filtererr.length)
        if (filtererr.length > 0) {
          this.setState({ error: true })
        } else {
          this.setState({ error: false })
          this.onSubmitData()
          // this.onSubmitDatatest()
        }
        this.setState({ labmanage_test })
      }
      onSubmitData = () => {
        var labmanage_testApiData = {
          // mediatype:"image",
          // mediasortorder:1,
          // mediavendorId:2,
          // activeflag:1,
          // createdby:1,
          // created_on:dateformat(new Date(), "yyyy-mm-dd hh:MM:ss"),
          // modifiedby:1,
          // modifiedon: dateformat(new Date(), "yyyy-mm-dd hh:MM:ss"),
          // ipaddress:"192.144.23",
          // mediatitle: this.state.labmanage_test.media_title.value,
          // mediadescription:this.state.labmanage_test.media_description.value,
          // imageArray:this.state.imageurl,
          // isactive:this.state.mediaupload_active == true ? 1:0
          lab_test_category: this.state.labmanage_test.lab_test_category.value,
          lab_instruction:this.state.labmanage_test.lab_instruction.value,
          cost: "1",
          active_flag: "1",
          lab_modified_by: "19",
          lab_created_on: dateformat(new Date(), "yyyy-mm-dd hh:MM:ss"),
          lab_vendor_id:"2",
          lab_created_by:"19",
          lab_modified_on: dateformat(new Date(), "yyyy-mm-dd hh:MM:ss"),
          lab_test_name:this.state.labmanage_test.lab_test_name.value,
          lab_cost:this.state.labmanage_test.lab_cost.value,

          // lab_test_list:[{
          //  lab_test_name:this.state.lab_test_list.lab_test_name.value,
          //  lab_cost:this.state.lab_test_list.lab_cost.value,
        // }]
        }
        if(this.props.editData){
          this.labmanage_testUpdateApi(labmanage_testApiData)   // Update Api Call
        }else{
          this.labmanage_testAddApi(labmanage_testApiData)   // Insert Api Call
        }
        this.props.closemodal()
      }
      // for test category and instruction api
      labmanage_testAddApi = (labmanage_testApiData) => {
        axios({
          method: 'POST',
          url: apiurl + '/insert_mas_lab_test',
          data: {
            ...labmanage_testApiData
          }
        })
        // .then((response) => {
        //   console.log(response)
        //   this.props.getTableData()
        // }).catch((error) => {
        //   alert(JSON.stringify(error))
        // })
      }
      // for add tag func
      // onSubmitDatatest = () => {
      //   var lab_test_listApiData = {

      //     // lab_test_category: this.state.labmanage_test.lab_test_category.value,
      //     // lab_instruction:this.state.labmanage_test.lab_instruction.value,
      //     // cost: "1",
      //     // active_flag: "1",
      //     // lab_modified_by: "19",
      //     // lab_created_on: dateformat(new Date(), "yyyy-mm-dd hh:MM:ss"),
      //     // lab_vendor_id:"2",
      //     // lab_created_by:"19",
      //     // lab_modified_on: dateformat(new Date(), "yyyy-mm-dd hh:MM:ss"),

      //     // lab_test_list:[{
      //      lab_test_name:this.state.lab_test_list.lab_test_name.value,
      //      lab_cost:this.state.lab_test_list.lab_cost.value,
      //   // }]
      //   }
      //   if(this.props.editData){
      //     this.lab_test_listUpdateApi(lab_test_listApiData)   // Update Api Call
      //   }else{
      //     this.lab_test_listAddApi(lab_test_listApiData)   // Insert Api Call
      //   }
      //   this.props.closemodal()
      // }
      // //  for add tag insert api
      
      // labmanage_testAddApi = (lab_test_listApiData) => {
      //   axios({
      //     method: 'POST',
      //     url: apiurl + '/insert_mas_lab_singletest',
      //     data: {
      //       ...lab_test_listApiData
      //     }
      //   })
      //   // .then((response) => {
      //   //   console.log(response)
      //   //   this.props.getTableData()
      //   // }).catch((error) => {
      //   //   alert(JSON.stringify(error))
      //   // })
      // }
      
  
  render() {
    return (
      <div className="testentry_container">
         
            
         <Grid container spacing={2}>
         <Grid item xs={12} md={7}>
           
           
         <div className="instruction_area">
           <Labelbox
              type="text" 
              // value="General test" 
              labelname="Test Category"
              changeData={(data) => this.changeDynamic(data,'lab_test_category')}
              value={this.state.labmanage_test.lab_test_category.value}
              error={this.state.labmanage_test.lab_test_category.error}
              errmsg={this.state.labmanage_test.lab_test_category.errmsg}/>
           </div>

           <div className="instruction_area">
            <Labelbox 
              type="textarea" 
              // value="For the rest of the night" 
              labelname="Patient Instruction"
              changeData={(data) => this.changeDynamic(data,'lab_instruction')}
              value={this.state.labmanage_test.lab_instruction.value}
              error={this.state.labmanage_test.lab_instruction.error}
              errmsg={this.state.labmanage_test.lab_instruction.errmsg}/>
            </div>
          
         </Grid>
         <Grid item xs={12} md={5} className="package_containerthird">
           <div  className="add_test_container">
             <div className="add_div">
              <div  className="add_test">
              <Labelbox 
                type="text" 
                // value="Blood Test" 
                labelname="Test Name"
                changeData={(data) => this.changeDynamic(data,'lab_test_name')}
                value={this.state.labmanage_test.lab_test_name.value}
                error={this.state.labmanage_test.lab_test_name.error}
                errmsg={this.state.labmanage_test.lab_test_name.errmsg}/>
              </div> 
             <div  className="add_test">
              <Labelbox 
                type="text" 
                // value="400" 
                labelname="Cost (KWD)"
                changeData={(data) => this.changeDynamic(data,'lab_cost')}
                value={this.state.labmanage_test.lab_cost.value}
                error={this.state.labmanage_test.lab_cost.error}
                errmsg={this.state.labmanage_test.lab_cost.errmsg}/>
              </div>
             <AddIcon className="test_add"/></div>
             <div className="test_viewtag_div"><Tag closable onClose={this.log} className="test_view_tag">Ehocardiogram<span className="bar_tag">-</span><span>400(KWD)</span></Tag></div>
  

           </div>

         </Grid>
          <div className="manage_test_button-container">
            <Button className="manage_test_Cancel" onClick={()=>this.props.closemodal(false)}>Cancel</Button>
            <Button className="manage_test_Submit" onClick={this.checkValidation} >Submit</Button>
          </div>
          
          </Grid>
          
      </div>
    );
  }
}
