import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  description: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  description,
}) => (
  <div>
    <span>{email}</span>
    <h1>Welcome, {name}!</h1>
    <p>{description}</p>
  </div>
);
