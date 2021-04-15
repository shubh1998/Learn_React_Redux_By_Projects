import { call, put , takeLatest} from "redux-saga/effects";
import { fetchUserProfileRequest } from "../../../API/apiClient";
import { getUserProfile, setUserProfile } from "../../redux/User/userSlice";

function* handleGetProfileRequest(action){
    try {
        if(action.payload){
            let response = yield call(fetchUserProfileRequest, action.payload)
            if(response.data.success){
                yield put(setUserProfile(response.data.data));
            }
        }
    } catch (error) {
        console.log(error);
    }
}

function* watcherUserProfile() {
    yield takeLatest(getUserProfile.type, handleGetProfileRequest);
}

export default watcherUserProfile;