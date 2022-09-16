import { Fetcher } from 'swr'
import axios from 'axios'
import { News } from '../Types/Posts';

export const cardFetcher: Fetcher<News> = (url: string) => axios.get(url).then(res => res.data)