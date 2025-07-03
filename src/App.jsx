import React, { useState } from "react";
import "./App.css";

import Header          from "./components/Header";
import Sidebar         from "./components/Sidebar";
import StepIndicator   from "./components/StepIndicator";
import HomePage        from "./components/HomePage";   // NEW
import LoginPage       from "./components/LoginPage";  // NEW
import Dashboard       from "./components/Dashboard";
import ManuscriptInfo  from "./components/ManuscriptInfo";
import AuthorsDetails  from "./components/AuthorsDetails";
import UploadForm      from "./components/UploadForm";
import EditProfile     from "./components/EditProfile";

export default function App() {
  const [user, setUser] = useState(null);      // null → not logged in
  const [page, setPage] = useState("home");    // home | login | dashboard …
  const [step, setStep] = useState(1);

  // wizard data
  const [manuscriptInfo, setManuscriptInfo] = useState({});
  const [authors,        setAuthors]        = useState([]);
  const [files,          setFiles]          = useState({});

  /* -------- navigation -------- */
  function navigate(keyOrNum) {
    if (typeof keyOrNum === "number") {
      setStep(keyOrNum);
      setPage("wizard");
      return;
    }
    if (keyOrNum === "logout") { setUser(null); setPage("home"); return; }
    if (keyOrNum === "wizard") { setPage("wizard"); setStep(1); return; }
    setPage(keyOrNum);
  }

  /* -------- fake auth -------- */
  function handleAuth(username) {
    setUser(username);
    setPage("dashboard");
  }

  /* -------- final submit -------- */
  function handleSubmit() {
    alert("Submitted (demo)");
    setPage("dashboard");
  }

  return (
    <div className="app-root">
      <Header user={user || "Guest"} />

      <div className="body-wrap">
        {user && <Sidebar active={page} onNavigate={navigate} />}

        <main className="main-pane">
          {/* PUBLIC PAGES */}
          {page === "home"  && <HomePage  onLogin={() => setPage("login")} />}
          {page === "login" && <LoginPage onAuth={handleAuth} />}

          {/* PRIVATE PAGES (when logged in) */}
          {user && page === "dashboard" && <Dashboard />}

          {user && page === "wizard" && (
            <>
              <StepIndicator current={step} onStepClick={navigate} />
              {step === 1 && (
                <ManuscriptInfo
                  data={manuscriptInfo}
                  onChange={setManuscriptInfo}
                  onNext={() => setStep(2)}
                />
              )}
              {step === 2 && (
                <AuthorsDetails
                  data={authors}
                  onChange={setAuthors}
                  onPrev={() => setStep(1)}
                  onNext={() => setStep(3)}
                />
              )}
              {step === 3 && (
                <UploadForm
                  data={files}
                  onChange={setFiles}
                  onPrev={() => setStep(2)}
                  onFinish={handleSubmit}
                />
              )}
            </>
          )}

          {user && page === "myManuscripts" && (
            <h2 style={{ padding: "24px" }}>My Manuscripts (coming soon)</h2>
          )}

          {user && page === "profile" && <EditProfile />}
        </main>
      </div>
    </div>
  );
}
