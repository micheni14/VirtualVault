import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  overrideExisting:true,
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      query: (data) => ({
        url: "/api/category/add",
        method: "POST",
        body: data,
      }),
    }),
    getShowCategory: builder.query({
      query: () => "http://api.virtualvault.lol/api/categories"
    }),
    getProductTypeCategory: builder.query({
      query: (categoryId) => ` http://api.virtualvault.lol/api/categories/${categoryId}`
    }),
  }),
});

export const {
 useAddCategoryMutation,
 useGetProductTypeCategoryQuery,
 useGetShowCategoryQuery,
} = categoryApi;
