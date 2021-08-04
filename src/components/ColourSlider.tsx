import { useCallback, useState } from "react"
import styled from "styled-components"

const ColourSliderResultContainer = styled.div`
    width: 820px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
`

const ResultText = styled.div`
    font-weight: bold;
`

const ColourSliderContainer = styled.div``

const ColourSliderInput = styled.input`
    margin: 13px;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`

const AppContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

function ColourSlider() {
    const [red, setRed] = useState(255)
    const [green, setGreen] = useState(255)
    const [blue, setBlue] = useState(255)

    const backgroundColor = `rgb(${red}, ${green}, ${blue})`
    const textColor = `rgb(${255 - red}, ${255 - green}, ${255 - blue})`

    const handleRedChange = useCallback((e) => {
        const val = parseInt(e.target.value)
        setRed(val)
    }, [])
    const handleGreenChange = useCallback((e) => {
        const val = parseInt(e.target.value)
        setGreen(val)
    }, [])
    const handleBlueChange = useCallback((e) => {
        const val = parseInt(e.target.value)
        setBlue(val)
    }, [])

    return (
        <Container>
            <AppContainer>
                <ColourSliderResultContainer style={{ backgroundColor }}>
                    <ResultText style={{ color: textColor }}>
                        {backgroundColor}
                    </ResultText>
                </ColourSliderResultContainer>
                <ColourSliderContainer>
                    <label>RED</label>
                    <ColourSliderInput
                        type="range"
                        onChange={handleRedChange}
                        value={red}
                        min="0"
                        max="255"
                    ></ColourSliderInput>
                    <label>GREEN</label>
                    <ColourSliderInput
                        type="range"
                        onChange={handleGreenChange}
                        value={green}
                        min="0"
                        max="255"
                    ></ColourSliderInput>
                    <label>BLUE</label>
                    <ColourSliderInput
                        type="range"
                        onChange={handleBlueChange}
                        value={blue}
                        min="0"
                        max="255"
                    ></ColourSliderInput>
                </ColourSliderContainer>
            </AppContainer>
        </Container>
    )
}

export default ColourSlider
