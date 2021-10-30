import axios from "axios";
import { useEffect, useState } from "react";
import LogCard from "../cards/LogCard";
const Log = () => {
    const [log, setLog] = useState(null);
    useEffect(() => {
        axios.get("/api/log").then(res => setLog(res.data));
    });

    return (
        <div>
            {/* add to log button */}
            <div className="flex w-full justify-end mb-2">
               
            </div>
            {log &&
                log.map((Element) => (
                    <LogCard key={Element._id} data={Element} />
                ))
            }
        </div>
    );
};

export default Log;