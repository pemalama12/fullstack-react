function TasksCounter({ type = "todo", count = 0 }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={`p-6 border-4 border-solid ${
          type === "todo" && "border-red-500"
        } ${type === "inProgress" && "border-orange-500"}
        ${type === "completed" && "border-green-500"} rounded-full mb-4`}
      >
        <div className="min-w-10 min-h-10 text-white text-3xl text-center justify-center leading-10">
          {count}
        </div>
      </div>
      <div>{type === "todo" && <div> To do </div>} </div>
      <div>{type === "inProgress" && <div> In Progress </div>} </div>
      <div>{type === "completed" && <div> Completed </div>} </div>
    </div>
  );
}

export default TasksCounter;
