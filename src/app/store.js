import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi} from '../services/cryptoNewsApi';


export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,  //connects the api in cryptoApi and gets every sate update
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(cryptoApi.middleware)
       
    
        
});