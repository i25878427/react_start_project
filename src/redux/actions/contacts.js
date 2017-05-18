import { createAction } from 'redux-actions'
import ACTIONS from '../constants/contacts'

const getContactsSuccess = createAction(
  ACTIONS.GET_CONTACTS, (contactsProps = {}) => contactsProps
)
const allContactsActions = (dispatch) => ({
  getContacts: () => {
//                const contacts =  {contacts:[{Email: 'jrogers@burlington.com', Id: 'c123456788',  Name: 'Jack Rogers', Title: 'VP, Facilities'},{Email: 'jrogers1@burlington.com', Id: 'c123456785',  Name: 'Jack1 Rogers1', Title: 'VP1, Facilities1'}],Id: 'a12345678', Status: 'Success'}

    debugger
    var aaa = document.getElementById('myAccountsField')
    console.log("doc: " + aaa.value)
    debugger
    dispatch(getContactsSuccess(contacts))
  }
})
export default allContactsActions
