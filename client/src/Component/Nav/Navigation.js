import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="flex justify-around  items-center  bottom-0 fixed z-50  w-full border-t border-blue-300 bg-sentinel-nav-blue h-12 text-sentinel-gray-nav " >

            <NavLink exact to="/" activeClassName="text-sentinel-l2-g-blue" className="w-full m-auto" >
                <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg"  height="24px" style={{fill:'currentcolor'}} viewBox="0 0 24 24" width="24px" ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"/></svg>
                </div>
            </NavLink>

            <NavLink to="/covid" activeClassName="text-sentinel-l2-g-blue" style={{fill:'currentcolor'}} className="w-full m-auto"   >
                <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"  height="24px" viewBox="0 0 24 24" width="24px"  ><rect fill="none" height="24" width="24" /><path d="M10.5,13h-1C8.67,13,8,12.33,8,11.5v0C8,10.67,8.67,10,9.5,10h1V9c0-0.83,0.67-1.5,1.5-1.5h0c0.83,0,1.5,0.67,1.5,1.5v1h1 c0.83,0,1.5,0.67,1.5,1.5v0c0,0.83-0.67,1.5-1.5,1.5h-1v1c0,0.83-0.67,1.5-1.5,1.5h0c-0.83,0-1.5-0.67-1.5-1.5V13z M11.3,2.26 l-6,2.25C4.52,4.81,4,5.55,4,6.39v4.7c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91v-4.7c0-0.83-0.52-1.58-1.3-1.87l-6-2.25 C12.25,2.09,11.75,2.09,11.3,2.26z" /></svg>
                </div>
            </NavLink>
            <NavLink to="/inbox" activeClassName="text-sentinel-l2-g-blue" className="w-full m-auto">
                <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" style={{fill:'currentcolor'}} height="24px" viewBox="0 0 24 24" width="24px" ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"/></svg>
                </div>
            </NavLink>

        </div>
    );
};

export default Navigation;