import React, { useEffect, useState } from "react"
import getQuotes from "../api/get-quotes"

const Home = () => {
	const [quote, setQuote] = useState("")

	useEffect(() => {
		getQuotes().then((res) => setQuote(res))
	})

	return (
		<>
			<div>Home</div>
			<p>{quote}</p>
		</>
	)
}

export default Home
