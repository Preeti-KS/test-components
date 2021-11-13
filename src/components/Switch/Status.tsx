import styled from "styled-components"

const Status = styled.span<{ state: boolean }>`
    display: inline-block;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-right: 0.5rem;

    ${(props) =>
        props.state &&
        `margin-right: 0rem;
        margin-left: 0.5rem;`}
`
export default Status
