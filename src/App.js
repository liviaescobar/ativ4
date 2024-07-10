import React, { useState, useCallback } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = useCallback(() => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  }, [newTask, tasks]);

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Digite uma nova tarefa..."
      />
      <button onClick={addTask}>Adicionar Tarefa</button>
      
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
