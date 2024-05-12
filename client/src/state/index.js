import { createSlice } from '@reduxjs/toolkit';

const initialState = {
        user: null,
        token: null,
        orders: [],
        origin: "",
        destination: "",
        isRoundTrip: false,
        originAddress: [],
        destinationAddress: [],
        items: [],
        id: "",
        totalCost: null,
        hitCustomApi: false,
        hitOriginApi: false,
        hitDestinationApi: false,
        additionalFreeWeight:0,
        collectionDate: "",
        additionalInfo:"",
        count: null,
        adminLogin: false,
        allItemsAdded: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAllItemsAdded: (state, action) => {
      state.allItemsAdded = action.payload.allItemsAdded;
      console.log("All items added: " + state.allItemsAdded);
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
    setOrigin: (state, action) => {
      state.origin = action.payload.origin;
      console.log(state.origin);
    },
    setDestination: (state, action) => {
      state.destination = action.payload.destination;
      console.log(state.destination);
    },
    setRoundTrip: (state, action) => {
      state.isRoundTrip = action.payload.isRoundTrip;
      console.log(state.isRoundTrip);
    },
    setId: (state, action) => {
      state.id = action.payload.id;
      console.log(state.id);
    },
    setItem: (state, action) => {
      state.items = action.payload.items;
      console.log(state.items);
    },
    addItem: (state, action) => {
      state.items = [...state.items, ...action.payload.items];
    },
    updateItem: (state, action) => {
      const { id, item } = action.payload;
      const index = state.items.findIndex(i => i.id === id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...item };
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;  
      state.items = state.items.filter(item => item.id !== itemId);
    },
    setOrders: (state, action) => {
      state.orders = action.payload.orders;
      console.log(state.orders + "<-- New orders set");
    },
    addOrders: (state, action) => {
      state.orders = [...state.orders, ...action.payload.orders];
      console.log(state.orders + "<-- New orders added");
    },
    setTotalCost: (state, action) => {
      state.totalCost = action.payload.totalCost;
      console.log(state.totalCost);
    },
    setHitCustomApi: (state, action) => {
      state.hitCustomApi = action.payload.hitCustomApi;
      console.log(state.hitCustomApi);
    },
    setHitOriginAddressApi: (state, action) => {
      state.hitOriginApi = action.payload.hitOriginApi;
      console.log(state.hitOriginApi);
    },
    setHitDestinationApi: (state, action) => {
      state.hitDestinationApi = action.payload.hitDestinationApi;
      console.log(state.hitDestinationApi);
    },
    setOriginAddress: (state, action) => {
      state.originAddress = action.payload.originAddress;
      console.log(state.originAddress);
    },
    setDestinationAddress: (state, action) => {
      state.destinationAddress = action.payload.destinationAddress;
      console.log(state.destinationAddress);
    },
     setCollectionDate: (state, action) => {
      state.collectionDate = action.payload.collectionDate;
      console.log(state.collectionDate);
    },
    setCount: (state, action) => {
      state.count = action.payload.count;
      console.log(state.count + "from the state.js");
    },
    setAddInfo: (state, action) => {
      state.additionalInfo = action.payload.additionalInfo;
      console.log(state.additionalInfo + "<-- additional information added to the redux store");
    },
    setAdditionalFreeWeight: (state, action) => {
      state.additionalFreeWeight = action.payload.additionalFreeWeight;
      console.log(state.additionalFreeWeight);
    },
    setAdminLogin: (state, action) => {
      state.adminLogin = action.payload.adminLogin;
      console.log("admin is logged:"+state.adminLogin);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      // Optionally reset other state properties or call resetState
      // resetState(state); // Uncomment if you want to reset all state on logout
    },
    resetState: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { 
               setAllItemsAdded, 
               setUser, 
               setToken,
               setOrders,
               addOrders, 
               setOrigin, 
               setDestination, 
               setId, 
               setItem, 
               setRoundTrip, 
               addItem, 
               updateItem, 
               removeItem,
               setTotalCost, 
               setHitCustomApi, 
               setHitOriginAddressApi, 
               setHitDestinationApi, 
               setOriginAddress, 
               setDestinationAddress, 
               setCollectionDate, 
               setAddInfo, 
               setAdminLogin,  
               resetState, 
               setAdditionalFreeWeight, 
               setCount,
               logout } = authSlice.actions;

// Configure and export the store
// export const store = configureStore({
//   reducer: {
//     auth: authSlice.reducer,
//   },
// });