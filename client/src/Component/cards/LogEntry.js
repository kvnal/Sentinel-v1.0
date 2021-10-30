import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";


const LogEntry = ({name}) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post("/api/log",{...data, name: name}).then(res=> {
            <Redirect to="/admin/home"/>
        })
    };
    return (
        <Accordion allowToggle >
            <AccordionItem>
                    <AccordionButton _expanded={{ bg: "#00D2FF", color: "#002641" }}>
                        <div className="bg-sentinel-l2-g-blue text-sentinel-body-blue font-medium px-4 py-1 w-full mb-2 ">
                            Entry/Exit
                        </div>
                    </AccordionButton>
                <AccordionPanel pb={4}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="border text-black border-gray-400 p-2">
                        
                    <input type="text" {...register("address")} className="mt-4 text-white border-sentinel-l2-g-blue p-2  border-2 bg-sentinel-body-blue w-full" placeholder="address" />
                    <input type="text" {...register("purpose")} placeholder="purpose" className="mt-1 text-white border-sentinel-l2-g-blue p-2  border-2 bg-sentinel-body-blue w-full"/>
                    <input type="submit" value="Entry/Exit" className="bg-sentinel-l2-g-blue text-sentinel-body-blue font-medium px-4 py-1 w-full mb-2" />
                    </div>
                    </form>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default LogEntry;