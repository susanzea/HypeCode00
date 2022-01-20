import React  from "react";

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
    }

    componentDidMount() {
        this.props.fetchFiles(this.props.currentUser.id)
        this.props.fetchUser(this.props.currentUser.id)
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

    handleUpdateClick(file) {
        this.setState({
            edited: true,
            name: file.name,
            id: file._id,
            code: file.code
        })
    }

    handleBioClick() {
        this.setState({
            editbio: true,
            name: this.props.currentUser.first_name,
            bio: this.props.currentUser.bio
        })
    }

    handleInput(field) {
        return e => this.setState({[field]: e.target.value})
    }

    // add hyperlink to filename
    // change how we fetch bio
    // edit bio form submission

    render() {
        if (!this.props.files) return null
        if (!this.state.edited && !this.state.editbio) {
            return (
                <div style={{color: "green", fontSize: "26px"}} >
                    <div>
                        Hello, this is {this.props.currentUser.first_name}'s profile
                    </div>
                    <div className="bio-container">
                        {this.props.currentUser.bio}
                        <br />
                        <button onClick={() => this.handleBioClick()}> Edit Bio </button>
                    </div>
                    <div style={{color: "red", fontSize: "16px"}}> 
                        Here are your solutions to previous problems!
                        <div>
                            <ul>
                            {
                                Object.values(this.props.files).map( file => (
                                    <li key={file._id}>
                                        File Name:{file.name} <br/> File Content:{file.code} <br/> File Id: {file._id} <br/>
                                        <button onClick={() => this.handleDelete(file)}> delete </button>
                                        <button onClick={() => this.handleUpdateClick(file)}> update </button>
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
                    <form >
                        <label> Name </label>
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.handleInput("name")}
                        />
                        <label> Code </label>
                        <input
                            type="text"
                            value={this.state.bio}
                            onChange={this.handleInput("bio")}
                        />
                        <button> Edit Bio</button>
                    </form>
                </div>
            )}
    }

}

export default Profile