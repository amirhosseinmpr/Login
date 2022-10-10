/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const detailsStyles = 'flex items-center justify-center pt-5 text-lg font-bold'
const UserInfo = ({ name, image, lastName, username, email }) => {
    return <div className='border rounded-lg px-10 py-5 bg-white mx-5 my-5'>
        <span>
            <img src={image} />
        </span>
        <div className={detailsStyles}>
            <div>{name}</div><div className='pr-5'>{lastName}</div>
        </div>
        <div className={detailsStyles}>
            <div>{username}</div><div className='pr-5'>{email}</div>
        </div>
    </div>
}

export default UserInfo
