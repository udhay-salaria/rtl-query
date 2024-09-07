import { configureStore } from "@reduxjs/toolkit";
import { userAPI } from "../slices/userSlice";
import { setupListeners } from "@reduxjs/toolkit/query/react";

/*
 * Configuring the Redux store with RTK Query
 *
 * 1. **Reducer Configuration**: Adds `userAPI`'s reducer to the store. This handles API-related state such as loading, error, and success.
 * 2. **Middleware Setup**: Enhances the store's default middleware by including `userAPI` middleware, which manages caching, fetching, and synchronizing API state.
 * 3. **Listeners Setup**: Calls `setupListeners` with `store.dispatch` to enable automatic refetching when the app regains focus or reconnects to the network.
 */
export const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAPI.middleware),
});

setupListeners(store.dispatch);
