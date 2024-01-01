import React from 'react';
import authorImage from '../../../../../public/image/userImage.png'

const UserProfile = () => {
    return (
        <div className=''>
             {/* userprofile */}
             <div className='userProfile'>
          <div className="userImage">
          <img alt="UserImage" src={authorImage}  />
        </div>
          <div>
                <h3 >David John </h3>
                <p className='Checker'>Available</p>
            </div>
            </div>
        </div>
    );
};

export default UserProfile;