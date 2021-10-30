import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

// const PROXY = "http://localhost:4000/api"
// https://avatars.dicebear.com/api/croodles/your-custom-seed.svg?b=%23fafafa
const API_DP = "https://avatars.dicebear.com/api/personas/"
const Records = ({admin  =false}) => {
    const [recordData, setRecordData] = useState(null);
    const [search, setSearch] = useState("");

    useEffect(()=>{
        
        axios.get("/api/record/all").then(res=>setRecordData(res.data))
    },[])

    const relationType = (relation , address)=>{
        if(relation==="outsider" && address){
            return "relative"
        }
        return relation;
    }
    return ( 
        <div>
            <div>
                <input className="text-black" value={search} type="text" placeholder = "search" onChange={(e)=>setSearch(e.target.value)}/>
                { admin &&
                <Link to="/admin/create/record">
                <button  className="bg-sentinel-l2-g-blue text-sentinel-body-blue font-medium px-4 py-1 rounded-md">+ New Entry</button>
                </Link>}
            </div>

            <div className="mb-4">
            <Tabs variant="unstyled">
                <TabList className="flex justify-around text-xl  ">
                    <Tab className="text-sentinel-l2-g-blue px-4 py-1" _selected={{ borderBottom: "4px solid #00D2FF" }} onClick={()=> setSearch("")} >ALL</Tab>
                    <Tab className="text-sentinel-l2-g-blue px-4 py-1" _selected={{ borderBottom: "4px solid #00D2FF" }} onClick={()=> setSearch("resident")} >Residents</Tab>
                    <Tab className="text-sentinel-l2-g-blue px-4 py-1" _selected={{ borderBottom: "4px solid #00D2FF" }} onClick={()=> setSearch("outsider")}>outsider</Tab>
                </TabList>
            </Tabs>
            </div>

            <div className="grid grid-cols-3 gap-2 ">
                {recordData &&
                recordData.filter(data => {
                    if(( data.name.toLowerCase().includes(search.toLowerCase()) || data.relation === search || search===""))
                        return data
                })
                .map(Element =>(
                    <Link key={Element._id} to={`/record/${Element._id}?q=${admin}`}>
                    <div className={Element.status===1 ? "w-full  pb-3 rounded-xl text-sentinel-body-blue bg-red-400  p-2" : "w-full  pb-3 rounded-xl text-sentinel-body-blue bg-sentinel-l2-g-blue  p-2"} >
                    {/* <div className="w-full  pb-3 rounded-xl p-2 bg-sentinel-l3-g-blue" > */}
                        <span className="text-md text-left block font-bold">{relationType(Element.relation,Element.address)}</span>
                        <div >
                            <img className="rounded-xl"  src={`${API_DP}/${Element.name}.svg?b=%23fafafa`} alt="" />
                        </div>
                        <div>
                        <span className="text-md text-left block">{Element.name}</span>
                        {admin && 
                        <span className="text-md text-left block">Aadhaar : {Element.aadhaar}</span>
                        }
                        {Element.status===1 && 
                        <span  className="text-md text-left font-semibold text-white rounded-full rounded-ful bg-sentinel-l3-g-blue  px-2">BANNED</span>
                        }

                        </div>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
     );
}
 
export default Records;