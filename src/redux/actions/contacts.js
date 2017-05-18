import { createAction } from 'redux-actions'
import ACTIONS from '../constants/contacts'

const getContactsSuccess = createAction(
  ACTIONS.GET_CONTACTS, (contactsProps = {}) => contactsProps
)
const allContactsActions = (dispatch) => ({
  getContacts: () => {
//                const contacts =  {contacts:[{Email: 'jrogers@burlington.com', Id: 'c123456788',  Name: 'Jack Rogers', Title: 'VP, Facilities'},{Email: 'jrogers1@burlington.com', Id: 'c123456785',  Name: 'Jack1 Rogers1', Title: 'VP1, Facilities1'}],Id: 'a12345678', Status: 'Success'}
var wh = new SObjectModel.myAccount();
  console.log(JSON.stringify(wh));

        wh.retrieve({ limit: 10 }, function(err, records, event){
            if(err) {
                alert(err.message);
            }
            else {

                console.log(JSON.stringify(records));
                debugger

            }
        });

    dispatch(getContactsSuccess(contacts))
  }
})
export default allContactsActions
