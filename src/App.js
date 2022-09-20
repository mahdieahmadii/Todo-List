import "./App.css";

function App() {
  return (
    <div className="w-full mx-3">
      <div className="text-center mb-5">
        <h1 className="text-5xl uppercase font-bold ">Todo List</h1>
      </div>
      <div>
        <form action="#" method="POST" className="flex justify-center">
          <input
            className="placeholder-orange-400 bg-orange-100 px-5 py-2 rounded-l-full"
            type="text"
            name="todo"
            placeholder="Enter Todo"
          />
          <button className="text-white bg-orange-500 px-5 rounded-r-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </form>
      </div>
      <div className="bg-white mt-5 p-4 rounded-lg shadow-lg">
        <div>
          <h1 className="text-lg font-bold mb-0 leading-none text-gray-800">
            Todos
          </h1>
          <small className="text-xs inline-block mt-0">
            2 todos pending, 1 completed
          </small>
        </div>
        <div className="mt-3">
          <table className="w-full">
            <thead>
              <tr className="bg-orange-500 text-orange-50">
                <th className="text-center py-2 rounded-tl-lg">#</th>
                <th className="text-left py-2">Details</th>
                <th className="text-left py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Learn React</td>
                <td>
                  <button>x</button>
                  <button>c</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Learn React</td>
                <td>
                  <button>x</button>
                  <button>c</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Learn React</td>
                <td>
                  <button>x</button>
                  <button>c</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
