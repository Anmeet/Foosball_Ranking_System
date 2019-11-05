import React,{Component} from 'react';

class Footer extends Component {
  constructor(props){
    super();
  }
  render(){
    return(
      <footer className="footer">
        © 2019 Foosball Ranking System
      </footer>
    )
  }
}

module.exports = Footer;