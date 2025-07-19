import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
export const loginUser = async (user) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}auth/login`, {
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

export function useLogin() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (response) => {
      toast.success("user login was successfull");
      Cookies.set("token", response?.data?.accessToken, { expires: 1 });
      Cookies.set(
        "user",
        JSON.stringify({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
        }),
        { expires: 1 }
      );
      navigate("/tasks");
    },
    onError: (error) => {
      console.log(error);
      //   toast.error(`${error?.error[0]?.path} is wrong`);
    },
  });
}
