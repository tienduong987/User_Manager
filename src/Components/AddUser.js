import React, { Component } from 'react';


  class AddUser extends Component { 
    constructor(props) {
      super(props);
      this.state = {
        id:"",
        name:"",
        tel:"",
        Permission:""
      }
    }
  
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name);
        // console.log(value);
        this.setState({
          [name]:value
        });
       
    }
    kiemtraTrangthai= ()=>{
      if(this.props.hienthiForm === true){
        return( 
          <div className="col">
            <form>
                <div className="card bg-light mb-3 mt-3" style={{maxWidth: '18rem'}}>
                  <div className="card-header">Thêm mới user vào hệ thống</div>
                  <div className="card-body">
                    <div className="form-group">
                      <input type="text" onChange={(event) => this.isChange(event)}  name ="name" className="form-control" placeholder="Nhập user" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                      <input type="text" onChange ={(event) => this.isChange(event)}   name="tel" className="form-control" placeholder="Nhập SĐT" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                      <select id="inputState"  onChange ={(event) => this.isChange(event)} name= "Permission" className="form-control">
                        <option value={0}>Chọn quyền mặc định</option>
                        <option value={1}>Admin</option>
                        <option value={2}>Modrator</option>
                        <option value={3}>Normal</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input className="btn btn-primary btn-block" type="reset" onClick={(name,tel,Permission) => this.props.add(this.state.name,this.state.tel,this.state.Permission)} value="thêm mới"/>
                    </div>
                  </div>
                </div>
              </form>
            </div>
        )
      }
    }
    render() {  
        return (
            <div>
            
                {this.kiemtraTrangthai()}
            </div>
        );
    }
}

export default AddUser;