import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: "/data/women"}),
    endpoints: (build) => ({
            getAllProducts: build.query({
                query: () => "jeans.json",
            })
        })
})

export const { useGetAllProductsQuery } = productsApi