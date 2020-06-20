import React from 'react'
import './Packagedetails.css';
import { Paper } from "@material-ui/core";



class Packagedetails extends React.Component{


    render(){

        return(

            <div>
                {/* Button Edit */}
                <div className="butt_parent"> 
                        <button className="general_button">General Test</button>
                </div>

                {/* Instruction Edit */}
                <div className="common_row">
                <div style={{width:"50%"}}>
                    <div className="Instruction_text_edit">Instruction</div>
                        <div className="green_upload_container">
                            <span  className="green_uploadint"></span>
                            <span className="para_edit">
                                For the rest of the day and night,urinate into a
                                special container provided by your doctor.
                                Keep the container capped and refrigerated
                                during the collection process.Make sure to label
                                the container  clearly and to tell other family
                                members why it's in the refrigerator
                            </span>
                        </div>
                </div>
            {/*Border Edit  */}
                <div className="border_edit"></div>

                {/* Test edit */}
                <div className="overall_paper_div">
                    <div className="Instruction_text_edit">Test</div>
                    <div>
                        <Paper className="Paper_edit">
                        <div >
                            <button className="kwd_edit">400 KWD</button>
                            <span className="blood_edit">Blood Test</span>
                        </div>
                        </Paper>

                        <Paper className="Paper_edit">
                        <div >
                            <button className="kwd_edit">400 KWD</button>
                            <span className="blood_edit">Urine Test</span>
                        </div>
                        </Paper>

                        <Paper className="Paper_edit">
                        <div >
                            <button className="kwd_edit">400 KWD</button>
                            <span className="blood_edit">Corona Test</span>
                        </div>
                        </Paper>
                    </div>
                        {/* <Paper className="Paper_edit">Blood Test</Paper>
                        <Paper className="Paper_edit">Blood Test</Paper> */}
                    </div>
                </div>
            </div>

        )
    }
}
export default Packagedetails;