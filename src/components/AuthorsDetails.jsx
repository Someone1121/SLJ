import React, { useState } from "react";
import "../App.css";

const blankAuthor = {
  title: "",
  given: "",
  last: "",
  email: "",
  affiliation: "",
  country: "",
};

export default function AuthorsDetails({ onPrev, onNext }) {
  const [authors, setAuthors] = useState([{ ...blankAuthor }]);

  function handleChange(idx, field, value) {
    const copy = [...authors];
    copy[idx][field] = value;
    setAuthors(copy);
  }

  function addAuthor() {
    setAuthors([...authors, { ...blankAuthor }]);
  }

  return (
    <section className="upload-box">
      <h2>Step 2: Author(s) Details</h2>

      <p style={{ marginTop: 0 }}>
        Please provide the names, titles, and affiliations of all authors in the
        order they appear on the manuscript. Only listed authors will appear on
        the article if accepted for publication.
      </p>

      <table className="file-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Given Names</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Affiliation</th>
            <th>Country</th>
          </tr>
        </thead>

        <tbody>
          {authors.map((a, idx) => (
            <tr key={idx}>
              <td>
                <select
                  value={a.title}
                  onChange={(e) => handleChange(idx, "title", e.target.value)}
                >
                  <option value=""> — </option>
                  <option>Dr.</option>
                  <option>Mr.</option>
                  <option>Ms.</option>
                  <option>Mrs.</option>
                  <option>Prof.</option>
                </select>
              </td>

              <td>
                <input
                  value={a.given}
                  onChange={(e) => handleChange(idx, "given", e.target.value)}
                />
              </td>

              <td>
                <input
                  value={a.last}
                  onChange={(e) => handleChange(idx, "last", e.target.value)}
                />
              </td>

              <td>
                <input
                  type="email"
                  value={a.email}
                  onChange={(e) => handleChange(idx, "email", e.target.value)}
                />
              </td>

              <td>
                <input
                  value={a.affiliation}
                  onChange={(e) => handleChange(idx, "affiliation", e.target.value)}
                />
              </td>

              <td>
                <select
                  value={a.country}
                  onChange={(e) => handleChange(idx, "country", e.target.value)}
                >
                  <option value="">Select Country</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>India</option>
                  <option>Other</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>
        <button
          type="button"
          onClick={addAuthor}
          style={{
            border: "none",
            background: "none",
            color: "#c00",
            cursor: "pointer",
            padding: 0,
          }}
        >
          add more author +
        </button>
      </p>

      <div className="btn-row">
        <button className="btn btn-prev" onClick={onPrev}>
          Previous
        </button>
        <button className="btn btn-next" onClick={onNext}>
          Next
        </button>
      </div>
    </section>
  );
}
