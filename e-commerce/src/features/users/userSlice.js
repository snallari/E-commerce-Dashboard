import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    loading: false,
    users: [],
    error: ""
};

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      return response.data
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = "";
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.users = [];
        });
    }
});

export default userSlice.reducer;