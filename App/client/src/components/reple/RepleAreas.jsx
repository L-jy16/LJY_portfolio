import React, { useState } from 'react'

import RepleList from './RepleList'
import RepleWrite from './RepleWrite'

const RepleAreas = ({ position }) => {
  // 모바일
  const [active, setActive] = useState("")

  const MbtnHandle = (e) => {
    e.preventDefault();
    setActive("active")
  }

  const MbtnCloseHandle = (e) => {
    e.preventDefault();
    setActive("")
  }

  return (
    <div className={active === "" ? "reple" : "reple active"}>
      <div className="mobile_reple">
        <div className={`Mbtn ${active}`}>
          <button className='comment_btn' onClick={(e) => MbtnHandle(e)} >
            comment
          </button>
          <button className='comment_close' onClick={(e) => MbtnCloseHandle(e)} >
            close
          </button>
        </div>

      </div>
      {/* <RepleList position={position} submitHandler={submitHandler} />
      <RepleWrite position={position} submitHandler={submitHandler} setReple={setReple} setNickName={setNickName} setPassword={setPassword} /> */}

      <RepleList position={position} />
      <RepleWrite position={position} />

    </div>
  )
}

export default RepleAreas