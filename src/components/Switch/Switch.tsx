import { useCallback, useState } from "react"
import Circle from "./Circle"
import Status from "./Status"
import SwitchContainer from "./SwitchContainer"

type SwitchProps = {
    // checked: boolean
    // color: string
    // disabled: boolean
    onChange: (currentState: boolean) => void
}
const Switch = (props: SwitchProps) => {
    const { onChange } = props
    const [state, setState] = useState(false)

    const statusText = state ? "On" : "Off"

    const handleClick = useCallback(() => {
        setState((prevState) => {
            const newState = !prevState
            if (onChange) {
                onChange(newState)
            }

            return newState
        })
    }, [])

    return (
        <SwitchContainer state={state} onClick={handleClick}>
            <Circle />
            <Status state={state}>{statusText}</Status>
        </SwitchContainer>
    )
}

export default Switch
