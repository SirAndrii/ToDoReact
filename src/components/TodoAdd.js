import React,{useState} from "react";



function TodoAdd ({onCreate})
{
    const [value,setValue] = useState('');
    const styles={
        inputTask:{
           // width:'0px',
            //opacity:'0',
            paddingLeft:'0px'
        },
        inputDate:{
            //width:'0px', opacity:'0'
        },
        imgCalendar:{
            height:'32px', display:'none'
        }
    }
    function submitHandler (event) {
        event.preventDefault();
        if (value.trim()) {
            onCreate( value );
            setValue('');
        }
        //return; не сработает
    }
return(
    <form className="todo_form" onSubmit={submitHandler}>
        <span>Task: </span>
        <input 
            type="text" id="taskName" 
            placeholder="Put task name" 
            data-width="200px"
            style={styles.inputTask}
            value = {value}
            onChange = {(event)=>setValue(event.target.value)}
        />
        <img src="calendar.png" alt="calendar" id="calendarImg" style={styles.imgCalendar}/>
        <input type="date" step="1" data-width="100px" style={styles.inputDate} id="calendar"
          pattern="\d{2}-\d{2}-\d{2}"/>
        <button id="addTask" name="expand" type="submit">➕</button>
    </form>
);
}

export default TodoAdd