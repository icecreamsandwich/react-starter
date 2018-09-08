import React , { Component } from 'react';

class Header extends Component {

    constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.state = {
        username: 'User',
        picture: ""
      } 
  }

    render () {
        return (
            <div>
                <ul id="dropdown1" className="dropdown-content">
                    <li><a className="black-text" href="/logout">Logout<i className="material-icons right">exit_to_app</i></a></li>
                </ul>
                <nav>
                    <div className="nav-wrapper grey lighten-5">
                        <a href="/home" className="brand-logo blue-text text-darken-1"><img width={24} height={24} alt="" src={require('../../images/icon.png')} />
                        <span className="hide-on-med-and-down">LazyOut</span></a>
                        <a href="/" data-activates="slide-out" className="button-collapse blue-text text-darken-1"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a className="black-text" href="/home">Home</a></li>
                            <li><a className="black-text" href="/about">About</a></li>
                            <li><a className="black-text" href="/lorem">Lorem</a></li>                          
                            <li><a className="dropdown-button black-text" href="#" data-activates="dropdown1" data-beloworigin="true" data-hover="true">
                            {this.state.username}
                            <img className="circle circle-small" src={this.state.picture}/>
                            <i className="material-icons right">group</i></a></li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Header;