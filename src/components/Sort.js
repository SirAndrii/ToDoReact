import React, { useEffect } from 'react';

export default class Sort extends React.Component{
    constructor(props){
        super(props);
        this.state={value: 'default', show: 'All'};
        this.handleChange=this.handleChange.bind(this);
    }
handleChange(event){
    
    let doc = event.target;
    if (doc.id==='sortNodes'){
        this.setState({value: doc.value});
        this.props.onSort(doc.value );
    }else if (doc.id==='showNodes') {
        this.setState({show: doc.value});
        this.props.onShow(doc.value);
    }
    //Почему если запросить потом this.value - получим предыдущее значение, state же обновился?
    
}
    
render(){
    return (
    <div className="todo_sort glass">
    <span>Tasks to Do</span>

      <label>Sort by:
        <select id="sortNodes" value={this.state.value} onChange={this.handleChange}>
          <option value="default">default</option>
          <option value="name">name</option>
          <option value="completence">completence</option>
          {/* <option>date</option> */}
        </select>
      </label>
      <label>Show:
        <select id="showNodes" value={this.state.show} onChange={this.handleChange}>
          <option value='all'>all</option>
          {/* <option>today</option>
          <option>tomorrow</option>
          <option>week</option>
          <option>endless</option> */}
          <option  value='completed'>completed</option>
          <option  value='uncompleted'>uncompleted</option>
          {/* <option>missed</option> */}
        </select>
      </label> 
    </div>

    );
}
}