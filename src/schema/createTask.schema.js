import { z } from "zod";

export const CreateTaskSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
    })
    .min(1, "Title is required")
    .max(100, "The title must be at most 100 characters long"),

  dueDate: z.date({
    required_error: "Task due date is required",
    invalid_type_error: "Invalid date",
  }),

  description: z
    .string({
      required_error: "Description is required",
    })
    .min(1, "Description is required")
    .max(500, "Description must be at most 500 characters long"),

  status: z.enum(["todo", "inProgress", "completed"], {
    required_error: "Status is required",
  }),

  priority: z.enum(["low", "normal", "high"], {
    required_error: "Priority is required",
  }),
});
