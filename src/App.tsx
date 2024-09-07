import "./App.css";

function App() {
  return (
    <div className="h-[100dvh] flex flex-col">
      <main className="flex flex-1 flex-col item-center justify-center">
        <div className="title">
          <h3 className="gradient-text">React Toolkit Query</h3>
          <p>
            This React project uses Redux Toolkit Query (RTK Query) for
            efficient server-side data fetching,
            <br /> caching, and state management. RTK Query simplifies API
            requests, reduces boilerplate,
            <br /> and optimizes performance while integrating seamlessly with
            Redux
            <br /> for a scalable architecture.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
