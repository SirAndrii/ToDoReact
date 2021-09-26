import React from "react";
import {TodoItem} from "./TodoItem"

function TodoList (props){
    /* console.log(props.data.filter(props.filter)) */
    return (
        <div className="todo_list">
            {
                props.data.filter(props.filter).map ( (todo,index) => {
                    return (<TodoItem 
                        todo={todo} 
                        key={todo.id} 
                        index={index}
                        changeCheck={props.onToggle}
                        />)
                })
            }
        </div>
    );
}
export {TodoList}