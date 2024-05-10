import { UserRound } from "lucide-react";
import Link from "next/link";
import React from "react";

const Profile = ({ showLabel }: any) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <UserRound size={20} />
        {showLabel && <button>Sign Out</button>}
      </div>
      <div className="flex items-center gap-2">
        <img
          src="/dummy-avatar.png"
          alt="profile"
          className="h-6 w-6 object-cover rounded-full overflow-hidden"
        />
        <Link href={""}>Profile</Link>
      </div>
    </div>
  );
};

export default Profile;
