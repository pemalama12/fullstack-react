import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { TasksContext } from "@/context/tasks.context";
import { extractQueryString } from "@/lib/extractQueryString";
import { useContext, useState, useEffect } from "react";

function TaskPagination() {
  const [links, setLinks] = useState();
  const [meta, setMeta] = useState();
  const { tasks, setTasks } = useContext(TasksContext);

  const previousPage = links
    ? extractQueryString(links.previous).toString()
    : "#";
  const nextPage = links?.next
    ? extractQueryString(links.next).toString()
    : "#";
  const order = links?.next ? extractQueryString(links.next).get("order") : "#";

  useEffect(() => {
    if (tasks) {
      setLinks(tasks.pagination.links);
      setMeta(tasks.pagination.meta);
    }
  }, [tasks]);
  console.log("from pagination", tasks);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={`/tasks?${previousPage}`} />
        </PaginationItem>

        {meta &&
          [...Array(meta.totalPage)].map((item, index) => (
            <PaginationItem key={`pag${index}`}>
              <PaginationLink
                to={`/tasks?limit=${meta.itemsPerpage}&page=${
                  index + 1
                }&order=${order}`}
                isActive={index + 1 == meta.currentPage ? true : false}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

        <PaginationItem>
          <PaginationNext to={`/tasks?${nextPage}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default TaskPagination;
