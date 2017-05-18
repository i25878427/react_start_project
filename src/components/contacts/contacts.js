import React, {Component} from 'react';
import Contact from './contact'

class Contacts extends Component {

  componentDidMount(){
    debugger
    const {getContacts}  = this.props
    getContacts()
  }

  componentWillReceiveProps(nextProps){
    debugger
  }

  renderContacts(contacts){

    const keys = Object.keys(contacts)
    debugger
  }

  render() {
    const { contacts } = this.props
    return (
      <div>
      dddaaaaadddwww
      </div>
    );
  }

}

export default Contacts;
