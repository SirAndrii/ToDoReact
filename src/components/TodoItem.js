import React, {useContext} from "react";
import Context from '../context'

function TodoItem ({todo, index, changeCheck})  //знаем название пропса, поєтому пишем его в фигурных скобках
{  
    const {removeTodo} = useContext(Context) //полчуим функцию переданную объектом с обертки Context
    
    let divClass=['todo_item','glass'];
    todo.completed && divClass.push('completed');
    return (<>
        {
<div className={divClass.join(" ")} data-list-id={index} > 
    <input 
        type="checkbox" 
        defaultChecked={todo.completed ? "checked":""}
        onChange= {() => {return changeCheck(todo.id)}}
    />
        <div>
            {/*<span className="todo_item_time">${date?date:""}</span>*/}
            <span className="todo_item_text">{todo.title}</span>
            {/*<span className="todo_item_name">(${id})</span>*/}
        </div>
        <button data-delete="delete" onClick={() => removeTodo(todo.id)}>&times;</button>
        {/* нельзя onClick={removeTodo(todo.id)} - она запустится тогда сразу же. Почему?*/}
    </div>
        }
        </>
    );
}

export {TodoItem};