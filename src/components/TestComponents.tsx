import React, { Component } from "react"

type TestCompProps = {
    count?: number
}

type State = {
    count: number
}

class TestComponent extends Component<TestCompProps, State> {
    constructor(props: TestCompProps) {
        console.log("calls constructor")
        super(props)
        this.state = {
            count: 0,
        }
    }

    componentDidMount() {
        console.log("TestComponent.componentDidMount")
    }

    componentDidUpdate() {
        console.log("TestComponent.componentDidUpdate")
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button
                    onClick={() =>
                        this.setState({ count: this.state.count + 1 })
                    }
                >
                    Button
                </button>
            </div>
        )
    }
}

export default TestComponent
