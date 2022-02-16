const Nav = (props) => {
    return ( 
        <div className = "nav-bar">
            <span className ="logoname">{props.logoname}</span>
            <div className = "nav">

                <ul className = "nav-ul">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Team</li>
                    <li>Register</li>
                </ul>

            </div>

        </div>
     );
}
 
export default Nav;