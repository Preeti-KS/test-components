import { useState } from "react"
import styled from "styled-components"

const DropDownContainer = styled.div`
    //padding: 2 rem;
    width: 16rem;
`

const DropDownHeader = styled.button`
    margin-left: 0px;
    margin-top: 10px;
    width: 100%;
    height: 25px;
    border-radius: 3px;
    border-width: 1px;
    border-style: solid;
    border-color: grey;
    cursor: pointer;
`
const List = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0px;
    /* padding-left: 1em; */
    background: white;
    border: 2px solid #e5e5e5;
    box-sizing: border-box;
    color: #050708;
    font-size: 1.2rem;
    font-weight: 400;
    display: flex;
    flex-direction: column;
`

const Option = styled.li`
    cursor: pointer;
    /* margin-left: 135px; */
    display: flex;
    justify-content: center;
    padding: 0.1rem;
    border: black;
    border-top: 1px solid #ddd;

    &:first-child {
        border-top: none;
    }
`

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false)
    const toggling = () => setIsOpen(!isOpen)

    const [selectedOption, setSelectedOption] = useState("Select option --")

    const onOptionClickHandler = (value: any) => {
        setSelectedOption(value)
        setIsOpen(false)
    }

    const options = [
        {
            value: "option1",
            label: "Option 1",
        },
        {
            value: "option2",
            label: "Option 2",
        },
        {
            value: "option3",
            label: "Option 3",
        },
    ]
    return (
        <DropDownContainer>
            <DropDownHeader onClick={toggling}>{selectedOption}</DropDownHeader>
            {isOpen && (
                <List>
                    {options.map((option) => {
                        return (
                            <Option
                                id={option.value}
                                onClick={() =>
                                    onOptionClickHandler(option.label)
                                }
                            >
                                {option.label}
                            </Option>
                        )
                    })}
                </List>
            )}
        </DropDownContainer>
    )
}

export default Dropdown
