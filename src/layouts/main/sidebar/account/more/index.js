import React from 'react'
import { useAccounts } from '../../../../../store/auth/hooks'
const More = () => {
    const accounts = useAccounts();
  return (
    <div>{accounts.map((account)=>(
        <button className='py-3 px-4 flex text-left hover:bg-[#eff3f41a] w-full transition-colors'>
        <img
            src={account.avatar}
            className="w-10 h-10 rounded-full"
        />
      <div className="mx-3 text-[15px]">
        <h6 className="font-bold leading-[20px]">{account.fullName}</h6>
        <div className=" text-[#71767b]">@{account.username}</div>
      </div></button>
    ))}</div>
  )
}

export default More