import React, { Component } from 'react'
import { Consumer } from '../context'

export default class Addtodo extends Component {
    state = {
        id: 4,
        title: "",
        complete: false
    }
    update=(e)=>{
        this.setState({
            title: e.target.value
        })

    }
    add=(dispatch, e)=>{
        e.preventDefault()
        const newTodo = this.state
        dispatch({type:"ADD", payload:newTodo})
    }
    render() {
        return (
        <Consumer>{value=>{
            const {dispatch} = value 
            return  <form onSubmit={this.add.bind(this, dispatch)}>
            <input type="text" className="form-control rounded-0" placeholder="write your todo here
            ... " onChange={this.update} value={this.state.value}/>
            <button className="form-control rounded-0 btn-secondary" type="submit"> Add todo</button>
        </form>
        }}</Consumer>
        
        )
    }
}
