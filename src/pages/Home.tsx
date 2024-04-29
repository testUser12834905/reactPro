import React, { useEffect, useState } from "react";
import getQuotes, { QuoteType } from "../api/get-quotes";
import styled from "styled-components";

const QuoteParag = styled.div`
	padding: 20px;
	margin: 40px auto;
	max-width: 800px;
	background-color: gray;
	border-left: 5px solid #3498db;
	color: white;
	font-size: 24px;
	text-align: center;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Home = () => {
	const [quote, setQuote] = useState<QuoteType>();

	useEffect(() => {
		getQuotes().then((res) => setQuote(res));
	}, []);

	return (
		<>
			<div>Home</div>
			<QuoteParag>{quote?.content}</QuoteParag>
		</>
	);
};

export default Home;
