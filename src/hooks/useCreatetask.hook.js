import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
export const createTask = async (task) => {
  const token = Cookies.get("token");
  const response = await fetch(`${import.meta.env.VITE_API_URL}tasks`, {
    method: "POST",
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

export function useCreateTask() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: createTask,
    onSuccess: (response) => {
      console.log(response);
      toast.success("Task created succesfully");

      navigate("/tasks");
    },
    onError: (error) => {
      console.log("Error creating task", error);
      toast.error("error creating task");
    },
  });
}
