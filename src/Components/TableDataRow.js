import React, { Component } from 'react';
class TableDataRow extends Component {
    permistionShow =()=>{
        if(this.props.Permission === "1"){
            return "Admin";
        }else if(this.props.Permission === "2"){
            return "Modrator";
        }else{
            return "Nomal";
        }
    }
    editClick= () => {
      this.props.editFunClick()
      this.props.changeEdit()
    }
    deleteButtonClick = (delUser) => {
      this.props.deleteButtonClick(delUser)
    }
    render() {
      // props.editFunClick
        return (
                <tr>
                  <td >{this.props.stt + 1}</td>
                  <td>{this.props.userName}</td>
                  <td>{this.props.tel}</td>
                  <td>{this.permistionShow()}</td>
                  <td>
                    <div className="btn-group">
                      <div className="btn btn-warning edit" onClick = {() => this.editClick()}><i className="fa fa-edit " />Exit</div>
                      <div className="btn btn-danger delete" onClick ={(delUser) => this.deleteButtonClick(this.props.id)}><i className="fa fa-trash-o" />Delete</div>
                    </div>  
                  </td>
                </tr>
        );
    }
}

export default TableDataRow;