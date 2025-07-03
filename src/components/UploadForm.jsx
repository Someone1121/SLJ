/* src/components/UploadForm.jsx */
import React from "react";
import "../App.css";

export default function UploadForm({ onPrev }) {
  return (
    <section className="upload-box">
      <h2>Step 3: Upload files</h2>

      <table className="file-table">
        <tbody>
          {/* Cover Letter */}
          <tr>
            <td>Cover Letter</td>
            <td>
              <input type="file" name="coverLetter" />
            </td>
          </tr>

          {/* Manuscript File */}
          <tr>
            <td>Manuscript File</td>
            <td>
              <input type="file" name="manuscript" />
            </td>
          </tr>

          {/* Supplementary Files */}
          <tr>
            <td>Supplementary Files</td>
            <td>
              <input type="file" name="supplementary" multiple />
            </td>
          </tr>
        </tbody>
      </table>

      <p className="agreement">
        By submitting this manuscript, I acknowledge that I have read and
        understand the <a href="#">Author(s) Agreement</a>.
      </p>

      <div className="btn-row">
        <button className="btn btn-prev" onClick={onPrev}>
          Previous
        </button>
        {/* Finish button can later trigger an API call / form submit */}
        <button className="btn btn-finish" type="button">
          Finish
        </button>
      </div>
    </section>
  );
}
