import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const MuiTable2 = () => {
  const [users, setusers] = useState([]);
  const deleteUser = async (id) => {
    //delete api....
    alert(id);
  };
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 200,
    },
    {
      field: "name",
      headerName: "Name",
      width: 200,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "isActive",
      headerName: "Status",
      width: 200,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <div>
              <Button
                variant="outlined"
                onClick={() => {
                  deleteUser(params.row._id);
                }}
              >
                DELETE
              </Button>
            </div>
            <div>
              <Button
                variant="outlined"
                LinkComponent={Link}
                to={`/user/detail/${params.row._id}`}
              >
                DETAIL
              </Button>
            </div>
          </>
        );
      },
    },
  ];

  const fetchUserData = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user");
    setusers(res.data.data);
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <h1>USER DATA</h1>
      <DataGrid
        getRowId={(row) => row._id}
        rows={users}
        columns={columns}
      ></DataGrid>
    </div>
  );
};