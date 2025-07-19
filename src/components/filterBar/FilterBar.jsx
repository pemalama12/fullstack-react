import OrderSelect from "../orderSelect/OrderSelect";
import TaskPagination from "../taskPagination/TaskPagination";

function FilterBar() {
  return (
    <>
      <nav className="flex flex-row justify-between mb-8">
        <TaskPagination />
        <OrderSelect />
      </nav>
    </>
  );
}

export default FilterBar;
