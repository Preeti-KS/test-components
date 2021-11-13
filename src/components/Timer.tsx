import { MutableRefObject, useEffect, useRef, useState } from "react"

type TimerProps = {
    time: number
}

const Timer = (props: TimerProps) => {
    const [time, setTime] = useState(props.time)
    const [isActive, setActive] = useState(false)

    const timerRef = useRef<any>()

    function clearTimer() {
        clearInterval(timerRef.current)
        timerRef.current = null
    }
    function handlerOnReset() {
        setTime(10)
        setActive(false)
        clearTimer()
    }

    function handlerOnStartAndPause() {
        setActive((prevIsActive) => {
            const newIsActive = !prevIsActive

            if (newIsActive) {
                if (timerRef.current) {
                    clearTimer()
                }
                timerRef.current = setInterval(() => {
                    console.log(isActive)
                    setTime((prevtime) => {
                        if (prevtime <= 0) {
                            clearTimer()
                            return prevtime
                        }
                        return prevtime - 1
                    })
                }, 1000)
            } else {
                clearTimer()
            }

            return newIsActive
        })
    }

    // useEffect(() => {
    //     console.log(isActive)

    // }, [isActive])
    const divRef = useRef<HTMLDivElement>(
        null
    ) as MutableRefObject<HTMLDivElement | null>

    useEffect(() => {
        console.log(divRef)
    }, [])

    return (
        <div
            ref={(divElement) => {
                if (divRef) {
                    divRef.current = divElement
                }
            }}
            className="container"
        >
            <h1 id="timer">{time}</h1>
            <button onClick={handlerOnStartAndPause}>
                {isActive ? "Pause" : "Start"}
            </button>
            <button onClick={handlerOnReset}>Reset</button>
        </div>
    )
}

export default Timer
