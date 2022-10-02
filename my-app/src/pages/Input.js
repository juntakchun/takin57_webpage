import React, {useState} from 'react';
import Button from '@mui/material/Button';

const Input = () => {
	const [inputs, setInputs] = useState({
		
		food_1: 0,
		food_2: 0,
		food_3: 0,
		food_4: 0,
		food_5: 0,
		
		com_b: 0,
		com_t: 0,
		com_g: 0,
		com_a: 0,
	});
	
	const {food_1, food_2, food_3, food_4, food_5, com_b, com_t, com_g, com_a} = inputs;
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
	
	/*const [result, setResult] = useState([
		{
			id: 1,
			name: '음식 1',
			cal_b: 0,
			cal_t: 0,
			cal_g: 0,
		},
		{
			id: 2,
			name: '음식 2',
			cal_b: 0,
			cal_t: 0,
			cal_g: 0,
		},
		{
			id: 3,
			name: '음식 3',
			cal_b: 0,
			cal_t: 0,
			cal_g: 0,
		},
		{
			id: 4,
			name: '음식 4',
			cal_b: 0,
			cal_t: 0,
			cal_g: 0,
		},
		{
			id: 5,
			name: '음식 5',
			cal_b: 0,
			cal_t: 0,
			cal_g: 0,
		},
	]);*/
	
	const onChange = (e) => {
		const value = parseFloat(e.target.value);
		const id = e.target.id;
			
		setInputs({
			...inputs,
			[id]: value
		});
		console.log(inputs);
		console.log(inputs);
	}
	

	
	const onClick = (e) => {
		var sum = com_b + com_t + com_g + com_a;
		
		setResult({
		result_1_b: (food_1*com_b/sum).toFixed(2),result_1_t: (food_1*com_t/sum).toFixed(2),result_1_g: (food_1*com_g/sum).toFixed(2),result_1_a: (food_1*com_a/sum).toFixed(2),
		result_2_b: (food_2*com_b/sum).toFixed(2),result_2_t: (food_2*com_t/sum).toFixed(2),result_2_g: (food_2*com_g/sum).toFixed(2),result_2_a: (food_2*com_a/sum).toFixed(2),
		result_3_b: (food_3*com_b/sum).toFixed(2),result_3_t: (food_3*com_t/sum).toFixed(2),result_3_g: (food_3*com_g/sum).toFixed(2),result_3_a: (food_3*com_a/sum).toFixed(2),
		result_4_b: (food_4*com_b/sum).toFixed(2),result_4_t: (food_4*com_t/sum).toFixed(2),result_4_g: (food_4*com_g/sum).toFixed(2),result_4_a: (food_4*com_a/sum).toFixed(2),
		result_5_b: (food_5*com_b/sum).toFixed(2),result_5_t: (food_5*com_t/sum).toFixed(2),result_5_g: (food_5*com_g/sum).toFixed(2),result_5_a: (food_5*com_a/sum).toFixed(2),
		})
	}
	
	//const list = result.map((idx) => (<div>{idx.name} : { }</div>));
	
	
	
	
	return (
		<div>
			<h1>똑똑한 취사</h1>
			
			<div>
				<h2>오늘의 메뉴</h2>
				<div>
					<label>음식 1: </label>
					<input type="number" id="food_1" value={food_1} onChange={onChange}></input>
				</div>
				<div>
					<label>음식 2: </label>
					<input type="number" id="food_2" value={food_2} onChange={onChange}></input>
				</div>
				<div>
					<label>음식 3: </label>
					<input type="number" id="food_3" value={food_3} onChange={onChange}></input>
				</div>
				<div>
					<label>음식 4: </label>
					<input type="number" id="food_4" value={food_4} onChange={onChange}></input>
				</div>
				<div>
					<label>음식 5: </label>
					<input type="number" id="food_5" value={food_5} onChange={onChange}></input>
				</div>
			</div>
			
			
			<h2>식수인원s</h2>
			<div>
				<label>본부: </label>
				<input type="number" id="com_b" value={com_b} onChange={onChange}/>
			</div>
			<div>
				<label>탄약: </label>
				<input type="number" id="com_t" value={com_t} onChange={onChange}/>
			</div>
			<div>
				<label>경비: </label>
				<input type="number" id="com_g" value={com_g} onChange={onChange}/>
			</div>
			<div>
				<label>간부: </label>
				<input type="number" id="com_a" value={com_a} onChange={onChange}/>
			</div>
			<div>
				<Button variant="contained" onClick={onClick}>계산하기</Button>
			</div>
		
			<h2>결과</h2>
			<div>
				<p>음식량 (kg): 음식1({food_1}) | 음식2({food_2}) | 음식3({food_3}) | 음식4({food_4}) | 음식5({food_5})</p>
				<p>식수인원(명): 본부({com_b}) | 탄약({com_t}) | 경비({com_g}) | 간부({com_a})</p>
				<div>
					<p>음식1: 본부({result_1_b}) | 탄약({result_1_t}) | 경비({result_1_g}) | 간부({result_1_a})</p>
					<p>음식2: 본부({result_2_b}) | 탄약({result_2_t}) | 경비({result_2_g}) | 간부({result_2_a})</p>
					<p>음식3: 본부({result_3_b}) | 탄약({result_3_t}) | 경비({result_3_g}) | 간부({result_3_a})</p>
					<p>음식4: 본부({result_4_b}) | 탄약({result_4_t}) | 경비({result_4_g}) | 간부({result_4_a})</p>
					<p>음식5: 본부({result_5_b}) | 탄약({result_5_t}) | 경비({result_5_g}) | 간부({result_5_a})</p>
				</div>
			</div>
		</div>
		
		
	);
};

export default Input;