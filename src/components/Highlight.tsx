import React from "react";

export const Highlight = ({
  children,
  color = "bg-emerald-100 text-emerald-700",
}: {
  children: React.ReactNode;
  color?: string;
}) => (
  <strong
    className={`${color} px-2 py-0.5 rounded-md font-semibold font-inherit`}
  >
    {children}
  </strong>
);
