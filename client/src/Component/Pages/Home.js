import LivingRoomImg from '../../assets/img/living-room.jpg';
import ParkingImg from '../../assets/img/parking.jpg';
import ApartmentImg from '../../assets/img/apartment.jpg';
import { Link } from 'react-router-dom';
import { io } from 'socket.io-client';
import {useState, useEffect } from 'react';

const Home = () => {
    const [socket, setSocket] = useState();

    useEffect(() => {
        setSocket(io("ws://localhost:4004"))
    }, []);

    const raiseAlert = ()=>{
        return socket?.emit('alert',{message :true , handle : socket.id})
    }

    return (
        <div>
            <div className="block ">
                <Link to="/myhome">
                <div className="relative">
                    <div className="myfilter" >
                        <img className="rounded-lg" src={LivingRoomImg} />
                    </div>
                    <div className="p-2 absolute bottom-0">
                        <span className="block text-3xl font-medium">Owner's Home</span>
                        <span className="text-l">Address of your home</span>
                    </div>
                </div>
                </Link>

                <div className="flex justify-between mt-4">
                <button className="bg-sentinel-l2-g-blue text-sentinel-body-blue font-medium px-4 py-1 rounded-md">Good Night 🌙</button>
                <button className="bg-sentinel-l2-g-blue text-sentinel-body-blue font-medium px-4 py-1 rounded-md">Lock 🔒</button>
                </div>
            </div>
           
           
            <div className="block mt-8">
                <Link to="/myparking">
                <div className="relative">
                    <div className="myfilter" >
                        <img className="rounded-lg " src={ParkingImg} />
                    </div>
                    <div className="p-2 absolute bottom-0">
                        <span className="block text-3xl font-medium">Owner's Parking</span>
                        <span className="text-l">Mercedes Benz A-Class</span>
                    </div>
                </div>
                </Link>

                <div className="flex justify-between mt-4">
                <button className="bg-sentinel-l2-g-blue text-sentinel-body-blue font-medium px-4 py-1 rounded-md">CCTV 📷</button>
                <button className="bg-sentinel-l2-g-blue text-sentinel-body-blue font-medium px-4 py-1 rounded-md" onClick={raiseAlert}>Alert Guards 💂‍♂️</button>
                </div>
            </div>

            <div className="block mt-8">
                <div className="relative">
                    <div className="myfilter" >
                        <img className="rounded-lg" src={ApartmentImg} />
                    </div>
                    <div className="p-2 absolute bottom-0">
                        <span className="block text-3xl font-medium">ABC Apartments</span>
                        <span className="text-l">123 Street</span>
                    </div>
                </div>

                <div className="flex justify-between mt-4">
                <button className="bg-sentinel-l2-g-blue text-sentinel-body-blue font-medium px-4 py-1 rounded-md">Call 📞</button>
                <Link to="/record">
                <button className="bg-sentinel-l2-g-blue text-sentinel-body-blue font-medium px-4 py-1 rounded-md">Records 📑</button>
                </Link>
                </div>
            </div>

        </div>
    );
};

export default Home;