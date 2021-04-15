import { call, put , takeLatest} from "redux-saga/effects";
import { loginRequest } from "../../../API/apiClient";
import { loggedIn, setIsLoggedIn } from "../../redux/User/userSlice";

function* handleLoginRequest(action){
    try {
        let res = yield call(loginRequest, action.payload)
        // console.log(res.data);
        //Set auth token in localstorage
        if(res.data.success){
            localStorage.setItem("authtoken", res.headers.authtoken);
            localStorage.setItem("user_id", res.data.data._id);
            localStorage.setItem("name", res.data.data.name);
            const payload = {
                status: true,
                user_id: res.data.data._id,
                name: res.data.data.name
            }
            yield put(setIsLoggedIn(payload));
        }else{
            const payload = {
                status: true,
                user_id: null
            }
            yield put(setIsLoggedIn(payload));
        }
    } catch (error) {
        console.log(error);
    }
}

function* watcherUserLogin() {
    yield takeLatest(loggedIn.type, handleLoginRequest);
}

export default watcherUserLogin;