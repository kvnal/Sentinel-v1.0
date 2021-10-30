import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";
import { useState } from "react";

const LogCard = ({ data }) => {
    return (
        <Accordion allowToggle >
            <AccordionItem>
                    <AccordionButton _expanded={{ bg: "#00D2FF", color: "#002641" }}>
                        <div className="p-2 border-b border-gray-400 flex justify-between w-full text-left">
                            <span className="text-lg font-bold">{data.name.toUpperCase()}</span>
                            <span className="italic" >To : {data.address.toUpperCase()}</span>
                        </div>
                    </AccordionButton>
                <AccordionPanel pb={4}>
                    <div className="border border-gray-400 p-2">
                            <span className="italic block text-right" >To : {data.address.toUpperCase()}</span>
                            <span className="text-lg block font-medium">Purpose : {data.purpose}</span>
                            <span className="block ">Data/Time : {data.createdAt}</span>

                    </div>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default LogCard;