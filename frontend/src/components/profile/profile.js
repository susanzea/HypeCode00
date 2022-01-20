import React  from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        first_name: this.props.currentUser.first_name
        }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    }

    componentDidMount() {
        this.props.fetchFiles(this.props.currentUser.id)
    }

    handleDelete(file) {
        this.props.deleteFile(file)
        window.location.reload()
    }

    handleUpdate(file) {
        const code = "<h1> Nothing sus here </h1>";
        const name = "testingname";
        this.props.updateFile(file,code,name)
    }

    render() {
        if (!this.props.files) return null
        return (
            <div>
                <div>
                    Hello, this is {this.props.currentUser.first_name}'s profile
                </div>
                <div className="bio-container">
                    {this.props.currentUser.bio}
                    <br />
                    <button> Edit Bio </button>
                </div>
                <div style={{color: "red", fontSize: "16px"}}> 
                    Here are your solutions to previous problems!
                    <div>
                        <ul>
                        {
                            Object.values(this.props.files).map( file => (
                                <li>
                                    File Name:{file.name} <br/> File Content:{file.code} <br/> File Id: {file._id} <br/>
                                    <button onClick={() => this.handleDelete(file)}> delete </button>
                                    <button onClick={() => this.handleUpdate(file)}> update </button>
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

export default Profile