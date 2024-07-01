import { useState } from 'react';
import './App.css';

function Task({ description }) {
	return (
		<div className="task">
			<p>{description}</p>
		</div>
	)
}

function TaskList({taskList}) {
	const taskEls = taskList.map(x => <Task description={x}/>)
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
		const newTaskList = [...taskList, input.value];
		setTaskList(newTaskList);

	}

	return (
		<div>
			<h1>React Todo List</h1>
			<input id="task-input" type="text"></input>
			<button onClick={handleClick}>Add Task</button>
			<TaskList taskList={taskList}/>
		</div>
	);
}

export default App;
