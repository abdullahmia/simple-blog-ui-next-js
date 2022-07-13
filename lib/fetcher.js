import useSWR from "swr";
const baseUrl = process.env.NEXT_PUBLIC_API_URL

const response = (...args) => fetch(...args).then(res => res.json())

export default function Fetcher (endpoints) {
  const { data, error } = useSWR(`${baseUrl}${endpoints}`, response);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}