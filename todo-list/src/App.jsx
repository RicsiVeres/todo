import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './App.css';

function App() {
  const [todos, settodos] = useState([]);

  const [newtodo, setnewtodo] = useState({
    id: 0,
    text: "",
    completed: false
  });

  function AddTodo() {
    settodos([...todos, newtodo]); 
    setnewtodo({
      id: todos.length + 1,
      text: "",
      completed: false
    });
  }

  function DeleteRow(id) {
    const updatedTodos = todos.filter(item => item.id !== id); 
    settodos(updatedTodos); 
  }

  return (
    <>
    <div className='inputbox'>
        <TextField
          id='input'
          type="text"
          value={newtodo.text} 
          onChange={(event) => {
            setnewtodo({
              id: todos.length + 1,
              text: event.target.value,
              completed: false
            })
          }}
          placeholder="Enter your todo"
        />
        <Button  variant="contained" color="success" onClick={AddTodo} id='submitbtn'>
          Add
        </Button>
      </div>
    {
      (todos.length  > 0) ? (
        <div  className='container'>
      <TableContainer sx={{margin: "3rem"}}>
        <Table sx={{ minWidth: 650, backgroundColor: "#242424" }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{color:"#fff"}}>
              <TableCell sx={{color:"#fff"}}>No</TableCell>
              <TableCell sx={{color:"#fff"}} align="right">Task</TableCell>
              <TableCell sx={{color:"#fff"}} align="right"> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((target) => (
              <TableRow
                key={target.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{color:"#fff"}} component="th" scope="row">
                  {target.id}
                </TableCell>
                <TableCell sx={{color:"#fff"}} align="right">{target.text}</TableCell>
                <TableCell align="right"><Button variant="outlined" color="error" onClick={() => {
                  DeleteRow(target.id)
                }}>Delete</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
      ):
      (<h1>No have todos!</h1>)
    }
    </>
  );
}

export default App;
