import React, {useEffect, useState} from "react";
import {Header} from './components/Header'
import TodoAdd from "./components/TodoAdd";
import {TodoList} from './components/TodoList'
import Context from './context'
import Sort from './components/Sort'

function App() {
  
  const [data,setData] = useState([]);//useState всегда возвращает массив!
  const [loading,setLoader] = useState(true);
  const [filter, setFilter] = useState('all');
  const FILTER_MAP = {
    all: () => true,
    uncompleted: (el) => !el.completed,
    completed: (el) => el.completed
  };

  useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/todos?_limit=5`)
          .then(response => response.json())
          .then(json => setData(json))
          .then(()=>setLoader(false))

      return (() => {
              console.log('unmounted')
          }); //unmount
  },[]);

function sorting(sortOption) {
    console.log(sortOption);
    if (sortOption === 'default') {
      setData(  [...data].sort((a, b) => (a.id - b.id)) );
    } else if (sortOption === 'completence') {
      setData(  [...data].sort((a, b) => (a.completed - b.completed)) ); 
    }
    else if (sortOption === 'name') {
    let sortedRows = [...data].sort((a, b) => {
        let aName = a.title.toUpperCase();
        let bName = b.title.toUpperCase();
        if (aName > bName) {
            return 1;
        } else if (aName < bName) {
            return -1;
        } else {
            return 0;
        }
    });
    setData(sortedRows);
    }
}



/* function show (showOption){
  setFilter(showOption)
}
 */ 

 function toggleTodo (id) {
    //Єтот способ мне не нравится, потому, что перерисоввается весь список, а не отдельный элемент
    setData(
      data.map(
        (todo) => { 
          if (todo.id===id){ todo.completed = !todo.completed;}
          return todo;//возвращаем каждый элемент
        }
      )
    );    
  }

  function removeTodo(id){
    setData(
      data.filter( (todo)=> todo.id !== id)
    );
  }

  function addTodo (title){
    setData(
      [...data, {id: +Date.now(), title:title, completed: false}]
    )

    
    
  }
  return (
    <React.Fragment>
      <Context.Provider value={ {removeTodo: removeTodo} }> {/* провайдер моет передавать что угодно, в даном случае объект с функцией */}
        <Header title="Welcome to ToDo on React"/>
          <TodoAdd onCreate={addTodo} />

        {data.length>0 ?(<>
         <Sort onSort={sorting} onShow={(showOption) => {setFilter(showOption)}}/> 
         <TodoList data={data} filter={FILTER_MAP[filter]} onToggle={toggleTodo}/> 
         </>
         ) : (
          loading ? <p>Data is Loading</p> :<p>NO TODOS</p>
         )
        }
         
        </Context.Provider>
    </React.Fragment>
  );
}

export default App;
