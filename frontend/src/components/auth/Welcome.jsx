import React from 'react'
import "./login/Login";
import profile from './../../img/profile.svg'
import "./register/Register"

const Welcome = () => {
  return (
        <div className="login-welcome">
                <div className="contents">
                    <div className="flex flex-row justify-center">
                        <img src={profile} alt="" style={{ height: '240px'}}/>
                    </div>
                    <div className="flex flex-row pt-10 h-fit items-center ">
                        <p className='text-white text-lg'>Welcome to our Bug Tracking System!
                            We're thrilled to have you on board.
                            This platform will streamline issue reporting,
                            prioritize resolutions,
                            and foster seamless collaboration among our development team.
                            Together, we'll create even more robust and reliable software.
                            Happy bug hunting!
                        </p>
                    </div>
                </div>
            </div>
  )
}

export default Welcome