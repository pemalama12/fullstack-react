import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
export const updateTask = async (task) => {
  const token = Cookies.get("token");
  const response = await fetch(`${import.meta.env.VITE_API_URL}tasks`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(task),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("Server error:", response.status);
    throw data;
  }

  return await data;
};

export function useUpdateTask() {
  const QueryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: updateTask,
    onSuccess: (response) => {
      console.log(response);
      toast.success("Task updated succesfully");
      QueryClient.invalidateQueries({
        queryKey: ["fetchTasks"],
        refetchType: "active", // or "all"
      });
      navigate("/tasks");
    },
    onError: (error) => {
      console.log("error updating task", error);
      toast.error("error creating task");
    },
  });
}
