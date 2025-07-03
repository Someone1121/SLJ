import React, { useState } from "react";
import "../App.css";

export default function ManuscriptInfo({ onNext }) {
  const [form, setForm] = useState({
    title: "",
    abstract: "",
    keywords: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <section className="upload-box">
      <h2>Step 1: Manuscript Details</h2>

      <table className="file-table">
        <tbody>
         
          <tr>
            <td>Article Title</td>
            <td>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                style={{ width: "100%" }}
              />
            </td>
          </tr>

        
          <tr>
            <td>Abstract</td>
            <td>
              <textarea
                name="abstract"
                value={form.abstract}
                onChange={handleChange}
                rows={6}
                style={{ width: "100%" }}
              />
            </td>
          </tr>

          
          <tr>
            <td>Key words</td>
            <td>
              <input
                name="keywords"
                value={form.keywords}
                onChange={handleChange}
                style={{ width: "100%" }}
              />
            </td>
          </tr>
        </tbody>
      </table>

     
      <div className="btn-row">
        <button className="btn btn-next" onClick={onNext}>
          Next
        </button>
      </div>
    </section>
  );
}
