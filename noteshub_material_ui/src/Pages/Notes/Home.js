import React, { useEffect, useState } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CustomContainer from '../../components/UI/Container';
import apiClient from '../../utils/apiClient';
import { TablePagination } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
  
const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
  
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Home = () => {
  const classes = useStyles([]);
  const [ tableData, setTableData ] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const fetchData = async()=>{
    const response = await apiClient.getRequest('/JSframeworks')
    setTableData(response.data)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <CustomContainer>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                      <StyledTableCell>S.no.</StyledTableCell>
                      <StyledTableCell align="center">Name</StyledTableCell>
                      <StyledTableCell align="center">Author</StyledTableCell>
                      <StyledTableCell align="center">Description</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {tableData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(({ id, name, author, description }) => (
                    <StyledTableRow key={ id }>
                      <StyledTableCell> { id } </StyledTableCell>
                      <StyledTableCell> { name } </StyledTableCell>
                      <StyledTableCell> { author } </StyledTableCell>
                      <StyledTableCell> { description } </StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          component="div"
          count={tableData?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </CustomContainer>
  );
}

export default Home
