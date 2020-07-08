import {combineReducers} from 'redux';
import auth from './auth';
import home from './home'
import admin from './admin';
import book from './book';
import genre from './genre';
export default combineReducers({auth,
home,
admin,
book,
genre
})