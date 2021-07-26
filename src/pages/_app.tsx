import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react'

const queryConfig = {
	queries: {
		useErrorBoundary: true,
		refetchOnWindowFocus: false,
		retry(failureCount, error) {
			if (error.status === 404) return false
			else if (failureCount < 2) return true
			else return false
		},
	},
}

function MyApp({ Component, pageProps }: AppProps) {

	const [queryClient] = useState(() => new QueryClient({
		defaultOptions: queryConfig
	}))

	return <QueryClientProvider client={queryClient}>
		<Component {...pageProps} />
	</QueryClientProvider>

}
export default MyApp
