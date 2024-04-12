/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customers: [
    {
      name: "phoenix",
      id: "C0001",
      address: "123 Main Street",
      contact: "+1234567890",
      order: "",
      totalSale: "$100",
    },
  ],
};

const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.customers.push(action.payload);
    },
    updateCustomer: (state, action) => {
      const { id, name, address, contact, order, totalSale } = action.payload;
      const existingCustomer = state.customers.find(
        (customer) => customer.id === id
      );
      if (existingCustomer) {
        existingCustomer.name = name;
        existingCustomer.address = address;
        existingCustomer.contact = contact;
        existingCustomer.order = order;
        existingCustomer.totalSale = totalSale;
      }
    },
    deleteCustomer: (state, action) => {
      const { id } = action.payload;
      state.customers = state.customers.filter(
        (customer) => customer.id !== id
      );
    },
  },
});

export const { addCustomer, updateCustomer, deleteCustomer } =
  customerSlice.actions;
export default customerSlice.reducer;
