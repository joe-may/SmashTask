/* eslint-disable default-case */
import React, { Component } from 'react'
const Context = React.createContext()

const reducer = (prevState,action)=>{
    switch(action.type){
        case "TOGGLE":
        return{todos: prevState.todos.map(t => { if (t.id === action.payload) {t.complete = 
             !t.complete}; return t  }) }
    default:
    return prevState
    }

}


export class Provider extends Component {
    state={
        todos:[
         {id:1,
         title:"check emails",
         complete:false
        },
        {id:2,
         title:"check voicemail",
         complete: false
        },
         {id:3,
            title:"check bank account",
           complete:false
        }
      ],
      dispatch:(action)=>this.setState(prevState => reducer(prevState,action))
    }
    render() {
        return (
            <div>
                <Context.Provider value={this.state}>
                    {this.props.children}
                </Context.Provider>
            </div>
        )
    }
}

export const Consumer = Context.Consumer
