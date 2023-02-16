import React from "react";

export const Container = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500 vh-100">
      <div className="d-flex flex-col content-center items-center justify-center">
        <h1 className="bg-lime-50 rounded-md text-center text-teal-700 m-2 p-2">
          {" "}
          GESTOR DE TAREAS
        </h1>

        <div className="col-md-10 d-flex flex-wrap p-2">
          {children}
        </div>
      </div>
    </div>
  );
};
