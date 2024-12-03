import React, { useEffect, useState } from "react";
import DataTable from "./component/DataTable";

const App = () => {
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
        );
        const jsonData = await response.json();
        setTableData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <div>{!!tableData && <DataTable tableData={tableData} />}</div>;
};

export default App;
