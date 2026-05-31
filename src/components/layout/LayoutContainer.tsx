import React from "react";

interface LayoutContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header";
}

/** Site-wide content shell: max 1400px, aligned horizontal padding */
const LayoutContainer: React.FC<LayoutContainerProps> = ({
  children,
  className = "",
  as: Tag = "div",
}) => <Tag className={`layout-container ${className}`.trim()}>{children}</Tag>;

export default LayoutContainer;
