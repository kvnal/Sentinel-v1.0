import ToggleSingle from "../../Button/ToggleSingle";
import { useState } from "react";
//currentState not in used
const Fav = [
    {Title:"Morning",Icon:"morning",currentState:false},
    {Title:"Evening",Icon:"evening",currentState:false},
    {Title:"All Cameras",Icon:"camera",currentState:true},
    {Title:"All Lights",Icon:"bulb",currentState:false},
    {Title:"Dine",Icon:"dining",currentState:false},
    {Title:"A/c",Icon:"ac",currentState:true},
    {Title:"Speakers",Icon:"music",currentState:false},
    {Title:"Wardrobe",Icon:"clothes",currentState:false},
    {Title:"Lock Door",Icon:"lock",currentState:false},
]

const ToggleBtn = () => {
    const [FavCurrentState, setFavCurrentState] = useState({
        morning : false,
        evening : true,
        camera: false,
        bulb : false,
        dining : false,
        ac : true,
        music : false,
        clothes : false,
        lock : false,
    });

    const toggleCurrentState = (_icon)=>{
        //mqtt send message
        return setFavCurrentState({...FavCurrentState,[_icon]:!FavCurrentState[_icon]})
   }

    return ( 
        <div>
            <div className="flex justify-between mb-2">
            <span className=" text-2xl text-sentinel-text-blue font-medium ">Favourite Scenes</span>
            <a href={"http://"+window.location.hostname +":5000"}><div className=" text-2xl text-sentinel-text-blue font-medium px-2 ">Map</div></a>
            </div>
            <div className="grid grid-cols-3 gap-2 ">
            {/* tv ac */}
            {Fav.map(Element=>(
                <button onClick={()=> toggleCurrentState(Element.Icon) }>
                <ToggleSingle 
                currentState={FavCurrentState[Element.Icon]}
                Icon={Element.Icon}
                Title={Element.Title}
                />
                </button>
                
            ))}
            </div>
        </div>
     );
}
 
export default ToggleBtn;