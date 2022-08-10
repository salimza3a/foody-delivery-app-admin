import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import "./table-style.css";
import tableBin from "../../../images/icons/table-bin.svg";
import { v4 as uuidv4 } from "uuid";
const columns = [
  { id: "id", label: "ID", minWidth: 150 },
  {
    id: "image",
    label: "Image",
    minWidth: 170,
  },
  {
    id: "name",
    label: "Name",
    minWidth: 170,
  },
  {
    id: "slug",
    label: "Slug",
    minWidth: 170,
  },
];

export default function CategoryTable({ data, deleteValue }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  console.log(data, "X");

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{
                    minWidth: column.minWidth,
                    fontSize: "14px",
                    fontFamily: "Open Sans",
                    fontWeight: "600",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell align={"right"} cellwidth={"20"}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={uuidv4()}>
                    <TableCell
                      style={{ fontSize: "14px", fontFamily: "Open Sans" }}
                      align="left"
                      key={row.id}
                    >
                      <button
                        style={{
                          backgroundColor: "transparent",
                          border: "transparent",
                          borderRadius: "15px",
                        }}
                      >
                        {row.id}
                      </button>
                    </TableCell>
                    <TableCell key={uuidv4()}>
                      <img
                        width={50}
                        style={{ borderRadius: "10px" }}
                        src={row.image}
                        alt=""
                      />
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "14px", fontFamily: "Open Sans" }}
                      key={uuidv4()}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "14px", fontFamily: "Open Sans" }}
                      key={uuidv4()}
                    >
                      {row.slug}
                    </TableCell>
                    <TableCell>
                      <button
                        style={{
                          backgroundColor: "transparent",
                          border: "transparent",
                        }}
                        onClick={() => deleteValue(row.id)}
                      >
                        <img src={tableBin} alt="" />
                      </button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className="category-pagination"
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
