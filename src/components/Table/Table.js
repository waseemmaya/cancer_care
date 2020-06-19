import React from "react";
import {
  Table as MaterialTable,
  TableCell,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  Paper,
} from "@material-ui/core";

const Table = ({ data }) => {
  const { rows, cels } = data;

  // const Table = ({rows,cels})=> {
  return (
    <TableContainer component={Paper}>
      <MaterialTable aria-label="simple table">
        <TableHead className="table_head">
          <TableRow>
            {cels &&
              cels.map((cel) => {
                return <TableCell className="table_cell">{cel}</TableCell>;
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.area}>
              <TableCell component="th" scope="row">
                {row.dueDate}
              </TableCell>
              <TableCell>
                <a href="#">{row.area}</a>
              </TableCell>
              <TableCell>{row.task}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  );
};

export default Table;
