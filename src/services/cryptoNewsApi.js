import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'ac29500ddemshc3f87e2b7a795c0p1afc75jsn12bb951a5386',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders })               //function to add url and headers to an api call


export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',                             //for what is reducer used for
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormula=Raw&freshness=Day&count=${count}`),          // we will get all the exchanges
        })
    })
});

export const {useGetCryptoNewsQuery} = cryptoNewsApi;