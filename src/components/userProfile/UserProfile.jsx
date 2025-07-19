import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function UserProfile({ firstName = "John" }) {
  return (
    <div className="flex flex-col w-full pt-8 items-center">
      <Avatar className=" mb-4">
        <AvatarFallback className="text-2xl  font-semibold">
          {firstName.slice(0, 1)}
        </AvatarFallback>
      </Avatar>
      <h4> Hello , {firstName} </h4>
    </div>
  );
}

export default UserProfile;
