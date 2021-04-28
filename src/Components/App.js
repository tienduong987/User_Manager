import React, { Component } from 'react';
import './../App.css';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import DataUser from "./Data.json";
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      hienthiForm: false,
      data:[],
      searchText:'',
      editUserStatus: false,
      editUserObject:{}
    }
  }
  
  componentWillMount() {
    if( localStorage.getItem("userData") === null){
      localStorage.setItem("userData",JSON.stringify(DataUser));
    }else{
      var temp = JSON.parse(localStorage.getItem("userData"));
      this.setState({
        data:temp
      });
    }
  }
  
  getUserEditInfoApp = (info) =>{
    this.state.data.forEach((value,key)=>{
      if(value.id ===info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.Permission = info.Permission;
      }
    })
    localStorage.setItem("userData",JSON.stringify(this.state.data))
  }
  changeEditUserStatus = () =>{
    this.setState({
       editUserStatus: !this.state.editUserStatus
    })
  }
  getTextSearch = (dl)=>{
    this.setState({
      searchText: dl
    });
  }
 
 doitrangThai=()=>{
   this.setState({
     hienthiForm: !this.state.hienthiForm
   })
 }
 getNewUserData = (name,tel,Permission) =>{
      var item ={};
      item.id = uuidv4();
      item.name = name;
      item.tel = tel;
      item.Permission =Permission;
      var items = this.state.data;
      items.push(item)
      this.setState({
        data:items
      });
     localStorage.setItem("userData",JSON.stringify(items));
 }
 editUser= (user) =>{
  //  console.log("kết nốt thành công");
  this.setState({
    editUserObject:user
  });
 }
 deleteUser = (delUser) =>{
  var tempData = this.state.data
  tempData=tempData.filter(item => item.id !== delUser);
  this.setState({
    data:tempData
  });
  localStorage.setItem("userData",JSON.stringify(tempData))
}
  render() {
    var ketqua =[];
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.searchText) !== -1){
        ketqua.push(item);
      }
    })
    // console.log(ketqua);
    return (
      <div>
        <Header/>
        <div className="SearchInfo">
          <div className="container">
            <div className="row">
              <Search 
              getUserEditInfoApp ={(info) => this.getUserEditInfoApp(info)}
              editUserObject={this.state.editUserObject}
              changeEditUserStatus ={()=>this.changeEditUserStatus()}
              editUserStatus = {this.state.editUserStatus}
              ketNoi={()=>this.doitrangThai()} 
              hienthiForm={this.state.hienthiForm} 
              checkConnectProps ={(dl)=>this.getTextSearch (dl)}/>
              <hr/>
            </div>
            <div className="row">
              <TableData 
              deleteUser ={(delUser) => this.deleteUser(delUser)}
              editFunc ={(user) => this.editUser(user)} dataUserProps={ketqua} changeEditUserStatus ={()=>this.changeEditUserStatus()}/>
              <AddUser hienthiForm={this.state.hienthiForm} add={(name,tel,Permission)=>this.getNewUserData(name,tel,Permission)} />
            </div>

            </div>
        </div>
      </div>
    );
  }
}

export default App;