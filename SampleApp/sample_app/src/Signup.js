import React, { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://localhost:7023/api/Users/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      }
    );

    const data = await response.text();
    alert(data);
  };

  return (
    <div>
      <h1>Sign up</h1>

      <form onSubmit={submitForm}>
        <div>
          Name<br />
          <input value={name} onChange={e => setName(e.target.value)} />
        </div>

        <div>
          Email<br />
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </div>

        <div>
          Password<br />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>

        <br />

        <button type="submit">
          Create my account
        </button>
      </form>
    </div>
  );
}

export default Signup;