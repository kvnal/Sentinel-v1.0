import axios from "axios";
import { useEffect, useState, } from "react";
import { useParams } from "react-router";
import LogEntry from "../../cards/LogEntry";
import Complaint from "../../ComplaintBox/Complaint";

const API_DP = "https://avatars.dicebear.com/api/personas/";


const IndividualRecord = ({ admin = false }) => {
    
    const { id } = useParams();
    const [recordData, setRecordData] = useState(null);
    
    const banUser = (state) => {
        axios.patch("/api/ban",{id:recordData._id, status : state}).then(res=>console.log(res.data))
        // req /api/ban PATCH
        
    };

    useEffect(() => {
        axios.get(`/api/record/${id}`).then(res => { setRecordData(res.data); });
    }, []);

    return (

        <div>
            {recordData &&
                <div>
                    <div>
                        <img src={API_DP + `${recordData.name}.svg`} alt="" />
                    </div>

                    <div>
                        <div>
                            <span className="block text-2xl text-center font-bold mt-2">{recordData.name}</span>
                            <span className="block text-xl text-center text-gray-300 font-bold mt-1">Aadhaar No. : {recordData.aadhaar}</span>
                            <span className="block italic text-center  text-lg">{recordData.relation}</span>
                            {recordData.relation == "resident" &&
                                <span className="block">{recordData.address} </span>
                            }

                        </div>

                        {
                            admin &&
                            <div className="mt-2">
                                {recordData.status==1 && <button className="text-sentinel-l2-g-blue border-2 border-sentinel-l2-g-blue bg-sentinel-body-blue font-medium px-4 py-1 w-full mb-2" onClick={()=>banUser(0)}>Unban </button>}
                                {recordData.status==0 && <button className="text-sentinel-l2-g-blue border-2 border-sentinel-l2-g-blue bg-sentinel-body-blue font-medium px-4 py-1 w-full mb-2 " onClick={()=>banUser(1)}>Ban</button>}

                                <LogEntry name={recordData.name}/>
                            </div>
                        }
                        <div>
                            {(recordData.relation != "resident" && !admin)  &&
                                <Complaint complaintData={recordData.complaint} />}
                        </div>
                    </div>
                </div>

            }
        </div>
    );
};

export default IndividualRecord;