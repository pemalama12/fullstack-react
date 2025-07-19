import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export const createUser = async (user) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}users/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("Server error:", response.status);
    throw data;
  }

  return await data;
};

export function useSignup() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: createUser,
    onSuccess: (response) => {
      toast.success("new user is created");
      console.log("user was created", response);
      navigate("/");
    },
    onError: (error) => {
      toast.error(error?.error?.message);
    },
  });
}
