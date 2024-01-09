import React from 'react'

const RepleList = ({ position }) => {
    return (
        <div className={`reple_list ${position}`}>
            <div className="reple">
                <p className='reple_info'>댓글 내용 댓글 내용 댓글 내용</p>
                <div className='user_info'>
                    <span>지죤</span>
                    <em>2023.10.30</em>
                    {/* 최대글자수 10개 */}
                    <button className='modi'>수정</button>
                    <button className='del'>삭제</button>
                </div>
            </div>
            <div className="reple">
                <p>오늘은 하루 종일 비가 내렸다. 우산을 들고 걷는 사람들이 길가에 늘어섰고, 거리는 회색으로 물들었다. 강한 바람이 거리를 휘날리며 나뭇가지를 흔들었다. 사람들은 서둘러 걸어가며 비에 젖지 않기 위해 노력했다. 하지만 몇몇은 손을 내밀어 빗물을 만끽하기도 했다. 마치 자연이 우리에게 물을 선물하는 듯한 느낌이었다.</p>
                <div className='user_info'>
                    <span>지나가는느린보말단이</span>
                    <em>2023.10.30</em>
                    <button className='modi'>수정</button>
                    <button className='del'>삭제</button>
                </div>
            </div>
        </div>
    )
}

export default RepleList
