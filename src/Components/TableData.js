import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
  deleteButtonClick= (delUser) => {
    this.props.deleteUser(delUser);
  }
  mappingDataUser =() => this.props.dataUserProps.map((value,key)=>(
    <TableDataRow 
    deleteButtonClick={(delUser) => this.deleteButtonClick(delUser)}
    editFunClick={(user) => this.props.editFunc(value)} 
    userName={value.name} key={key} 
    stt={key} tel={value.tel}
    Permission={value.Permission}
    id={value.id}
    changeEdit={this.props.changeEditUserStatus}
    />
  ))
  // this.props.editFunc
    render() {
      // console.log(this.props.dataUserProps)
        return (
            <div className="col">
            <table className="table table-striped table-inverse table-hover">
              <thead className="thead-inverse">
                <tr>
                  <th>STT</th>
                  <th>Họ Tên</th>
                  <th>Số điện thoại</th>
                  <th>Phân quyền</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                
                {this.mappingDataUser()}
              </tbody>
            </table>
          </div>
          
        );
    }
}

export default TableData;