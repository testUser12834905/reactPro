import React, { useEffect, useState } from "react"
import getQuotes, { QuoteType } from "../api/get-quotes"

const Home = () => {
	const [quote, setQuote] = useState<QuoteType>()

	useEffect(() => {
		getQuotes().then((res) => setQuote(res))
	}, [])

	return (
		<>
			<div>Home</div>
			<p>{quote?.content}</p>
		</>
	)
}

export default Home
