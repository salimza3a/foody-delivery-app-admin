import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { v4 as uuidv4 } from "uuid";
import "./offers-style.css";
import offersBin from "../../../images/icons/table-bin.svg";
const columns = [
  { id: "id", label: "ID" },
  { id: "image", label: "Image" },
  {
    id: "title",
    label: "Title",
  },
  {
    id: "descriptions",
    label: "Descriptions",
  },
];

export default function OffersTable({ data, deleteValue }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

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
                <TableCell className="header-cell" key={column.id}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover tabIndex={-1} key={uuidv4()}>
                    <TableCell className="cell-style" key={uuidv4()}>
                      {row.id}
                    </TableCell>
                    <TableCell className="cell-style" key={uuidv4()}>
                      <img
                        src={row.image_url}
                        alt=""
                        width={50}
                        height={50}
                        style={{ borderRadius: "15px", objectFit: "cover" }}
                      />
                    </TableCell>
                    <TableCell
                      className="text-truncate cell-style"
                      key={uuidv4()}
                    >
                      {row.title}
                    </TableCell>
                    <TableCell
                      className="text-truncate cell-style"
                      key={uuidv4()}
                    >
                      {row.descriptions}
                    </TableCell>
                    <TableCell key={uuidv4()}>
                      <button
                        className="offers-table-bin"
                        onClick={() => deleteValue(row.id)}
                      >
                        <img src={offersBin} alt="" />
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
