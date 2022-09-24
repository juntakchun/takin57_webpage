import React, {useState} from 'react';

const Input = () => {
	const [inputs, setInputs] = useState({
		com_b: 0,
		com_t: 0,
		com_g: 0,
	});
	
	const {com_b, com_t, com_g} = inputs;
	const [sum, setSum] = useState(0);
	
	const onChange = (e) => {
		const value = parseInt(e.target.value);
		const id = e.target.id;
		

		//setSum(com_b + com_t + com_g);
	
		setInputs({
			...inputs,
			[id]: value
		});
		
	}
	
	const onClick = (e) => {
		setSum(com_b+com_t+com_g)
	}
	
	
	
	return (
		<div>
			<h1>똑똑한 준탁이</h1>
			
			<div>
				<h2>오늘의 메뉴</h2>
				<span>
					<input type="text" value="음식 1: "></input>
					<input type="number" value='0'></input>
					
				</span>
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
			
			
			<button onClick={onClick}>계산하기</button>
		<p>num: {com_b} | {com_t} | {com_g}</p> | <input id="sum" value={sum}></input>
		</div>
		
		
	);
};

export default Input;