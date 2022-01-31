import React from 'react';
import '../styles/globals.css';
import io from 'socket.io-client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor} from '../redux/store';

function MyApp({ Component, pageProps }) {
  const [socket, setSocket] = React.useState(null);
    const setupSocket = () => {
        var user = store.getState()?.user?.currentUser;
        if(user && user.length>0 && !socket){
            const newSocket = io("http://localhost:8000", {
                query: {
                    id: isAuth()._id
                },secure : true 
            });
            newSocket.on('disconnect', () => {
                setSocket(null);
                setTimeout(setupSocket,5000);
                console.log("Socket disconnected");
            });
            newSocket.on("connect", () => {
                console.log("Socket Connnected");
            });
            console.log(socket);
            setSocket(newSocket);
        }
    };
    React.useEffect(() => {
        setupSocket();
        //eslint-disable-next-line
    },[]);
  return <Provider store={store} >
            <PersistGate persistor={persistor}>
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
}

export default MyApp
