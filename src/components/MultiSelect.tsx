import { LanguageData } from "../pages/SelectLanguages"
import styled from "styled-components"
import { useCallback, useState } from "react"

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
`

const MainWrapper = styled.div`
    width: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`

const MultiSelectLanguage = styled.span`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    height: 32px;
    color: white;
    border: 1px solid #909090;
    border-radius: 100px;
    cursor: pointer;
    padding: 3px 16px;
    margin: 2px;
    &:hover {
        background-color: #181818;
    }
    &.selected {
        background-color: white;
        color: black;
    }
`

const Header = styled.h2`
    color: white;
    position: absolute;
    margin-top: -300px;
`

interface MultiSelectProps {
    options: LanguageData[]
    selectedOptions?: string[]
}
function MultiSelect(props: MultiSelectProps) {
    console.log("multi select props", props)
    const [selected, setSelected] = useState()
    const { options } = props

    const handlerOnClickLanguage = useCallback((option) => {
        setSelected(option.code)
    }, [])

    return (
        <MainContainer>
            <Header>Select your music languages</Header>
            <MainWrapper>
                {options.map((option) => {
                    return (
                        <MultiSelectLanguage
                            className={
                                option.code === selected ? "selected" : ""
                            }
                            onClick={() => handlerOnClickLanguage(option)}
                        >
                            {option.name}
                        </MultiSelectLanguage>
                    )
                })}
            </MainWrapper>
        </MainContainer>
    )
}

export default MultiSelect
