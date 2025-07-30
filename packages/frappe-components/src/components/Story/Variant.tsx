import React from "react";

export interface VariantProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const Variant: React.FC<VariantProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "white",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          padding: "12px 16px",
          backgroundColor: "#f9fafb",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <h3
          style={{
            margin: "0",
            fontSize: "14px",
            fontWeight: "600",
            color: "#374151",
            textTransform: "capitalize",
          }}
        >
          {title}
        </h3>
        {description && (
          <p
            style={{
              margin: "4px 0 0 0",
              fontSize: "12px",
              color: "#6b7280",
            }}
          >
            {description}
          </p>
        )}
      </div>
      <div
        style={{
          padding: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80px",
        }}
      >
        {children}
      </div>
    </div>
  );
};
