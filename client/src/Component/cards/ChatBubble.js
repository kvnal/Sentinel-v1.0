const ChatBubble = ({selfID, chatElement}) => {
    return (<div>
        {
            chatElement.handle == selfID ?
        <div className="mt-2 w-max  flex p-1 bg-sentinel-l3-g-blue border-l-4 border-sentinel-l2-g-blue text-sentinel-body-blue">
            <div className="h-10 w-10">
            <img className="w-max border-sentinel-l2-g-blue border-0 bg-white rounded-full" src={`https://avatars.dicebear.com/api/personas/${chatElement.handle}.svg`} alt="" />
            </div>
            <span className="px-2 text-white text-md ">{chatElement.message}</span>

        </div> :
        
        <div className="mt-2  flex p-1 border-l-4 border-red-400  bg-sentinel-l3-g-blue ">
          <div className="h-10 w-10">
            <img className="w-max border-sentinel-l2-g-blue border-0  bg-white rounded-full" src={`https://avatars.dicebear.com/api/personas/${chatElement.handle}.svg`} alt="" />
            </div>
            <p className="px-2 text-right text-md">{chatElement.message}</p>
        </div>
}
        {/* {
            chatElement.handle == selfID ?
        <div className="mt-2 CBSelf flex p-1 w-1/2  rounded-t-lg rounded-bl-lg bg-sentinel-l2-g-blue text-sentinel-body-blue">
            <p className="px-2 text-md ">{chatElement.message}</p>
            <div className="">
            <img className="w-10 border-sentinel-body-blue border-2 bg-white rounded-full" src={`https://avatars.dicebear.com/api/personas/${chatElement.handle}.svg`} alt="" />

            </div>
        </div> :
        
        <div className="mt-2 CBClient flex p-1 rounded-t-lg rounded-br-lg bg-sentinel-l3-g-blue ">
          <div className="">
            <img className="w-10 border-sentinel-l2-g-blue border-2 bg-white rounded-full" src={`https://avatars.dicebear.com/api/personas/${chatElement.handle}.svg`} alt="" />
            </div>
            <p className="px-2 text-right text-md">{chatElement.message}</p>
        </div>
} */}

    </div>);
};

export default ChatBubble;