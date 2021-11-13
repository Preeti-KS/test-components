import { useState } from "react"
import styled from "styled-components"
import Switch from "../components/Switch"

const FlagContainer = styled.span`
    display: flex;
    align-items: center;
`

function SwitchHome() {
    const [flag1, setFlag1] = useState(false)
    const [flag2, setFlag2] = useState(false)
    const [flag3, setFlag3] = useState(false)
    const [flag4, setFlag4] = useState(false)

    function onChange1(value: boolean) {
        setFlag1(value)
    }
    function onChange2(value: boolean) {
        setFlag2(value)
    }
    function onChange3(value: boolean) {
        setFlag3(value)
    }
    function onChange4(value: boolean) {
        setFlag4(value)
    }

    console.log("flags", {
        flag1,
        flag2,
        flag3,
        flag4,
    })

    return (
        <div className="main-container">
            <FlagContainer>
                Flag 1: <Switch onChange={onChange1}></Switch>
            </FlagContainer>
            <FlagContainer>
                Flag 2: <Switch onChange={onChange2}></Switch>
            </FlagContainer>
            <FlagContainer>
                Flag 3: <Switch onChange={onChange3}></Switch>
            </FlagContainer>
            <FlagContainer>
                Flag 4: <Switch onChange={onChange4}></Switch>
            </FlagContainer>
        </div>
    )
}

export default SwitchHome
