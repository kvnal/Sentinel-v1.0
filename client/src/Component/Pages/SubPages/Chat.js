import { useEffect,useRef,useState } from "react";
import {io} from "socket.io-client"
import ChatBubble from "../../cards/ChatBubble";

const Chat = () => {
    const [socket, setSocket] = useState();
    const [chat, setChat] = useState([]);
    const [userOnline, setUserOnline] = useState(1);
    const inpRef = useRef();
    const scrollRef = useRef();

    useEffect(()=>{
        setSocket(io("ws://localhost:4004"))
    },[])

    useEffect(()=>{
    socket?.on('detail',(data)=> setUserOnline(data.message))
    socket?.on('chat',(data)=>{
        console.log(data);
        setChat(chat=>[...chat, data]);

    })
    },[socket])

    const sendMsg = ()=>{
        if(!inpRef.current.value)
            return 0; 
        socket?.emit('chat',{message :inpRef.current.value , handle : socket.id})
        inpRef.current.value =""
        scrollRef?.current?.scrollIntoView({block: 'end',
        inline: 'nearest'})
    }

    return (
        <div>
            <div className="sticky top-6 bg-sentinel-layer1-blue">
            
            {socket && <span className="flex justify-between  bg-green-400 px-2"> 
                <span>
                    ● Connected
                </span>
                <span className="font-bold ">
                  {userOnline} Users Online
                </span>
                   </span>}

            <span className="block text-center italic text-gray-300 my-4  border-b border-gray-300 pb-2 shadow-md">Messages</span>
            </div>
            <div className="mb-32" ref={scrollRef}>
            {
                chat &&
                chat.map(Element =>(
                    <ChatBubble  selfID={socket.id} chatElement={Element}/>
                ))
            }
            </div>
            <div className="bottom-0 fixed left-0 right-0 mb-10 px-2 py-4 bg-sentinel-body-blue max-w-full">
            
            <div className="flex justify-between h-10 bg-sentinel-l3-g-blue border-sentinel-l2-g-blue border-2">
            <input type="text" className="px-2 text-white max-w-full chatBox outline-none bg-sentinel-l3-g-blue"  onKeyPress={(e)=> e.key =="Enter"? sendMsg() : null }  ref={inpRef} />
            <button className="px-2 bg-sentinel-l2-g-blue font-semibold text-sentinel-body-blue" onClick={sendMsg}>Send</button>
            </div>
            </div>
        </div>
    );
}
 
export default Chat;