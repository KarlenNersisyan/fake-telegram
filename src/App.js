import React from "react";
import { lazy, Suspense } from "react";

import { useAuth } from "./hooks/useAuth.hook";
import LoadSpinner from "./components/LoadSpinner/LoadSpinner";

import "./root.css";
import "./App.css";

const AuthenticatedApp = lazy(() =>
  import("./components/AuthenticatedApp/AuthenticatedApp")
);
const UnAuthenticatedApp = lazy(() =>
  import("./components/UnAuthenticatedApp/UnAuthenticatedApp")
);

export function App() {
  const { user } = useAuth();

  if (user === null) {
    return (
      <div>
        <LoadSpinner />
      </div>
    );
  }

  return (
    <>
      <Suspense
        fallback={
          <div>
            <LoadSpinner />
          </div>
        }
      >
        {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
      </Suspense>
    </>
  );
}
