import { Grid, Pagination } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useState } from "react";

export const MuiTable = () => {
    const [color, setcolor] = useState("")
    
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      sortable: false,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
    },
  ];
  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 40 },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  ];

  return (
    <div>
      <h1>MuiTable</h1>
      <input type="color" onChange={(e)=>setcolor(e.target.value)}></input>
        <h1 style={{color:color}}>Hello</h1>
        {color}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <DataGrid rows={rows} columns={columns}
          slots={{
            toolbar:GridToolbar
          }}
          slotProps={{
            toolbar: {
              printOptions:{
                pageStyle: `.MuiDataGrid-root .MuiDataGrid-main { color: ${color}; }`,
              }
            }
          }}
          initialState={
            {
                pagination:{
                    paginationModel:{pageSize:5}    
                }
            }
          }
          pageSizeOptions={[5,10,15]}
          ></DataGrid>
        </Grid>
      </Grid>
    </div>
  );
};