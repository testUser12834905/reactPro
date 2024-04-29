import { Outlet } from "react-router-dom"

const RootLayout = () => {
	return (
		<header className="App-header">
			Nav bar
			<Outlet />
		</header>
	)
}

export default RootLayout
