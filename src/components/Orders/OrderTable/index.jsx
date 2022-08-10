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
  { id: "id", label: "ID" },
  { id: "customer id", label: "Customer ID" },
  {
    id: "time",
    label: "Time",
  },
  {
    id: "delivery address",
    label: "Delivery Address",
  },
  {
    id: "amount",
    label: "Amount",
  },
  {
    id: "payment method",
    label: "Payment Method",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

export default function OrderTable({ datas, deleteValue }) {
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
                <TableCell
                  key={column.id}
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    fontFamily: "Open Sans",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {datas
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover tabIndex={-1} key={uuidv4()}>
                    <TableCell key={uuidv4()}>{row.id}</TableCell>
                    <TableCell key={uuidv4()}>{row.custemerId}</TableCell>
                    <TableCell key={uuidv4()}>{row.time}</TableCell>
                    <TableCell key={uuidv4()} className="text-truncate">
                      {row.deliveryAddress}
                    </TableCell>
                    <TableCell key={uuidv4()}>{row.amount}</TableCell>
                    <TableCell key={uuidv4()}>{row.paymentMethod}</TableCell>
                    <TableCell key={uuidv4()}>{row.contact}</TableCell>
                    <TableCell key={uuidv4()}>
                      <button
                        className="order-bin-btn"
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
        count={datas.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
