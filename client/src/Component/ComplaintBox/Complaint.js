import axios from "axios";
import { useRef, useState } from "react";


const Complaint = ({ complaintData = null, id }) => {

    const complaintTextRef = useRef(null);
    const raiseComplaint = () => {
        axios.patch("/api/complaint/", { id: id, complaint: complaintTextRef.current.value })
    };
    return (
        <div>
            <div>
                <div>
                    <input type="text" ref={complaintTextRef} className="text-white border-sentinel-l2-g-blue p-2  border-2 bg-sentinel-body-blue w-full  mb-1" placeholder="Your Complaint" />
                    <button onClick={raiseComplaint} className="text-sentinel-l2-g-blue border-2 border-sentinel-l2-g-blue bg-sentinel-body-blue font-medium px-4 py-1 w-full mb-2">submit</button>
                </div>
            </div>
            {
                complaintData &&

                <div>
                    <span>All Complaints ({complaintData.length})</span>
                    {complaintData.map((element,i) => (
                        <div className="pl-4 text-lg font-semibold " key={element}>
                            {i+1}. {element}
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

export default Complaint;