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
        const id = this.state.id
        this.props.updateFile(id,code,name)
        // setTimeout(() => {
        //     this.setState({edited:false})
        // }, 10);
        // this.props.history.push("/myprofile")
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
                            Hello, this is {this.props.user.first_name}'s profile
                        </div>
                    </div>
                    <div className="bio-container">
                        {this.props.user.bio}
                        <br />
                        <button onClick={() => this.handleBioClick()}> Edit Bio </button>
                    </div>
                </div>

                    <div style={{color: "red", fontSize: "16px"}}> 
                        Here are your solutions to previous problems!
                        <div>
                           
                            <ul>
                            {
                                Object.values(this.props.files).map( file => (
                                    
                                    <li className="file-item" key={file._id}>
                                        <div className="download-button" onClick={() => this.saveCode(file.code)}> 
                                            <Link to='#'>{file.name.slice(0, 8)}</Link>
                                        </div>
                                        <div className="file-details">
                                        File Content:{file.code.slice(0,25)}... <br/>  
                                              File Id: {file._id} <br/>
                                        </div>
                                        <div className="file-buttons">
                                            <button className="file-button" onClick={() => this.handleUpdateClick(file)}>update file</button>
                                            <button className="file-button" onClick={() => this.handleDelete(file)}>delete file</button>
                                        </div>
                                    </li>
                                ))
                            }
                            </ul>
                        </div>
                    </div>
                </div>
                )
        } else if (this.state.edited) {
            // debugger
            return (
                <div style={{color: "red", fontSize: "16px"}}>
                    <form onSubmit={this.handleUpdate}>
                        <label> Name </label>
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.handleInput("name")}
                        />
                        <label> Code </label>
                        <input
                            type="text"
                            value={this.state.code}
                            onChange={this.handleInput("code")}
                        />
                        <button> Edit</button>
                    </form>
                </div>
            )
        } else if (this.state.editbio && !this.state.edited) {
            return(
                <div style={{color: "cyan", fontSize: "16px"}}>
                    <form onSubmit={this.handleBioUpdate}>
                        <label> Name </label>
                        <input
                            type="text"
                            value={this.state.user_name}
                            onChange={this.handleInput("user_name")}
                        />
                        <label> Bio </label>
                        <input
                            type="text"
                            value={this.state.bio}
                            onChange={this.handleInput("bio")}
                        />
                        <button> Edit Bio </button>
                    </form>
                </div>
            )}
    }

}

export default Profile