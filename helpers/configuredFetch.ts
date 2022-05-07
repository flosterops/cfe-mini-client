interface IXMLFetchOptions {
    headers: { [key: string]: string };
}

async function configuredFetch(method: string, url: string, data: any = '', options?: IXMLFetchOptions) {
    const initOptions = {
        method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            ...options?.headers,
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    } as RequestInit;

    if (method !== 'GET') {
        initOptions.body = data;
    }
    return await fetch(url, initOptions);
}

export { configuredFetch };
