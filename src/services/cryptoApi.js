import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'ac29500ddemshc3f87e2b7a795c0p1afc75jsn12bb951a5386',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'

}

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })                                                //function to add url and headers to an api call

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',                             //for what is reducer used for
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),          // we will get all the exchanges
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),


        getCryptoHistory: builder.query({
            query:  ({ coinId, timeperiod  }) => createRequest(`coin/${coinId}/history?timePeriod=${timeperiod}`)
        }),
        //   // Note: To access this endpoint you need premium plan
        //   getExchanges: builder.query({
        //     query: () => createRequest('/exchanges'),
        //   }),

    })
});

//hook to get all data for the query
export const { useGetCryptosQuery, useGetCryptoDetailsQuery,  useGetCryptoHistoryQuery,
} = cryptoApi;