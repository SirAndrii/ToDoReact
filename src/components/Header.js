import React from "react";

const Header = (props) => {
    document.title = props.title;
    return (
        <div className="todo_header glass">
            <h2>{props.title}</h2>
        </div>
    );
}
export {Header};