import * as React from 'react';
import {useState} from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const PaymentForm = (props) => {
	
	const [inputs, setInputs] = useState({
		com_b: 0,
		com_t: 0,
		com_g: 0,
		com_a: 0,
	})
	
	const onChange = (e) => {
		const value = parseInt(e.target.value);
		const id = e.target.id;
		
		setInputs({
			...inputs,
			[id]: value
		})
	}
	
	const onClick = (e) => {
		props.propFunction(inputs);
	}
	
	
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        중대별 식수 인원을 입력하세요
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6} md={3}>
          <TextField
            required
            id="com_b"
            label="본부"
			type="number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
			InputProps={{
					endAdornment: <InputAdornment position="end">명</InputAdornment>
				}}
			onChange={onChange}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            required
            id="com_t"
            label="탄약"
			type="number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
			InputProps={{
					endAdornment: <InputAdornment position="end">명</InputAdornment>
				}}
			onChange={onChange}
          />
        </Grid>
		<Grid item xs={6} md={3}>
          <TextField
            required
            id="com_g"
            label="경비"
			type="number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
			InputProps={{
					endAdornment: <InputAdornment position="end">명</InputAdornment>
				}}
			onChange={onChange}
          />
        </Grid>
		<Grid item xs={6} md={3}>
          <TextField
            required
            id="com_a"
            label="간부 식수"
			type="number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
			InputProps={{
					endAdornment: <InputAdornment position="end">명</InputAdornment>
				}}
			onChange={onChange}
          />
        </Grid>
      </Grid>
	  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
		<Button
		  variant="contained"
		  onClick={onClick}
		  sx={{ mt: 3, ml: 1 }}
		  >
		  제출
		</Button>
	  </Box>
    </React.Fragment>
  );
}

export default PaymentForm;