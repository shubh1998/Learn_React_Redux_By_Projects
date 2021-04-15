import { call , takeLatest} from "redux-saga/effects";
import { logoutRequest } from "../../../API/apiClient";
import { logOut } from "../../redux/User/userSlice";


function* handleLogoutRequest(){
    try {
        yield call(logoutRequest)
    } catch (error) {
        console.log(error);
    }
}

function* watcherUserLogout() {
    yield takeLatest(logOut.type, handleLogoutRequest);
}

export default watcherUserLogout;