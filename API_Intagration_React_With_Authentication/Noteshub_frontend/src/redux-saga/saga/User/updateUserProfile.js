import { call , takeLatest} from "redux-saga/effects";
import { updateUserProfileRequest } from "../../../API/apiClient";
import { updateUserProfile } from "../../redux/User/userSlice";

function* handleUpdateProfileRequest(action){
    try {
        console.log(action.payload);
        yield call(updateUserProfileRequest, action.payload)
    } catch (error) {
        console.log(error);
    }
}

function* watcherUserUpdateProfile() {
    yield takeLatest(updateUserProfile.type, handleUpdateProfileRequest);
}

export default watcherUserUpdateProfile;