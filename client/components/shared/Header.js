import React,{Component} from 'react';
import { Link } from 'react-router';

class Header extends Component {
  constructor(props){
    super();
  }
  render(){
    return(
      <header className="header">
        <div id="home-img">
          <Link className="home" to="/">
            <img alt="Online-Pajak" src={"https://www.online-pajak.com/wp-content/uploads/2019/02/main_logo-1.png"} />
          </Link>
        </div>
      </header>
    )
  }
}

module.exports = Header;
