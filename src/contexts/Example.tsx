import { createContext, useContext, useState } from "react";

interface Task {
    id: number;
    name: string;
    description: string;
}

interface ProviderProps {
    children?: React.ReactNode;
}
interface TasksContext {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
// del 1
const ExampleContext = createContext<TasksContext | null>(null);

// del 2
export const ExampleProvider = ({ children }: ProviderProps) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    return (
        <ExampleContext.Provider value={{ tasks, setTasks }}>{children}</ExampleContext.Provider>
    );
};
// del 3
export const useExampleContext = () => {
    const contextValue = useContext(ExampleContext);
    if (contextValue === null) {
        throw new Error("Hittade ej context");
    }
    return contextValue;
};
