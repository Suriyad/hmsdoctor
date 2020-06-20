import React,{Component} from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import Moment from 'react-moment';
import Paper from '@material-ui/core/Paper';
// import './PharmacyEntryMaster'
import Grid from '@material-ui/core/Grid';
import Labelbox from '../../helpers/labelbox/labelbox'
import Button from '@material-ui/core/Button';
import './BasicDetails.css'
export default class BasicDetails extends React.Component{
render()
{ 
    return(
        <div className="basic_details_container">
<Grid container>
<Grid item xs={12} md={6} className="basicdetails_container">
<div className="basicdetails_firstgrid">
<div className="basicdetails_child">
<Labelbox type="text" labelname="Name"/>
<Labelbox type="text" labelname="Address Line1"/>
<Labelbox type="text" labelname="Address Line2"/>
<Labelbox type="text" labelname="Pincode"/>
<Labelbox type="text" labelname="Website"/>
</div>
</div>
</Grid>
<Grid item xs={12} md={6} className="basicdetails_container">
<div className="basicdetails_firstgrid">
<div className="basicdetails_child">
 <Labelbox type="text" labelname="Mobile Number"/>
 <Labelbox type="text" labelname="Contact Person"/>
 <Labelbox type="text" labelname="Contact Person Mobile Number"/>
 <Labelbox type="text" labelname="Email Id"/>
 </div>
</div>
 </Grid>
</Grid>
</div>
    )
}
}
