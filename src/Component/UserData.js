import React from 'react'

function UserData({users}) {
  return (
    <>
        {
            users.map((CurrUser)=>{
                const {id,name,email}=CurrUser;
                const{street,city,zip}=CurrUser.address;
                return(
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{street}</td>
                    </tr>
                )
            })
        }
    </>
  )
}

export default UserData