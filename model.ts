
type TaskStatus = "todo" | "in-progress" | "done";

interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

// Add a new task
function addTask(tasks: Task[], title: string): Task[] {
  const newId =
    tasks.length === 0
      ? 1
      : Math.max(...tasks.map((task) => task.id)) + 1;

  const newTask: Task = {
    id: newId,
    title: title,
    status: "todo",
  };

  return [...tasks, newTask];
}

// Mark a task as done
function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) =>
    task.id === id
      ? { ...task, status: "done" }
      : task
  );
}

// Filter tasks by status
function filterByStatus(
  tasks: Task[],
  status: TaskStatus
): Task[] {
  return tasks.filter((task) => task.status === status);
}

// Extra operation: Delete a task by ID
function deleteTask(tasks: Task[], id: number): Task[] {
  return tasks.filter((task) => task.id !== id);
}

// Example usage
let tasks: Task[] = [];

tasks = addTask(tasks, "Learn TypeScript");
tasks = addTask(tasks, "Build TypeTasks");

tasks = completeTask(tasks, 1);

const pendingTasks: Task[] = filterByStatus(tasks, "todo");
const completedTasks: Task[] = filterByStatus(tasks, "done");

tasks = deleteTask(tasks, 2);

console.log(tasks);
console.log("Pending tasks:", pendingTasks);
console.log("Completed tasks:", completedTasks);

export type { Task, TaskStatus };
// export { addTask, completeTask, filterByStatus, deleteTask };
