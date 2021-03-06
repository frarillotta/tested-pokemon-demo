async function apiClient(
	endpoint: string
) {

	return fetch(endpoint, {}).then(async response => {
		const data = await response.json()
		if (response.ok) {
			return data
		} else {
			return Promise.reject(data)
		}
	})
}

export {apiClient}
