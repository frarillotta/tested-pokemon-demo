import { useEffect, useState } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from "styled-components";

type StatCircleProps = {
	value: number;
	color: string;
	className: string;
}

const StatCircle = ({value, color, className}: StatCircleProps) => {

	const [progress, setProgress] = useState(0);

	useEffect(()=>{
		const timer = setInterval(()=>{
			setProgress((prevProgress) => {
				if (prevProgress < value) {
					return prevProgress + 1
				} else {
					clearTimeout(timer);
					return value;
				}
			})
		}, 1);

		return () => clearTimeout(timer);
	}, []);

	return 	<Wrapper className={className}>
		<CircularProgress 
			variant="determinate"
			style={{color: color, height: "50px", width: "50px"}}
			value={progress}
		/>
		<StatValueNumberWrapper>
			<StatValueNumber>
				{progress}
			</StatValueNumber>
		</StatValueNumberWrapper>
	</Wrapper>
	
}

const Wrapper = styled.div`
	margin: auto;
	position: relative
`


const StatValueNumberWrapper = styled.div`
	position: absolute;
	top: 0px;
	left: 0px;
	bottom: 0px;
	right: 0px;
	display: flex;
	align-items: center;
	justify-content: center;
`

const StatValueNumber = styled.div`

`

export { StatCircle }