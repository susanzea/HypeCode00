import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            display: false,
        }
        this.menuRef = React.createRef()
    }

    handleClick = () => {
        this.setState({ display: !this.state.display})
    }

    handleOutsideClick = (e) => {
        if (this.menuRef.current && !this.menuRef.current.contains(e.target)) {
            this.setState({display: false})
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown',this.handleOutsideClick);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown',this.handleOutsideClick);
    }


    menuItems(){
        return(
            <div className="menu-item">
                <Link className="menu-button">{this.props.currentUser.first_name}'s Profile</Link>
                {/* <Link className="menu-button" > Create Listing </Link> */}
                <Link className="menu-button" onClick={this.props.logout}>Log out</Link>
            </div> )
    }


    render() {
        return (
            <div  className="menu-container" onClick={this.handleClick} ref={this.menuRef}>
                <div className="menu-icon">
                    <div className="menu-wrapper">
                        Click
                    </div>
                </div>
                {this.state.display ? this.menuItems() : null}
            </div>
        );
    } 
}


export default Menu;