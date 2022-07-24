import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import styled from "styled-components";
import { grades } from "../../utils/grades";

const Grades = () => {
  const defaultColDefs = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  const [rowData] = useState(grades);

  const [columnDefs] = useState([
    { field: "courseCode" },
    { field: "courseName" },
    { field: "score" },
    { field: "grade" },
    { field: "gradePoints" },
    { field: "totalPoints" },
  ]);

  return (
    <Wrapper>
      <div className="page-header">
        <div className="user-info-details">
          <h2>Justin Charles</h2>
          <p>B.sc Computer science and engineering</p>
          <h3>Year 3</h3>
          <h3>2nd Semester</h3>
        </div>
      </div>

      <div className="grades-main-con">
        <div
          className="ag-theme-material"
          style={{
            height: "580px",
            width: "100%",
          }}
        >
          <AgGridReact
            defaultColDef={defaultColDefs}
            animateRows={true}
            rowData={rowData}
            columnDefs={columnDefs}
          ></AgGridReact>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 20px;

  * {
    box-sizing: border-box;
  }
  .user-info-details {
    padding: 0 20px;
  }

  .grades-main-con {
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
  }

  .grades-table {
    thead {
      background-color: #f5f5f5;
    }
  }
`;

export default Grades;
