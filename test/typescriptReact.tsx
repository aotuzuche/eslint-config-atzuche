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

  ts(a1, a2, a3, a4) {
    console.log(a1, a2, a3, a4)
  }

  render() {
    const { name } = this.props
    const { age } = this.state

    return <div>{`${name}${age}`}</div>
  }
}

export default Demo
