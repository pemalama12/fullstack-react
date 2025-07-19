import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import { Badge } from "@/components/ui/badge.jsx";
import { useUpdateTask } from "@/hooks/useUpdateTask.hook";
import { useEffect, useState } from "react";

export function Task(props) {
  const { mutate, isSuccess } = useUpdateTask();
  const [progress, setProgress] = useState(false);

  const {
    title = "This is the default title",
    description = "This is the default description",
    status = "todo",
    priority = "normal",
    dueDate = new Date("2025-01-01T12:00:00.000Z"),
    id,
  } = props;

  let formattedDate = dueDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  useEffect(() => {
    if (status === "inProgress") {
      setProgress(true);
    }
  }, [status]);

  function handleProgessChange(value) {
    setProgress(value);

    mutate({ _id: id, status: value ? "inProgress" : "todo" });
  }

  function handleTaskCompleted() {
    mutate({ _id: id, status: "completed" });
  }
  return (
    <Card className="w-full mb-8">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="basis-2/3 leading-8">{title}</CardTitle>
        <div className="flex">
          <Badge className="mr-2" variant="outline">
            {formattedDate}
          </Badge>
          {priority === "normal" && (
            <Badge className=" bg-sky-800" variant="secondary">
              {priority}
            </Badge>
          )}

          {priority === "high" && (
            <Badge className=" bg-red-800" variant="secondary">
              {priority}
            </Badge>
          )}
          {priority === "low" && (
            <Badge className=" bg-green-800" variant="secondary">
              {priority}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent>
        <CardDescription> {description}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-row items-center justify-between">
        <div className="flex items-center space-x-2">
          <Switch
            checked={progress}
            onCheckedChange={handleProgessChange}
            id="in-Progress"
          />
          <Label className="ml-4" htmlFor="in-Progress">
            InProgress
          </Label>
        </div>
        <Button onClick={handleTaskCompleted} variant="outline" className="">
          Completed
        </Button>
      </CardFooter>
    </Card>
  );
}
