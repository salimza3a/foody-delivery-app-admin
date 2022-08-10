import { Pagination } from "@mui/material";
import React from "react";
import "./pagination-style.css";
const Paginations = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleChange = (event, value) => {
    paginate(value);
  };

  return (
    <div>
      <Pagination
        className="pagination-style"
        count={pageNumbers.length}
        onChange={handleChange}
        variant="outlined"
        color="secondary"
        size="large"
      />
    </div>
  );
};

export default Paginations;
