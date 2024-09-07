import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../types/users";
import { BASE_URL } from "../constants/baseURL";
import { HTTPAction } from "../enums/HTTPActions";

/*
 * Creating an API service with RTK Query
 *
 * 1. **`reducerPath`**: Defines the slice name in the Redux store as "users".
 * 2. **`baseQuery`**: Configures the base query using `fetchBaseQuery` with the provided `BASE_URL`.
 * 3. **Endpoints**:
 *    - **`getUsers`**: A query endpoint to fetch all users. It sends a GET request to `/users`.
 *    - **`addUsers`**: A mutation endpoint to add a new user. It sends a POST request to `/users` with the user data in the request body.
 *
 * The `useGetUsersQuery` and `useAddUsersMutation` hooks are auto-generated for use in React components.
 */
export const userAPI = createApi({
  reducerPath: "Users",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    // Get all users
    getUsers: builder.query<User[], void>({
      query: () => `/users`,
      providesTags: ["Users"],
    }),

    // Mutation to add User
    addUsers: builder.mutation<User, Partial<User>>({
      query: (user: User) => ({
        url: "/users",
        method: HTTPAction.POST,
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),

    // Mutation to delete User
    deleteUser: builder.mutation<User, Pick<User, "id"> & Partial<User>>({
      query: (id) => ({
        url: `/user/${id}`,
        method: HTTPAction.DELETE,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useGetUsersQuery, useAddUsersMutation, useDeleteUserMutation } =
  userAPI;
