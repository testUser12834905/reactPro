import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import RootLayout from "./layout"
import Home from "./pages/Home"

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<RootLayout />}>
						<Route index element={<Home />} />
						{/* <Route path="blogs" element={<Blogs />} /> */}
						{/* <Route path="contact" element={<Contact />} /> */}
						{/* <Route path="*" element={<NoPage />} /> */}
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
