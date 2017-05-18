import { connect } from 'react-redux'
import Contacts from '../../components/contacts/contacts'
import contactsActions from '../../redux/actions/contacts'

function mapStateToProps (state) {

  return ({ ...state })
}

const mapDispatchToProps = (dispatch) => {
  const allContactsActions = contactsActions(dispatch)
  const getContacts = () => {
    debugger
    allContactsActions.getContacts()
  }
  return {
    getContacts
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
