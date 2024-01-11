import React, {  useState } from 'react';


const RepleMoblie = () => {
    //  active 부분
    const [mcoment, setMcoment] = useState(false);
    const [active, setActive]  = useState("")

    const MbtnHandle = (e) => {
        e.preventDefault(e);
        setMcoment(!mcoment)
        if(mcoment){
            setActive("active")
        } else {
            setActive("")
        }
    }


    return (
        <div className="mobile_reple">
            <button
                className={`Mbtn ${active}`}
                onClick={(e) => MbtnHandle(e)}
            >
                {mcoment !== true ? "close" : "comment"}
            </button>
           
        </div>
    )
}

export default RepleMoblie