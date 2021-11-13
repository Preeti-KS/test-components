import styled from "styled-components"

const Circle = styled.span`
    display: inline-block;
    background-color: whitesmoke;
    height: calc(var(--height) - 0.5rem);
    width: calc(var(--height) - 0.5rem);
    margin: 0.25rem;
    border-radius: calc((var(--height) - 0.5rem) / 2);
    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.1);
`

export default Circle
