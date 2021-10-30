import { useEffect } from "react";
import useIcon from "../customHooks/useIcon";

const ToggleSingle = ({ currentState, Title, Icon }) => {
    const _icon = useIcon({Icon})
    
    return (
        <div>
            {currentState && <div className=" w-full pl-3 pb-3   rounded-xl text-sentinel-body-blue bg-sentinel-l2-g-blue p-2">
                <div>
                    <span className="text-xl p-1 block text-left  ">{_icon}</span>
                    <span className="text-lg text-left block font-medium">{Title}</span>
                    <span className="text-md text-left block">on</span>
                </div>
            </div>}
            {!currentState && <div className=" w-full pl-3 pb-3  rounded-xl bg-sentinel-layer1-blue border-2 border-sentinel-l2-g-blue text-sentinel-l2-g-blue p-2">
                <div>
                    <span className="text-xl p-1 block text-left  ">{_icon}</span>
                    <span className="text-lg text-left block font-medium">{Title}</span>
                    <span className="text-md text-left block">off</span>
                </div>
            </div>}

        </div>
    );
};

export default ToggleSingle;