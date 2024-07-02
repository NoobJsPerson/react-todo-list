import { useState } from 'react';
import './App.css';

function Task({ task, taskList, setTaskList }) {

	function handleDelete() {
		const newTaskList = taskList.toSpliced(task.id, 1);
		for (let i = task.id; i < newTaskList.length; i++) {
			newTaskList[i].id--;
		}
		setTaskList(newTaskList);
	}

	function hanldeMoveUp() {
		console.log("move up");
		if(task.id === 0) return;
		const newTaskList = [...taskList];
		const temp = newTaskList[task.id - 1].title;
		newTaskList[task.id - 1].title = newTaskList[task.id].title;
		newTaskList[task.id].title = temp;
		setTaskList(newTaskList);
	}

	function hanldeMoveDown() {
		console.log("move down");
		if(task.id === (taskList.length - 1)) return;
		const newTaskList = [...taskList];
		const temp = newTaskList[task.id + 1].title;
		newTaskList[task.id + 1].title = newTaskList[task.id].title;
		newTaskList[task.id].title = temp;
		setTaskList(newTaskList);
	}

	return (
		<div className="task">
			<div>
				<button className='move-btn' onClick={hanldeMoveUp}>↑</button>
				<button className='move-btn' onClick={hanldeMoveDown}>↓</button>
			</div>
			<div className='subtask'>
				<p>{task.title}</p>
				<button className="delete-btn" onClick={handleDelete}>Delete</button>
			</div>
		</div>
	)
}

function TaskList({ taskList, setTaskList }) {
	const taskEls = taskList.map(x => <Task task={x} taskList={taskList} setTaskList={setTaskList} key={x.id} />)
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
		if (!input.value) return;
		const newTaskList = [...taskList, { title: input.value, id: taskList.length }];
		setTaskList(newTaskList);
		input.value = '';
	}

	function handleKeyDown(event) {
		if(event.key === "Enter") handleClick();
	}

	return (
		<div>
			<h1>React Todo List</h1>
			<input id="task-input" type="text" onKeyDown={handleKeyDown}></input>
			<button onClick={handleClick}>Add Task</button>
			<TaskList taskList={taskList} setTaskList={setTaskList} />
		</div>
	);
}

export default App;
