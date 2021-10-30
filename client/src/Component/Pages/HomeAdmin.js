
import ApartmentImg from '../../assets/img/apartment.jpg';
import { Link } from 'react-router-dom';
import { useEffect , useState} from 'react';
import {useForm} from 'react-hook-form'
import axios from 'axios';
import { io } from 'socket.io-client';

const HomeAdmin = ({setAdmin}) => {
    const [alert, setAlert] = useState(false);
    const [socket, setSocket] = useState();
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post("/api/inbox",data).then(res=>console.log(res.data))
    };

    useEffect(()=>{
        setAdmin(true)
        setSocket(io("ws://localhost:4004"))
    },[])

    useEffect(()=>{
        socket?.on('alert',(data)=> setAlert(data.message))
        },[socket])

    return (
        <>
        { alert ? <div className="">
            <div className="w-full bg-red-400 block text-black text-center py-20">
            <span className="block text-3xl font-bold">ALERT</span>
            <span className="block text-xl font-medium">House No. A10</span>
            </div>
            <div className="flex m-2 justify-around">
            <button  className="bg-sentinel-l2-g-blue text-sentinel-body-blue h-14 w-1/3 font-bold px-4 py-1 rounded-md" onClick={()=>setAlert(false)}>OK!</button>
            </div>
        </div>
        :
        <div>

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
                <Link to="/admin/record">
                <button className="bg-sentinel-l2-g-blue text-sentinel-body-blue font-medium px-4 py-1 rounded-md">Records 📑</button>
                </Link>
                <Link to="/admin/log">
                    <button className="bg-sentinel-l2-g-blue text-sentinel-body-blue font-medium px-4 py-1 rounded-md">Logs 📑</button>
                </Link>
                </div>
            </div>
            {/* inbox */}

            <div className="mt-12">
                <span className="text-2xl">Inbox</span>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="text-black" {...register("title")} autoComplete="off"  type="text" placeholder = "Title" />
                    <textarea className="text-black"  {...register("message")}  type="text" placeholder = "message" />
                    <input type="submit" className="bg-sentinel-l2-g-blue" value="post"/>
                    </form>

                </div>
            </div>
        </div>}
        </>
    );
};

export default HomeAdmin;