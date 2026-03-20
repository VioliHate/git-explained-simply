import React from "react";

export const Card = ({
  children,
  className = "",
  as: Tag = "article",
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) => (
  <Tag
    className={`bg-white p-6 rounded-2xl shadow-sm border border-zinc-200 ${className}`}
  >
    {children}
  </Tag>
);
