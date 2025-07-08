import{configureStore} from "@reduxjs/toolkit"
import cakeReducer from "../features/cake/cakeSlice.js"
import iceCreamReducer from "../features/icecream/icecreamSlice.js"
import userReducer from "../features/users/userSlice.js"
import productReducer from "../components/ProductSlicer.js"

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream:iceCreamReducer,
        user:userReducer,
        product:productReducer
    }
});

export default store;