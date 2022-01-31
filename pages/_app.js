import React from 'react';
import '../styles/globals.css';
import io from 'socket.io-client';


function MyApp({ Component, pageProps }) {

  const [socket, setSocket] = React.useState(null);
    const setupSocket = () => {
        var user = localStorage.getItem('user');
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
  return <Component {...pageProps} />
}

export default MyApp
