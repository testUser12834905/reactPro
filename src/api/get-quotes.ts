export type QuoteType = {
	_id: string
	content: string
	author: string
	tags: string[]
	authorSlug: string
	length: number
	dateAdded: string
	dateModified: string
}

const getQuotes = async (): Promise<QuoteType> => {
	const data = await fetch("https://api.quotable.io/random", {
		method: "GET",
	})

	return data.json()
}

export default getQuotes
