import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            tempValue:"",
            userObj:{}
        }
    }
    getUserEditInfo =(info) =>{
        this.setState({
            userObj:info
        });
        this.props.getUserEditInfoApp(info);
    }
    // props.getUserEditInfoApp
    isChange =(event)=>{
        // console.log(event.target.value)
        this.setState({
            tempValue:event.target.value
        });
        this.props.checkConnectProps(this.state.tempValue)
    }
    nhanNut = ()=>{
        if(this.props.hienthiForm ===false){
            return  <div className="btn btn-block btn-outline-info mb-3" onClick={()=>this.props.ketNoi()}>Thêm mới</div>
        }else{
            return <div className="btn btn-block btn-outline-secondary mb-3" onClick={()=>this.props.ketNoi()}>Đóng lại</div>
        }
    } 
    isShowEditForm = () =>{
        if(this.props.editUserStatus === true){
            return <EditUser
            getUserEditInfo={(info)=>this.getUserEditInfo(info)}
            editUserObject={this.props.editUserObject}
            changeEdit={this.props.changeEditUserStatus}/>
        }
    }
    render() {
        
        return (
            <div className="col-12">       
                {this.isShowEditForm()}
                <div className="form-group">
                    <div className="btn-group btn-block ">
                        <input type="text"  className="form-control" onChange ={(event)=> this.isChange(event)} placeholder="Nhập tìm kiếm" />
                        <div className="btn  btn-info" onClick={(dl)=>this.props.checkConnectProps(this.state.tempValue)}>Tìm</div>
                    </div>
                </div>
                {this.nhanNut()}
                
            </div>

        );
    }
}

export default Search;