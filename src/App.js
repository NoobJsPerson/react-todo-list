import { useState } from 'react';
import './App.css';

function Task({ task, taskList, setTaskList}) {

	function handleDelete() {
		const newTaskList = taskList.toSpliced(task.id, 1);
		for(let i = task.id; i < newTaskList.length; i++) {
			newTaskList[i].id--;
		}
		setTaskList(newTaskList);
	}

	return (
		<div className="task">
			<p>{task.description}</p>
			<button className="delete-button" onClick={handleDelete}>Delete</button>
		</div>
	)
}

function TaskList({taskList, setTaskList}) {
	const taskEls = taskList.map(x => <Task task={x} taskList={taskList} setTaskList={setTaskList} key={x.id}/>)
	return (
		<div id="task-list">
			{taskEls}
		</div>
	)
}

function App() {
	const [taskList, setTaskList] = useState([]);


	function handleClick() {
		const input = document.getElementById("task-input");
		const newTaskList = [...taskList, {description: input.value, id: taskList.length}];
		setTaskList(newTaskList);

	}

	return (
		<div>
			<h1>React Todo List</h1>
			<input id="task-input" type="text"></input>
			<button onClick={handleClick}>Add Task</button>
			<TaskList taskList={taskList} setTaskList={setTaskList}/>
		</div>
	);
}

export default App;
