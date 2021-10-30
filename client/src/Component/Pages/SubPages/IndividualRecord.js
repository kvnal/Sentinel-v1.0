import axios from "axios";
import { useEffect, useState, } from "react";
import { useParams } from "react-router";
import LogEntry from "../../cards/LogEntry";
import Complaint from "../../ComplaintBox/Complaint";

const API_DP = "https://avatars.dicebear.com/api/personas/";


const IndividualRecord = ({ admin = false }) => {
    
    const { id } = useParams();
    const [recordData, setRecordData] = useState(null);
    
    const banUser = () => {
        axios.patch("/api/ban",{id:recordData.id, status : 1}).then(res=>console.log(res.data))
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
                            <span className="block">{recordData.name}</span>
                            <span className="block">{recordData.relation}</span>
                            {recordData.relation == "resident" &&
                                <span className="block">{recordData.address} </span>
                            }

                        </div>

                        {
                            admin &&
                            <div>
                                {recordData.status==1 && <button className="bg-sentinel-l2-g-blue text-sentinel-body-blue font-medium px-4 py-1 rounded-md" >UnBan </button>}
                                {recordData.status==0 && <button className="bg-sentinel-l2-g-blue text-sentinel-body-blue font-medium px-4 py-1 rounded-md" onClick={banUser}>Ban </button>}

                                <LogEntry name={recordData.name}/>
                            </div>
                        }
                        <div>
                            {recordData.relation != "resident" &&
                                <Complaint complaintData={recordData.complaint} />}
                        </div>
                    </div>
                </div>

            }
        </div>
    );
};

export default IndividualRecord;