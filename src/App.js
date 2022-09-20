import { useState } from "react";
import "./App.css";

function App() {
  const [changeValue, setChangeValue] = useState();
  const [addValue, setAddValue] = useState([]);
  const [updateValue, setUpdateValue] = useState("");
  const [editItem, setEditItem] = useState();

  function onChangeInputHandler(e) {
    setChangeValue(e.target.value);
  }

  function onClickHandler() {
    let temp = {
      text: changeValue,
      id: addValue.length + 1,
      done: false,
    };
    let newValues = [...addValue, temp];
    setAddValue(newValues);
    console.log(addValue);
  }
  function onCheckHandle(id) {
    let target = addValue.find((item) => item.id === id);
    target.done = !target.done;
    setAddValue([...addValue]);
  }

  function onDeleteHandler(id) {
    let newValues = addValue.filter((item) => item.id !== id);
    setAddValue(newValues);
  }
  function handleUpdateItem(id, value) {
    addValue.find((item) => item.id === id).text = value;
    setAddValue([...addValue]);
    setEditItem("");
  }

  return (
    <div className="w-full max-w-2xl mx-3">
      <div className="text-center mb-5">
        <h1 className="text-5xl uppercase font-bold ">Todo List</h1>
      </div>
      <div>
        <div className="flex justify-center">
          <input
            className="placeholder-lime-600 bg-lime-100 px-5 py-2 rounded-l-full"
            type="text"
            name="todo"
            placeholder="Enter Todo"
            onChange={onChangeInputHandler}
          />
          <button
            className="text-white bg-lime-800 px-5 rounded-r-full"
            onClick={onClickHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="bg-white mt-5 p-4 rounded-lg shadow-lg">
        <div>
          <h1 className="text-lg font-bold mb-0 leading-none text-gray-800">
            Todos
          </h1>
        </div>
        <div className="mt-3">
          <table className="w-full">
            <thead>
              <tr className="bg-lime-500 text-lime-50">
                <th className="text-center p-2 rounded-tl-lg">#</th>
                <th className="text-center p-2">Details</th>
                <th className="text-center p-2 rounded-tr-lg">Action</th>
              </tr>
            </thead>
            <tbody>
              {addValue.map((value, index) => {
                return (
                  <tr className="bg-lime-100 text-lime-700">
                    <>
                      <td className="text-center">{value.id}</td>
                      {value.id === editItem ? (
                        <>
                          <td className="p-2 text-center">
                            <input
                              type="text"
                              className="placeholder-lime-600 bg-lime-100 px-5 py-2 text-center"
                              defaultValue={value.name}
                              onChange={(e) => setUpdateValue(e.target.value)}
                            />
                          </td>
                          <td className="p-2 text-center">
                            <button
                              className="p-1"
                              onClick={() =>
                                handleUpdateItem(value.id, updateValue)
                              }
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                            </button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="text-center" key={value.id}>
                            <span className={value.done ? "line-through" : ""}>
                              {value.text}
                            </span>
                          </td>
                          <td className="p-2 text-center">
                            <button
                              className="p-1"
                              onClick={() => onCheckHandle(value.id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                            </button>

                            <button
                              className="p-1"
                              onClick={() => setEditItem(value.id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                />
                              </svg>
                            </button>
                            <button
                              className="p-1"
                              onClick={() => onDeleteHandler(value.id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </button>
                          </td>
                        </>
                      )}
                    </>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
