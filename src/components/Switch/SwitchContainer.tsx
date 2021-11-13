import styled from "styled-components"

const SwitchContainer = styled.div<{ state: boolean }>`
    --height: 2.5rem;
    height: var(--height);
    border-radius: calc(var(--height) / 2);
    width: calc(var(--height) * 2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    margin: 0.25rem;

    ${(props) => props.state && `flex-direction: row-reverse;`}

    background-color: ${(props) =>
        props.state ? `rgb(156 234 133)` : `#e72106`};
`

export default SwitchContainer
