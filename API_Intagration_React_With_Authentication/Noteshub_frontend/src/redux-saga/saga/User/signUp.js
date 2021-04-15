import { call , takeLatest} from "redux-saga/effects";
import { signUpUser } from "../../redux/User/userSlice";
import {signUpRequest} from '../../../API/apiClient'

function* handleNewSignUpRequest(action){
    try {
        yield call(signUpRequest, action.payload)
    } catch (error) {
        console.log(error);
    }
}

function* watcherNewUserSignup() {
    yield takeLatest(signUpUser.type, handleNewSignUpRequest);
}

export default watcherNewUserSignup;