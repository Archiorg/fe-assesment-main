import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';

const PriceBreakTable = ({ priceBreaks }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableBody>
        {priceBreaks.map((breakItem, index) => (
          <TableRow key={index}>
            <TableCell>ex {breakItem.quantity} PCE</TableCell>
            <TableCell>{breakItem.pricePerPiece} EUR/PCE</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default PriceBreakTable;
