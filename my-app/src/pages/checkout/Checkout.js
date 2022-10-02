import * as React from 'react';
import {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
//import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
//import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
//import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';

/*function Copyright() {
  return (
	<Typography variant="body2" color="text.secondary" align="center">
	  {'Copyright © '}
	  <Link color="inherit" href="https://mui.com/">
		Your Website
	  </Link>{' '}
	  {new Date().getFullYear()}
	  {'.'}
	</Typography>
  );
}*/




const Checkout = () => {
	
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
		
		com_b: 0,
		com_t: 0,
		com_g: 0,
		com_a: 0,
	});
	
	const {food1_name, food2_name, food3_name, food4_name, food5_name,
		   food1_weight, food2_weight, food3_weight, food4_weight, food5_weight,
		   com_b, com_t, com_g, com_a} = inputs;
	
	//const [sum, setSum] = useState(0);
	const [result, setResult] = useState({
		result_1_b: 0,result_1_t: 0,result_1_g: 0,result_1_a: 0,
		result_2_b: 0,result_2_t: 0,result_2_g: 0,result_2_a: 0,
		result_3_b: 0,result_3_t: 0,result_3_g: 0,result_3_a: 0,
		result_4_b: 0,result_4_t: 0,result_4_g: 0,result_4_a: 0,
		result_5_b: 0,result_5_t: 0,result_5_g: 0,result_5_a: 0,
	})
	
	const {result_1_b, result_1_g, result_1_t, result_1_a,
		  result_2_b, result_2_g, result_2_t, result_2_a,
		  result_3_b, result_3_g, result_3_t, result_3_a,
		  result_4_b, result_4_g, result_4_t, result_4_a,
		  result_5_b, result_5_g, result_5_t, result_5_a,} = result;
	
	
	
	
	
  const steps = ['음식 무게 입력', '식수 인원 입력', '결과 확인'];

  const highFunction = (text, next) => {
	  
	  setInputs({
		  ...inputs,
		  
		  ["food1_name"]: text.food1_name,
		  ["food2_name"]: text.food2_name,
		  ["food3_name"]: text.food3_name,
		  ["food4_name"]: text.food4_name,
		  ["food5_name"]: text.food5_name,
		  
		  ["food1_weight"]: text.food1_weight,
		  ["food2_weight"]: text.food2_weight,
		  ["food3_weight"]: text.food3_weight,
		  ["food4_weight"]: text.food4_weight,
		  ["food5_weight"]: text.food5_weight,
	  })
	  
	  
	if (next === true) setActiveStep(activeStep + 1);
	  
	  
  }
  
  const memberCount = (count) => {
	  //console.log(count);
	  setActiveStep(activeStep + 1);
	  
	  setInputs({
		  ...inputs,
		  ["com_b"]: count.com_b,
		  ["com_t"]: count.com_t,
		  ["com_g"]: count.com_g,
		  ["com_a"]: count.com_a,
	  });
	  
	  console.log(inputs);
  }


  const getStepContent = (step) => {
  switch (step) {
	case 0:
	  return <AddressForm propFunction={highFunction} />;
	case 1:
	  return <PaymentForm propFunction={memberCount} />;
	case 2:
	  return <Review datas={inputs}/>;
	default:
	  throw new Error('Unknown step');
  }
}
	
	
  const theme = createTheme();

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
	setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
	setActiveStep(activeStep - 1);
  };

  return (
	<ThemeProvider theme={theme}>
	  <CssBaseline />
	  <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
		<Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
		  <Typography component="h1" variant="h4" align="center">
			똑똑한 취사
		  </Typography>
		  <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
			{steps.map((label) => (
			  <Step key={label}>
				<StepLabel>{label}</StepLabel>
			  </Step>
			))}
		  </Stepper>
		  <React.Fragment>
			  <React.Fragment>
				
				{getStepContent(activeStep)}
		
			  </React.Fragment>
		  </React.Fragment>
		</Paper>
	  </Container>
	</ThemeProvider>
  );
}

export default Checkout;