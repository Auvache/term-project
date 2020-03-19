import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px solid black',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '}
                    {title} 
                    <button onClick={this.props.deleteTask.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#ffffff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
