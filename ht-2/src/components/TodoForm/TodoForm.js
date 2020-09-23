import React, { Component } from 'react';
import "./TodoForm.css"

export default class TodoForm extends Component {

    state = {
        id: Date.now(),
        title: '',
        isDone: false
    }

    change = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    clearInput = ()=> {
        this.setState({
            title: ""
        })
    }

    render() {
        return (
            <form className="form">
                <input className="input" type="text" value={this.state.title} onChange={this.change}></input>
                <input type="submit" value="Add task" className="add-btn" onClick={(e)=> {
                    this.props.onAddBtn(this.state);

                    e.preventDefault();
                    this.clearInput();
                }}></input>
            </form>
        )
    }
}
