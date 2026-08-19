import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error('Failed to fetch data' + res.status);
            }
            const data = await res.json();
            setData(data);
        } catch (error) {
            setError(error)
        }
        finally {
            setIsLoading(false);
        }
    }
    getData()
}, [url])

return { data, isLoading, error };
}