import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { persister, store } from './store/Store'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.render(
 
    

<Provider store={store} >
    <PersistGate persistor={persister}>
<App />

</PersistGate>  
</Provider>
, 

document.getElementById('root'))
registerServiceWorker()
