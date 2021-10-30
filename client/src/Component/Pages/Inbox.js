import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ApartmentImg from '../../assets/img/apartment.jpg';

const Inbox = () => {
    const [inbox, setInbox] = useState(null);
    const [showAll, setShowAll] = useState(false);
    useEffect(() => {
        axios.get("/api/inbox").then(res => setInbox(res.data));
    }, []);

    return (
        <div>
            <div className="flex justify-between">
            <span className="text-2xl">Inbox</span>
            <Link to="/inbox/chat">
            <button className="bg-sentinel-l2-g-blue text-sentinel-body-blue font-medium px-4 py-1 rounded-full">💬</button>
            </Link>
            </div>
            {
                inbox &&
                inbox.map(Element => (
                    <div className="my-3 p-3 rounded-md bg-sentinel-l3-g-blue" key={Element._id}>
                        <span className="block mb-1 text-2xl font-medium">{Element.title}</span>
                        <div className="myfilter" >
                            <img className="rounded-lg" src={ApartmentImg} />
                        </div>
                        
                        <p className="text-l font-medium text-gray-300">{Element.message}</p>
                        <span className="text-sm italic block text-right text-gray-500">{Element.createdAt}</span>
                    </div>
                ))
            }
        </div>
    );
};

export default Inbox;