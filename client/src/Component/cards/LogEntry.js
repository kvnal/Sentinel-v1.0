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
                        <div className="p-2 border-b border-gray-400 flex justify-between w-full text-left">
                            Entry/Exit
                        </div>
                    </AccordionButton>
                <AccordionPanel pb={4}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="border text-black border-gray-400 p-2">
                        
                    <input type="text" {...register("address")} placeholder="address" />
                    <input type="text" {...register("purpose")} placeholder="purpose" />
                    <input type="submit" value="submit" />
                    </div>
                    </form>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default LogEntry;