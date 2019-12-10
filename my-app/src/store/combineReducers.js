import {combineReducers} from 'redux';
import isLogin from './reducer/isLogin';
export default combineReducers({
    isLogin, // 是否登录
});
