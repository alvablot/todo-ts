import { useEffect, useState } from "react";

import "./App.css";
import { useExampleContext } from "./contexts/Example";

function App() {
    const [id, setId] = useState<number>(1);
    const [taskInput, setTaskInput] = useState<string>("");
    const [descriptionInput, setDescriptionInput] = useState<string>("");
    const { tasks, setTasks } = useExampleContext();

    return (
        <div className="App">
            <h1>Todo</h1>
            <button
                onClick={() => {
                    setTasks((prevTasks) => [
                        ...prevTasks,
                        {
                            id: Math.round(Math.random() * 999999),
                            name: taskInput,
                            description: descriptionInput,
                        },
                    ]);
                    setTaskInput("");
                    setDescriptionInput("");
                }}
            >
                Add task
            </button>
            <br />
            Name
            <br />
            <input
                value={taskInput}
                onChange={(e) => {
                    setTaskInput(e.target.value);
                }}
            />
            <br />
            Description
            <br />
            <input
                value={descriptionInput}
                onChange={(e) => {
                    setDescriptionInput(e.target.value);
                }}
            />
            {tasks.map((task, i) => {
                return (
                    <div key={`task${i}`} className="tasks">
                        <div key={`id_${i}`}>{task.id}</div>
                        <div key={`name_${i}`}>{task.name}</div>
                        <div key={`description_${i}`}>{task.description}</div>
                        <div
                            className="x"
                            onClick={() => {
                                setTasks(tasks.filter((element) => element.id !== task.id));
                            }}
                        >
                            x
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default App;
