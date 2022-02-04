import './header.css'

import Nav from "../../navigation/nav"



function Header(props) {
    // console.log(props);
    const name = props.headerName
    return (
        <div className="header">

            <div className="myname"><h4>{name}</h4></div>


            <div className="nav"><Nav /></div>

        </div >
    );
}

export default Header;
