import { useState } from "react";
import AddTaskModal from "./addTaskModal";
import NoTaskFound from "./NoTaskFound";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "learn fahad Lorem ipsum amet.",
    description:
      "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quod.",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  function handleAddEditTask(newTask, isAdd) {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        }),
      );
    }

    handleCloseClick();
  }

  function handleEditTask(task) {
    setShowAddModal(true);
    setTaskToUpdate(task);
  }

  function handleDeleteTask(taskId) {
    const tasksAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksAfterDelete);
  }

  function handleCloseClick() {
    setShowAddModal(false);
    setTaskToUpdate(null);
  }

  function handleDeleteAll() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all tasks?",
    );
    if (confirmed) {
      setTasks([]);
    }
  }

  function handleFavorite(taskId) {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isFavorite: !task.isFavorite };
        } else {
          return task;
        }
      }),
    );
  }
  function handleSearch(searchTerm) {
    console.log(searchTerm);

    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setTasks([...filtered]);
  }

  return (
    <>
      <section className="mb-20" id="tasks">
        {showAddModal && (
          <AddTaskModal
            onCloseClick={handleCloseClick}
            onSave={handleAddEditTask}
            taskToUpdate={taskToUpdate}
          />
        )}
        <div className="container">
          <div className="p-2 flex justify-end">
            <SearchTask onSearch={handleSearch} />
          </div>

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction
              onAddClick={() => setShowAddModal(true)}
              onDeleteAllClick={handleDeleteAll}
            />
            <div className="overflow-auto">
              {tasks.length > 0 ? (
                <TaskList
                  tasks={tasks}
                  onEdit={handleEditTask}
                  onDelete={handleDeleteTask}
                  onFav={handleFavorite}
                />
              ) : (
                <NoTaskFound />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
