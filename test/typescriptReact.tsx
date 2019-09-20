import React, { PureComponent } from 'react'

interface IState {
  age: number
}

interface IProps {
  name: string
}

class Demo extends PureComponent<IProps, IState> {
  state: IState = {
    age: 18,
  }

  render() {
    const { name } = this.props
    const { age } = this.state

    return <div>{`${name}${age}`}</div>
  }
}

export default Demo
