


function addTodo(todo){

    const url = 'http://localhost:3000/completed'; // API endpoint
    const data = {
        id: todo._id
        
    };
    
    fetch(url, {
        method: 'PUT', // Specify the HTTP method
        headers: {
            'Content-Type': 'application/json' // Indicate the data format
        },
        body: JSON.stringify(data) // Send the data as a JSON string
    })
        .then(function(response) {
           
            return response.json(); // Parse JSON response
        })
        .then(
        )
       
    


}
function Todos({todos}){
    return <div>
            {todos.map(function(todo, index){
                return <div key={index}>
                    <h2>{todo.title}</h2>
                    <h4>{todo.desc}</h4>
                    <button onClick={()=> addTodo(todo)}>{todo.completed === false ? "mark as completed": "completed"}</button>
                </div>
            })}
        </div>
    
}

export default Todos;