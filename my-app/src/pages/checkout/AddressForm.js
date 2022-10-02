import * as React from 'react';
import {useState} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';

const AddressForm = (props) => {
	
	const [inputs, setInputs] = useState({
		
		food1_name: "음식 1",
		food2_name: "음식 2",
		food3_name: "음식 3",
		food4_name: "음식 4",
		food5_name: "음식 5",
		
		food1_weight: 0,
		food2_weight: 0,
		food3_weight: 0,
		food4_weight: 0,
		food5_weight: 0,		
	});
	
	//const {food1_name, food2_name, food3_name, food4_name, food5_name,
	//	  food1_weight, food2_weight, food3_weight, food4_weight, food5_weight} = inputs
	
	const onChangeName = (e) => {
		const value = e.target.value;
		const id = e.target.id;
		
		setInputs({
			...inputs,
			[id]: value
		});
		
	}
	
	const onChangeWeight = (e) => {
		const value = parseFloat(e.target.value);
		const id = e.target.id;
		
		setInputs({
			...inputs,
			[id]: value
		});
		
	}
	
	const onClick = (e) => {
		props.propFunction(inputs, true);
	}
	
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        음식 이름과 무게를 입력하세요
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            id="food1_name"
            name="food1_name"
            label="음식 1"
            fullWidth
            autoComplete="given-name"
            variant="standard"
			defaultValue="음식 1"
			onChange={onChangeName}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            id="food1_weight"
            name="food1_weight"
            label="무게"
			type="number"
			defaultValue='0'
            fullWidth
            autoComplete="family-name"
            variant="standard"
			InputProps={{
					endAdornment: <InputAdornment position="end">kg</InputAdornment>
			}}
			onChange={onChangeWeight}
          />
        </Grid>
		<Grid item xs={6} sm={6}>
          <TextField
            required
            id="food2_name"
            name="food2_name"
            label="음식 2"
            fullWidth
            autoComplete="given-name"
            variant="standard"
			defaultValue="음식 2"
			onChange={onChangeName}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            id="food2_weight"
            name="food2_weight"
            label="무게"
			type="number"
			defaultValue='0'
            fullWidth
            autoComplete="family-name"
            variant="standard"
			InputProps={{
					endAdornment: <InputAdornment position="end">kg</InputAdornment>
				}}
			onChange={onChangeWeight}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            id="food3_name"
            name="food3_name"
            label="음식 3"
            fullWidth
            autoComplete="given-name"
            variant="standard"
			defaultValue="음식 3"
			onChange={onChangeName}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            id="food3_weight"
            name="food3_weight"
            label="무게"
			type="number"
			defaultValue='0'
            fullWidth
            autoComplete="family-name"
            variant="standard"
			InputProps={{
					endAdornment: <InputAdornment position="end">kg</InputAdornment>
				}}
			onChange={onChangeWeight}
          />
        </Grid>
		
      </Grid>
	  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
		<Button
		  variant="contained"
		  onClick={onClick}
		  sx={{ mt: 3, ml: 1 }}
		  >
		  다음
		</Button>
	  </Box>
    </React.Fragment>
  );
}

export default AddressForm;