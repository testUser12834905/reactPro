const getQuotes = async () => {
	const data = await fetch("https://quotes.rest/qod?language=en", {
		method: "GET",
	})

	return data.json()
}

export default getQuotes
