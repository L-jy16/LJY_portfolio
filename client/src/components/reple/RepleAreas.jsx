import React, { useState } from 'react'
import RepleList from './RepleList'
import RepleWrite from './RepleWrite'
import axios from 'axios'

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
  return (
    <>
      <RepleList position={position} submitHandler={submitHandler} />
      <RepleWrite position={position} submitHandler={submitHandler} setReple={setReple} setNickName={setNickName} setPassword={setPassword} />
    </>
  )
}

export default RepleAreas