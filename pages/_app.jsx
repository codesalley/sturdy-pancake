/** @jsxImportSource theme-ui */

import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import Nav from '../src/components/nav'

const App = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>
			<div>
				<Nav />
				<Component {...pageProps} />
			</div>
		</ThemeProvider>
	)
}

export default App