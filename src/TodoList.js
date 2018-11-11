import React, { Component, Fragment } from 'react'
import './style.css'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
    }

    render() {
        return (
            <Fragment>
                { /*dangerouslySetInnerHTML={{__html: item}}*/ /* 在 li 标签里加这个，作用是不自动转义，例如 <h1>，下面的 item 可以去掉 */ }
                <div>
                    <label htmlFor="insertArea">input: </label>
                    <input
                        id="insertArea"
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleBtnClick.bind(this)}> submit </button>
                </div>

                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={this.handleItemDelete.bind(this, index)}>{item}
                                </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })

    }

    handleBtnClick(e) {
        if (this.state.inputValue) {
            this.setState({
                list: [...this.state.list, this.state.inputValue],
                inputValue: ''
            })
        }
    }

    handleItemDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);

        this.setState({
            list: [...list]
        })
    }
}

export default TodoList;