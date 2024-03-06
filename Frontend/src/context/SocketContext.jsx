import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext, useAuthContext } from "./AuthContext";
import React from "react";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
};


export const SocketContextProvider = ({ children  }) => {
    const [socket,setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();


    useEffect(() =>{
        // Create a new web socket connection.
        if(authUser){
            const socket = io("https://mern-chat-app-k2yy.onrender.com/",{
                query: {
                    userId: authUser._id,
                },
            });

            setSocket(socket);

    // Socket.on() is used to listen to the events. can be used both on client and server side

            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });

            return () => socket.close();
        }else {
            if(socket){
                socket.close();
                setSocket(null);
            }

        }
    },[authUser]);
    return <SocketContext.Provider value={{socket,onlineUsers}}>{children}</SocketContext.Provider>
}