const formatFocusType = (str) => {
  return str
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const EmailTemplate = ({
  name,
  lastName,
  email,
  message,
  phone,
  focusType,
  organization,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      color: "#FFFFFF",
      padding: "20px",
      maxWidth: "600px",
      margin: "0 auto",
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      background: "#0C4068",
    }}
  >
    <h1
      style={{
        fontSize: "24px",
        // color: "#4CAF50",
      }}
    >
      {name} {lastName} wants to contact you
    </h1>
    <hr
      style={{
        border: "0",
        height: "1px",
        background: "#e0e0e0",
      }}
    />
    <h2
      style={{
        fontSize: "20px",
        // color: "#2196F3",
      }}
    >
      Contact Information
    </h2>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Phone:</strong> {phone}
    </p>
    <p>
      <strong>Type:</strong> {formatFocusType(focusType)}
    </p>
    {organization && (
      <p>
        <strong>Organization Name:</strong> {organization}
      </p>
    )}
    <hr
      style={{
        border: "0",
        height: "1px",
        background: "#e0e0e0",
      }}
    />
    <h2
      style={{
        fontSize: "20px",
        // color: "#2196F3",
      }}
    >
      Message
    </h2>
    <p
      style={{
        fontSize: "16px",
        lineHeight: "1.5",
      }}
    >
      {message}
    </p>
  </div>
);
