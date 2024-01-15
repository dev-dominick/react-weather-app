const AppIntro = () => {
  return (
    <div className="mt-8 flex flex-col items-center">
      <h1 className="mb-5 text-4xl">
        Welcome to my Weather app made with react
      </h1>
      <h1 className="mb-3 text-2xl">This app was made with:</h1>
      <div className="flex gap-8">
        <div>
          <ul style={{ listStyleType: "circle" }}>
            <li>React</li>
            <li>Material UI</li>
            <li>JavaScript</li>
            <li>TailWind</li>
          </ul>
        </div>
        <div>
          <ul style={{ listStyleType: "circle" }}>
            <li>Zustand</li>
            <li>React Query</li>
            <li>OpenWeather API</li>
          </ul>
        </div>
      </div>
      <h1 className="mt-8 text-6xl">Search a City to get Started</h1>
    </div>
  );
};

export default AppIntro;
