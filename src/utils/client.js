async function client(
  endpoint,
  {data, token, headers: customHeaders, ...customConfig} = {},
) {
  const config = {
    method: data ? 'POST' : 'GET',
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      'Content-Type': data ? 'application/json' : undefined,
      ...customHeaders,
    },
    ...customConfig,
  };

  return window.fetch(endpoint, config).then(async response => {
    console.log(endpoint, response);
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw data;
    }
  });
}

export {client};
