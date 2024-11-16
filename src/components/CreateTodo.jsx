import React, {useState} from 'react';

function addTodo(title, description){
  
  fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Specify the format
    },
    body: JSON.stringify({
      title: title,
      desc: description,
    }),
  })
    .then(function (response) { return response.json()})
    .then(()=> {alert("Todo added!")} )



}

function CreateTodo() {

  const [title, Settitle] = useState("");
  const [description, Setdescription] = useState("");

  return (
    <div>
      <input type="text" style={{padding: 10, margin: 10}} placeholder="title" name="title" value={title}    onChange={(e) => Settitle(e.target.value)} />
      <input type="text" style={{padding: 10, margin: 10}}  placeholder="description" name='description'  value={description} onChange={(e) => Setdescription(e.target.value)}  />
      <button onClick={() => addTodo(title, description)}>Add a Todo</button>
    </div>
  );
}

export default CreateTodo;
