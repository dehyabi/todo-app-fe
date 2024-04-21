import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Todo() {
  const [todos, setTodos] = useState<any[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  function fetchTodos() {
    axios.get("/api/todos").then((response) => {
      setTodos(response.data);
    });
  }

  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-7">
              <h1 className="text-center mb-3">Todo App</h1>
              <form action="">
                <div className="mb-3">
                  <input
                    type="title"
                    className="form-control"
                    placeholder="Type..."
                  />
                </div>
                <div className="text-end">
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </form>

              <table className="table table-border mt-4">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Title</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {todos &&
                    todos.map((item, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{item.title}</td>
                        <td>
                          <button className="btn btn-primary btn-sm">Edit</button>
                          &nbsp;<button className="btn btn-danger btn-sm">Delete</button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
