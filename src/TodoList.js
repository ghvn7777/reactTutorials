import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
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
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}> submit </button>
                </div>

                <ul>
                    { this.getTodoItem() }
                </ul>
            </Fragment>
        )
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                    <TodoItem
                        key={index}
                        content={item}
                        index={index}
                        deleteItem={this.handleItemDelete}
                    />
            )
        })
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState(() => ({
                inputValue: value
        }));
    }

    handleBtnClick(e) {
        if (this.state.inputValue) {
            this.setState((prevState) => ({
                list: [...prevState.list, prevState.inputValue],
                inputValue: ''
            }));
        }
    }

    handleItemDelete(index) {
        this.setState(() => {
            const list = [...this.state.list];
            list.splice(index, 1);
            return {list}
        });
    }
}

export default TodoList;