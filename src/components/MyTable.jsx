import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

export function MyTable({rows,handleDelete,handleEdit,handleSort,columnToSort,sortDirection}) {
  const classes = useStyles();
  console.log(handleDelete)
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell onClick={()=>handleSort('customernumber')}>Customer number
            {columnToSort === 'customernumber' ? (
                sortDirection === "asc" ? (
                  <ArrowUpwardIcon />
                ) : (
                  <ArrowDownwardIcon />
                )
              ) : null
            }

            </TableCell>
            <TableCell onClick={()=>handleSort('username')} align="right">Username
            {columnToSort === 'username' ? (
                sortDirection === "asc" ? (
                  <ArrowUpwardIcon />
                ) : (
                  <ArrowDownwardIcon />
                )
              ) : null
            }
            </TableCell>
            <TableCell onClick={()=>handleSort('firstname')} align="right">First name
            {columnToSort === 'firstname' ? (
                sortDirection === "asc" ? (
                  <ArrowUpwardIcon />
                ) : (
                  <ArrowDownwardIcon />
                )
              ) : null
            }
            </TableCell>
            <TableCell onClick={()=>handleSort('lastname')} align="right">Last name
            {columnToSort === 'lastname' ? (
                sortDirection === "asc" ? (
                  <ArrowUpwardIcon />
                ) : (
                  <ArrowDownwardIcon />
                )
              ) : null
            }
            </TableCell>
            <TableCell onClick={()=>handleSort('email')} align="right">Email
            {columnToSort === 'email' ? (
                sortDirection === "asc" ? (
                  <ArrowUpwardIcon />
                ) : (
                  <ArrowDownwardIcon />
                )
              ) : null
            }
            </TableCell>
            <TableCell align="right">Edit/Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.customernumber}
              </TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.firstname}</TableCell>
              <TableCell align="right">{row.lastname}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right"> 
                <IconButton onClick={()=>{
                  const r = window.confirm("Sure to Delete the user witth id "+row.id); 
                  if(r === true){
                    handleDelete(row.id)
                     }                     
                   }} >
                  <DeleteIcon></DeleteIcon>
                  </IconButton> 
                <IconButton onClick={()=>{ handleEdit(row.id)}} >
                  <EditIcon></EditIcon>
                </IconButton>
               
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}