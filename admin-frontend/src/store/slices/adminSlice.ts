import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { selectAuth } from "./authSlice";
import { RootState } from "../index"; // Update the path based on your project structure
import { count } from "node:console";

interface AdminState {
  orders: number;
  customers: number;
  farmers: number;
  deliveryAgents: number;
  loading: boolean;
  error: string | null;
}

const initialState: AdminState = {
  orders: 0,
  customers: 0,
  farmers: 0,
  deliveryAgents: 0,
  loading: false,
  error: null,
};

export const fetchStats = createAsyncThunk(
  "admin/fetchStats",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const { token } = selectAuth(state);

    const [ordersRes, customersRes, farmersRes, deliveryAgentsRes] =
      await Promise.all([
        axios.get("http://localhost:3800/api/orders/api/orders", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get(
            "http://localhost:3800/api/customers/api/customers",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          ),
          axios.get(
            "http://localhost:3800/api/farmers/api/farmers",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          ),
          axios.get(
            "http://localhost:3800/api/delivery/agents",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          ),
      ]);
    return {
      orders: ordersRes.data.length,
      customers: customersRes.data.data.length,
      farmers: farmersRes.data.length,
      deliveryAgents: deliveryAgentsRes.data.length,
    };
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStats.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload.orders;
        state.customers = action.payload.customers;
        state.farmers = action.payload.farmers;
        state.deliveryAgents = action.payload.deliveryAgents;
      })
      .addCase(fetchStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "Failed to fetch stats";
      });
  },
});

export default adminSlice.reducer;
