import React from "react";

const Navbar = () => {
  return (
    <div className="py-4 flex items-center justify-between">
      <div className="logo">
        <h2 className="text-2xl font-semibold text-white capitalize">
          task on
        </h2>
      </div>
      <div className="auth">
        <img
          src="/dummy-avatar.png"
          alt="profile"
          className="h-8 w-8 object-center rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
