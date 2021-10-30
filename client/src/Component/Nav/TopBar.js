import Sentinel from '../../assets/Sentinel-logo/Sentinel.svg'
import SentinelLogo from '../../assets/Sentinel-logo/Sentinel-logo.svg'
const TopBar = ({admin = false}) => {
    return ( 
        <>
        {!admin && <div className="flex justify-center items-center fixed top-0 z-50 h-12 w-full shadow-md bg-gradient-to-r from-sentinel-l-g-blue to-sentinel-l2-g-blue ">
            {/* <img src={SentinelLogo} className="h-1/2 px-1 " alt="" /> */}
            <img src={Sentinel} className="h-1/2" alt="" />
        </div>}
        {admin && <div className="flex justify-center items-center fixed top-0 z-50 h-12 w-full shadow-md bg-gradient-to-r from-red-700 to-red-500 ">
            {/* <img src={SentinelLogo} className="h-1/2 px-1 " alt="" /> */}
            <img src={Sentinel} className="h-1/2" alt="" />
        </div>}

        </>
     );
}
 
export default TopBar;