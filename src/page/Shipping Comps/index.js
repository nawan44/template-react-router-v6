import React, { useState, useEffect } from "react"
import { styled } from '@mui/material/styles';
import { Outlet, Link } from "react-router-dom";

import TopBar from "../../component/view/appBar";
import avatar from "../../assets/avatar/avatar.png"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import AddCircleIcon from '@mui/icons-material/AddCircle';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const ShippingComps = (props) => {
  const [formData, setFormData] = useState({
    user: {
      username: "",
      password: ""
    },
  });

  const handleChange = (e) => {
    setFormData({
      user: {
        ...formData.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div>
      <Grid item xs={8} style={{ margin: "100px 0 0 280px" }} className="bg-white">
        <Paper className="p-10">
          <Grid container spacing={2}>
            <Grid item xs={8} style={{paddingTop:"25px"}}>
              <Typography style={{ float: "left", fontWeight: "bold", fontSize: "24px" }} className="">Shipping Comps</Typography>
                
                <Link to="/add-shipping-comps" >
                <AddCircleIcon color="primary" style={{ float: "left", marginLeft: "10px", fontSize: 36 }} />
                </Link>
            </Grid>
            <Grid item xs={4} >
              <FormControl 
              // sx={{ m: 1, width: '25ch' }}
               variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  // type={values.showPassword ? 'text' : 'password'}
                  // value={values.password}
                  // onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="start">
                      <SearchIcon />
                      {/* <IconButton
                  aria-label="toggle password visibility"
                  // onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {/* {values.showPassword ? <VisibilityOff /> : <Visibility />} 
                </IconButton> */}
                    </InputAdornment>
                  }
                  placeholder="Cari"
                />
              </FormControl>
            </Grid>
          </Grid>


          <Table stickyHeader aria-label="sticky table" className="mt-14">
            <TableHead>
              <TableRow style={{ backgroundColor: "grey" }}>
                <TableCell style={{ border: "none", backgroundColor: "grey", borderRadius: "10px", fontWeight: "bold" }}  >
                  Nama
                </TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {/* {listDataPemeliharaan &&
              listDataPemeliharaan.map((itemPemeliharaan) => ( */}
              <TableRow
              //   key={itemPemeliharaan.id}
              //   onClick={() => {
              //     // console.log("---------???", item);
              //     setSelectPemeliharaan({
              //       aksiPemeliharaan: "lihatData",
              //       itemPemeliharaan,
              //     });

              //     setOpen("firstDialog", {
              //       ...open,
              //       dialogAksi: !dialogAksi,
              //     });
              //   }}
              >
                <TableCell>
                  {/* {itemPemeliharaan.nama_pengemudi} */}
                  Aku
                </TableCell>

              </TableRow>
              {/* ))} */}
            </TableBody>
          </Table>
        </Paper>
      </Grid>


    </div>
  );
}
export default ShippingComps



