import BubbleSVG from '../../../assets/Logo/bubble.svg'
import ToggleBtn from './ToggleBtn';
const OwnerHome = () => {
    return ( 
        <div>
            <div>
                <div className="bubble flex justify-center items-center "   style={{backgroundImage:`url(${BubbleSVG})`}}>
                <div className="bubble-content">
                <span className=" block text-center text-sentinel-body-blue text-5xl font-medium">🌥</span>
                <span className=" block text-center text-sentinel-body-blue text-lg font-medium">Cloudy!</span>
                <span className=" block text-center text-sentinel-body-blue text-5xl font-medium p-1"> 30°C</span>
                <span className="text-sentinel-body-blue text-lg font-medium">💨 10km/s  💧 40%  </span>
                </div>
        
                </div>
            </div>

            {/* controls */}
            <div>
                <ToggleBtn/>

            </div>
            
        </div>
        
     );
}
 
export default OwnerHome;