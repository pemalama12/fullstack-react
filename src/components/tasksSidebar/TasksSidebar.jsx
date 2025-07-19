import { Card } from "@/components/ui/card";
import styles from "./taskSidebar.module.css";
import UserProfile from "../userProfile/UserProfile";
import CreateTaskForm from "../createTaskForm/CreateTaskForm";
import Logout from "../logout/Logout";
import Cookies from "js-cookie";

function TasksSidebar() {
  const user = JSON.parse(Cookies.get("user"));
  return (
    <section className={`fixed ${styles.sidebarHeight} right-4 top-4`}>
      <Card className="flex flex-col h-full w-full p-6 justify-between">
        <UserProfile firstName={user ? user.firstName : ""} />
        <CreateTaskForm />
        <Logout />
      </Card>
    </section>
  );
}

export default TasksSidebar;
