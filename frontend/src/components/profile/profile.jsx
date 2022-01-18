import React  from "react";


class Profile extends React.Component {
    constructor(props) {
        super(props);
        // debugger
    this.state = {
        first_name: this.props.currentUser.first_name
        }
    }

    render() {
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
                <div> 
                    Here are your solutions to previous problems!
                    <li> Problem 1 </li>
                    <li> Problem 2 </li>
                    <li> Problem 3 </li>
                    <li> Problem 4 </li>
                </div>
            </div>
        )
    }

}

export default Profile