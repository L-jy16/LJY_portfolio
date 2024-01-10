import React, { useState } from 'react'
import axios from 'axios'

import RepleList from './RepleList'
import RepleWrite from './RepleWrite'

const RepleAreas = ({ position }) => {
  const [reple, setReple] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!reple || !nickName || !password) {
      return alert("모두 채워주세요.");
    }

    let body = {
      reple: reple,
      nickName: nickName,
      password: password,
    }

    axios.post("/api/reple/submit", body)
      .then((response) => {
        if (response.data.success) {
          alert("댓글 감사합니다 😊")
          setReple("")
          setNickName("")
          setPassword("")
        } else {
          alert("댓글이 작성되지 않았습니다.")
        }
      })
      .catch((err) => {
        console.log(err)
        alert("댓글 실패")
      })
  }

  // 모바일
  const [mcoment, setMcoment] = useState(true);
  const [active, setActive] = useState("")

  const MbtnHandle = (e) => {
    e.preventDefault();
    setMcoment(false)
    setActive("active")
  }

  const MbtnCloseHandle = (e) => {
    e.preventDefault();
    setMcoment(true)
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
      <RepleList position={position} submitHandler={submitHandler} />
      <RepleWrite position={position} submitHandler={submitHandler} setReple={setReple} setNickName={setNickName} setPassword={setPassword} />
    </div>
  )
}

export default RepleAreas