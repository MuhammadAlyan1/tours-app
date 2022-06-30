import "./index.css";
import React from "react";
import ReactDom from "react-dom";
import { useState, useEffect } from "react";
import { Tour } from "./tour";
import { Loading } from "./loading";

function App() {
  const [toursData, setToursData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const url = "https://course-api.com/react-tours-project";
    async function fetchToursData() {
      const response = await fetch(url);
      const data = await response.json();
      setToursData(data);
      setIsLoading(false);
      setRefresh(false);
    }

    fetchToursData();
  }, [refresh]);

  function refreshBtn() {
    setIsLoading(true);
    setRefresh(true);
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <h1 className="main-heading">
        {toursData.length === 0 ? "No Tours Left" : "Our Tours"}
      </h1>
      {!toursData.length && (
        <button className="refreshBtn" onClick={refreshBtn}>
          refresh
        </button>
      )}
      <section>
        {toursData.map((data) => (
          <Tour
            key={data.id}
            data={data}
            toursData={toursData}
            setToursData={setToursData}
          />
        ))}
      </section>
    </>
  );
}

ReactDom.render(<App />, document.querySelector("#root"));
