import React from "react";
import Modalcomp from "../../helpers/ModalComp/Modalcomp";
import "./LabTestTable.css";
import Tablecomponent from "../../helpers/TableComponent/TableComp";
import Packagedetails from "./Packagedetails";
class LabTestTable extends React.Component {
  state = {
    openview: false,
  };
  createData = (parameter) => {
    var keys = Object.keys(parameter);
    var values = Object.values(parameter);

    var returnobj = {};

    for (var i = 0; i < keys.length; i++) {
      returnobj[keys[i]] = values[i];
    }
    return returnobj;
  };

  modelopen = (data) => {
    if (data === "view") {
      this.setState({ openview: true });
    } else if (data === "edit") {
      this.setState({ editopen: true });
    }
  };

  closemodal = () => {
    this.setState({ openview: false, editopen: false });
  };
  render() {
    return (
      <div>
        <Tablecomponent
          heading={[
            { id: "", label: "S.No" },
            { id: "test", label: "Test" },
            { id: "cost", label: "Cost(KWD)" },
            { id: "date", label: "Created Date" },
            { id: "", label: "Action" },
          ]}
          rowdata={[
            this.createData({
              test: "Blood",
              cost: "400",
              date: "18 Sep 2019",
            }),
            this.createData({
              test: "X-Ray",
              cost: "400",
              date: "18 Sep 2019",
            }),
            this.createData({
              test: "Electrocardiogram",
              cost: "500",
              date: "17 Sep 2019",
            }),
            this.createData({
              test: "Galactosemia Test",
              cost: "450",
              date: "09 Dec 2019",
            }),
            this.createData({
              test: "Immunoglobulins",
              cost: "600",
              date: "09 Dec 2019",
            }),
            this.createData({
              test: "Skull X-Ray",
              cost: "380",
              date: "08 Dec 2019",
            }),
          ]}
          // tableicon_align={"cell_eye"}
          // VisibilityIcon="close"
          UploadIcon="close"
          GrandTotal="close"
          Workflow="close"
          modelopen={(e) => this.modelopen(e)}
        />
        <Modalcomp
          visible={this.state.openview}
          title={"PACKAGE DETAILS"}
          closemodal={(e) => this.closemodal(e)}
        >
          <Packagedetails />
        </Modalcomp>

        <Modalcomp
          visible={this.state.editopen}
          title={"Edit details"}
          closemodal={(e) => this.closemodal(e)}
          xswidth={"xs"}
        ></Modalcomp>
      </div>
    );
  }
}

export default LabTestTable;
