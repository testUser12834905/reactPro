import React from "react";
import Home from "./Home";
import getQuotes, { QuoteType } from "../api/get-quotes";
import { render, screen } from "@testing-library/react";

jest.mock("../api/get-quotes");

const mockGetQuotes = getQuotes as jest.MockedFunction<typeof getQuotes>;

describe("Home", () => {
	it("should render the page with the received quote", async () => {
		const mockQuote = {
			content: "Test Quote of the Day",
		};

		mockGetQuotes.mockResolvedValue(mockQuote as QuoteType);

		render(<Home />);

		const linkElement = await screen.findByText("Test Quote of the Day");
		expect(linkElement).toBeInTheDocument();
	});
});
