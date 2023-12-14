import { configureStore } from "@reduxjs/toolkit";
import dataReducer, {fetchData} from "../features/dataSlice";
import tableReducer from "../features/tableSlice";
import dropdownReducer from '../features/dropdownSlice';

const store = configureStore({
    reducer: {
        data: dataReducer,
        table: tableReducer,
        dropdown: dropdownReducer
    }
})

store.dispatch(fetchData());

export default store;