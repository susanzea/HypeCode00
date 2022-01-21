import React  from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from 'react-icons/fa/index'

class Profile extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        first_name: this.props.currentUser.first_name,
        edited: false,
        editbio: false,
        }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleBioClick = this.handleBioClick.bind(this)
    this.handleBioUpdate = this.handleBioUpdate.bind(this)
    // debugger
    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUser.id)
        this.props.fetchFiles(this.props.currentUser.id)
    }

    handleDelete(file) {
        this.props.deleteFile(file)
        window.location.reload()
    }

    handleUpdate(e) {
        e.preventDefault();
        const code = this.state.code
        const name = this.state.name
        const user_id = this.state.user_id
        this.props.updateFile(user_id,code,name)
        // setTimeout(() => {
        //     this.setState({edited:false})
        // }, 10);
        // this.props.history.push("/myprofile")
        // debugger
        window.location.reload()
    }
    
    handleBioUpdate(e) {
        e.preventDefault();
        // debugger
        const bio = this.state.bio
        // debugger
        const user_name = this.state.user_name
        const user_id = this.state.user_id
        // debugger
        this.props.updateUser(user_id,user_name,bio)
        window.location.reload()
    }

    handleUpdateClick(file) {
        this.setState({
            edited: true,
            name: file.name,
            user_id: file._id,
            code: file.code
        })
    }

    
    handleBioClick() {
        this.props.fetchUser(this.props.currentUser.id)
        this.setState({
            editbio: true,
            user_name: this.props.user.first_name,
            bio: this.props.user.bio,
            user_id: this.props.currentUser.id
        })
        // debugger
    }

    handleInput(field) {
        return e => this.setState({[field]: e.target.value})
    }

    saveCode(code) {
        // const value = this.state.editor.getValue();
        const value = code
        console.log(value)
        // this.props.createFile({ code: value })
        // debugger
        var textFileAsBlob = new Blob([value], {
            type: "text/plain;charset=utf-8"
        });
        var fileNameToSaveAs = "myfile.txt";

        var downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        if (window.webkitURL != null) {
            downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        } else {
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        }
        downloadLink.click();

    }


    // add hyperlink to filename
    // change how we fetch bio
    // edit bio form submission

    render() {
        if (!this.props.files) return null
        if (!this.props.user) return null
        // debugger
        if (!this.state.edited && !this.state.editbio) {
            return (
                <div className="profile-container" style={{color: "green", fontSize: "26px"}} >
                    <div className="left-profile">
                        <div className="icon-container">
                            <FaRegUserCircle className="user-icon" />
                        </div>
                        
                        <div className="profile-name">
                            <div className="user-name">
                                {this.props.user.first_name}
                            </div>
                        </div>
                        <div className="bio-container">
                            <div className="bio-desc">
                                <div className="about-me">
                                    About me:
                                </div>
                                {this.props.user.bio}    
                            </div>
                        </div>
                        <div className="edit-button-wrapper">
                            <button onClick={() => this.handleBioClick()} className="profile-button-design"> Edit Bio </button>
                        </div>
                    </div>

                    <div className="right-profile" style={{color: "#E1EF7E", fontSize: "16px"}}> 
                        <div className="right-profile-content">
                            <div className="right-profile-header">
                                Previously saved files:
                            </div>
                            <div>
                                <ul>
                                {
                                    Object.values(this.props.files).map( file => (
                                        
                                        <li className="file-item" key={file._id}>
                                            <div className="download-button" onClick={() => this.saveCode(file.code)}> 
                                                <Link to='#'>{file.name.slice(0, 12)}</Link>
                                            </div>
                                            <div className="file-details">
                                                    <div className="file-id">
                                                    Id: {file._id.slice(4,20)}
                                                    </div>
                                                    <div className="file-content">
                                                    Content: {file.code.slice(0,25)}... <br/>  
                                                    </div>
                                            </div>
                                            <div className="file-buttons">
                                                <button className="file-button" id="ucb" onClick={() => this.handleUpdateClick(file)}>UPDATE FILE</button>
                                                <button className="file-button" id="dcb" onClick={() => this.handleDelete(file)}>DELETE FILE</button>
                                            </div>
                                        </li>
                                    ))
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                )
        } else if (this.state.edited) {
            // debugger
            return (
                <div style={{color: "cyan", fontSize: "16px"}} className="edit-form">
                    <div className="edit-form-container">
                        <label className="edit-form-type"> File Edit Form </label>
                        <form onSubmit={this.handleUpdate}>
                            <label> File Name </label>
                            <input
                                type="text"
                                value={this.state.name}
                                onChange={this.handleInput("name")}
                            />
                            <label> File Code </label>
                            <textarea
                                // type="text"
                                value={this.state.code}
                                onChange={this.handleInput("code")}
                            />
                            <div className="edit-button-wrapper" id="ebw1">
                                <button className="profile-button-design" id="eb1"> Submit Edit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        } else if (this.state.editbio && !this.state.edited) {
            return(
                <div style={{color: "cyan", fontSize: "16px"}} className="edit-form">
                     <div className="edit-form-container">
                    <label className="edit-form-type"> File Edit Form </label>
                    <form onSubmit={this.handleBioUpdate}>
                        
                        <label> Your Display Name </label>
                        <input
                            type="text"
                            value={this.state.user_name}
                            onChange={this.handleInput("user_name")}
                        />
                        <label> Your Bio </label>
                        <textarea
                            // type="text"
                            value={this.state.bio}
                            onChange={this.handleInput("bio")}
                        />
                    <div className="edit-button-wrapper" id="ebw1">
                        <button className="profile-button-design" id="eb1"> Submit Edit </button>
                    </div>
                    </form>
                    </div>
                </div>
            )}
    }

}

export default Profile