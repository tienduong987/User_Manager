import React, { Component } from 'react';
// editUserObject={this.props.editUserObject}
class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.editUserObject.id,
            name:this.props.editUserObject.name,
            tel:this.props.editUserObject.tel,
            Permission:this.props.editUserObject.Permission
        }
        
    }
    isChange =(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        this.setState({
            [name]:value
        });
    }
    saveButton=()=>{
        var info={}
        info.id=this.state.id
        info.name=this.state.name
        info.tel=this.state.tel
        info.Permission=this.state.Permission
        this.props.getUserEditInfo(info)
        this.props.changeEdit()
    }
    render() {
        console.log(this.state)
        return (
            
            <div className="row">
                <div className="col">
                    <form>
                        <div className="card bg-light mb-3 mt-3" >
                        <div className="card-header text-center">Sửa user trong hệ thống</div>
                        <div className="card-body">
                            <div className="form-group">
                            <input type="text" onChange={(event)=> this.isChange(event)} defaultValue={this.props.editUserObject.name}  name ="name" className="form-control" placeholder="Nhập user" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                            <input type="text" onChange={(event)=> this.isChange(event)} defaultValue={this.props.editUserObject.tel} name="tel" className="form-control" placeholder="Nhập SĐT" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                            <select id="inputState" onChange={(event)=> this.isChange(event)} defaultValue={this.props.editUserObject.Permission} name= "Permission" className="form-control">
                                <option value={0}>Chọn quyền mặc định</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Modrator</option>
                                <option value={3}>Normal</option>
                            </select>
                            </div>
                            <div className="form-group">
                            <input className="btn btn-primary btn-block" onClick={()=>this.saveButton() } type="button" value="Lưu"/>
                            </div>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditUser;