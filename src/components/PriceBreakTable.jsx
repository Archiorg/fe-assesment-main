import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import SectionSubTitle from './cmn/SectionSubTitle';

const PriceBreaksTable = ({ priceBreaks }) => {
  const priceBreaksArray = Object.entries(priceBreaks).map(([quantity, price]) => ({
    quantity,
    price,
  }));

  return (
    <Box>

      <SectionSubTitle title="Price Breaks"/>

      <TableContainer>
        <Table sx={{ maxWidth: '50%' }}>
          <TableBody>
            {priceBreaksArray.map((row, index) => (
              <TableRow key={index}>
                <TableCell
                  sx={{
                    fontSize: '14px',
                    lineHeight: 1.5,
                    color: 'var(--dark-grey)',
                    borderBottom: '1px solid #ddd',
                    borderTop: '1px solid #ddd',
                    paddingY: '0.2rem',
                  }}
                >
                  ex {row.quantity} PCE
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    fontSize: '14px',
                    color: 'black',
                    fontWeight: 'bold',
                    borderBottom: '1px solid #ddd',
                    borderTop: '1px solid #ddd',
                    paddingY: 0,
                    lineHeight: 1.5
                  }}
                >
                  {row.price.toFixed(2)} EUR/PCE
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PriceBreaksTable;
