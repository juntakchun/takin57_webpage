import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




const Review = (props) => {
	
	
  const foods = [
  {
    name: props.datas.food1_name,
    desc: '음식 1',
    price: props.datas.food1_weight,
  },
  {
    name: props.datas.food2_name,
    desc: '음식 2',
    price: props.datas.food2_weight,
  },
  {
    name: props.datas.food3_name,
    desc: '음식 3',
    price: props.datas.food3_weight,
  },
  
  ];

	const counts = [
		{
			name: '본부',
			number: props.datas.com_b,
		},
		{
			name: '탄약',
			number: props.datas.com_t,
		},
		{
			name: '경비',
			number: props.datas.com_g,
		},
		{
			name: '간부',
			number: props.datas.com_a,
		},
	];

	const createData = (
	  name: string,
  	  weight_b: number,
  	  weight_t: number,
  	  weight_g: number,
  	  weight_a: number,
	) => {
		return { name, weight_b, weight_t, weight_g, weight_a }
	};
	
	const sum = props.datas.com_b + props.datas.com_t +
		  props.datas.com_g + props.datas.com_a;
	
	const rows = [
	  createData(props.datas.food1_name, 
				 props.datas.food1_weight*props.datas.com_b/sum, 
				 props.datas.food1_weight*props.datas.com_t/sum,
				 props.datas.food1_weight*props.datas.com_g/sum,
				 props.datas.food1_weight*props.datas.com_a/sum),
	  createData(props.datas.food2_name, 
				 props.datas.food2_weight*props.datas.com_b/sum, 
				 props.datas.food2_weight*props.datas.com_t/sum,
				 props.datas.food2_weight*props.datas.com_g/sum,
				 props.datas.food2_weight*props.datas.com_a/sum),
	  createData(props.datas.food3_name, 
				 props.datas.food3_weight*props.datas.com_b/sum, 
				 props.datas.food3_weight*props.datas.com_t/sum,
				 props.datas.food3_weight*props.datas.com_g/sum,
				 props.datas.food3_weight*props.datas.com_a/sum),
  //createData('Cupcake', 305, 3.7, 67, 4.3),
  //createData('Gingerbread', 356, 16.0, 49, 3.9),
];

	
	
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
    	음식 및 무게
      </Typography>
      <List disablePadding>
        {foods.map((food) => (
          <ListItem key={food.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={food.name} />
            <Typography variant="body2">{food.price} kg</Typography>
          </ListItem>
        ))}
      </List>
		  
	  <Typography variant="h6" gutterBottom>
    	<br/>중대별 식수 인원
      </Typography>
      <List disablePadding>
        {counts.map((count) => (
          <ListItem key={count.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={count.name} />
            <Typography variant="body2">{count.number} 명</Typography>
          </ListItem>
        ))}
      </List>

		  
	  <Typography variant="h6" gutterBottom>
    	<br/>결과
      </Typography>
	
	  <TableContainer component={Paper}>
		  <Table sx={{ minWidth: 300 }} aria-label="simple table">
			<TableHead>
			  <TableRow>
				<TableCell>음식</TableCell>
				<TableCell align="right">본부</TableCell>
				<TableCell align="right">탄약</TableCell>
				<TableCell align="right">경비</TableCell>
				<TableCell align="right">간부</TableCell>
			  </TableRow>
			</TableHead>
			<TableBody>
			  {rows.map((row) => (
				<TableRow
				  key={row.name}
				  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
				>
				  <TableCell component="th" scope="row">
					{row.name}
				  </TableCell>
				  <TableCell align="right">{(row.weight_b).toFixed(2)}</TableCell>
				  <TableCell align="right">{(row.weight_t).toFixed(2)}</TableCell>
				  <TableCell align="right">{(row.weight_g).toFixed(2)}</TableCell>
				  <TableCell align="right">{(row.weight_a).toFixed(2)}</TableCell>
				</TableRow>
			  ))}
			</TableBody>
		  </Table>
      </TableContainer>
      
    </React.Fragment>
  );
}

export default Review;