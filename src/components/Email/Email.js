export const EmailTemplate = ({ name, email, message }) => (
  <div>
    <h1>{name} wants to contact you</h1>
    <h2>Email: {email}</h2>
    <p>{message}</p>
  </div>
);
