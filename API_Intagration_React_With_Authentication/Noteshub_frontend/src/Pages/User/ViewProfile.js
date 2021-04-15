import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import CustomButton from '../../components/ui/Button';
import { getUserProfile, setUserProfile } from '../../redux-saga/redux/User/userSlice';

const ViewProfile = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    const profile = useSelector((state) => state.userReducer.userProfile);

    useEffect(()=>{
        dispatch(getUserProfile(id))
    }, [])

    useEffect(()=>{
        if(profile){
            dispatch(setUserProfile(profile))
        }
    }, [profile, dispatch])

    return (
      <div className="container py-3">
        <div className="card border-0 shadow">
          <div className="card-header">
            <h4>Profile</h4>
          </div>
          {profile && (
            <div className="card-body">
              <Link to={`/editprofile/${profile._id}`}>
                <CustomButton
                  label="Edit Profile"
                  className="btn btn-primary float-right"
                />
              </Link>
              <p>
                Thanks for showing interest in NOTESHUB. Update your profile
                just clicking on the button
              </p>
              <p>Name : {profile.name}</p>
              <p>Email : {profile.email}</p>
              <p>Age : {profile.age} Years old</p>
            </div>
          )}
        </div>
      </div>
    );
}

export default ViewProfile
