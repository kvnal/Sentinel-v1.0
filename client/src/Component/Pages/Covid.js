import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const Covid = () => {
    // https://www.mohfw.gov.in/data/datanew.json
    return (
        <div>
            <span className="block text-2xl font-medium mb-6">COVID-19</span>

            <Tabs variant="unstyled">
                <TabList className="flex justify-around text-xl  ">
                    <Tab className="text-sentinel-l2-g-blue px-4 py-1" _selected={{ borderBottom: "4px solid #00D2FF" }} >Overview</Tab>
                    <Tab className="text-sentinel-l2-g-blue px-4 py-1" _selected={{ borderBottom: "4px solid #00D2FF" }} >Prevention</Tab>
                    <Tab className="text-sentinel-l2-g-blue px-4 py-1" _selected={{ borderBottom: "4px solid #00D2FF" }} >Symptoms</Tab>
                </TabList>
                <TabPanels className="mt-4">
                    <TabPanel>
                        {/* Overview */}
                        <p className="font-medium">
                            Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
                        </p>
                        <p className="py-2">
                            Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.
                        </p>

                        <div className="mt-8">
                            <div className="bg-sentinel-layer1-blue rounded-lg p-4">
                                <span className="block font-medium text-xl text-center ">Cases</span>
                                <span className="block text-sm text-center text-sentinel-text-blue ">India Situation</span>
                                <div className="grid grid-flow-col grid-cols-2 gap-4 mt-4">
                                    {/* dynamic  */}
                                    <div className=" bg-sentinel-l3-g-blue   text-center rounded-lg p-2">
                                        <div className="text-3xl font-bold font-mono text-sentinel-l2-g-blue">100,000</div>
                                        <div className="font-medium text-sm" >Active Cases</div>
                                    </div>

                                    <div className=" bg-sentinel-l3-g-blue   text-center rounded-lg p-2">
                                        <div className="text-3xl font-bold font-mono  text-red-400">500</div>
                                        <div className="font-medium text-sm" >Deaths</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <button className="mt-4  block w-full py-2 text-lg rounded bg-sentinel-l2-g-blue text-sentinel-body-blue ">Vaccination</button>
                        <button className="mt-4 animate-pulse   block w-full py-2 text-lg rounded  bg-red-400 text-white ">Emergency</button>
                        <div className="text-sentinel-text-blue italic px-4 py-1 ">Lorem ipsum dolor sit amet consectetur adipis icing elit.</div>
                    </TabPanel>
                    <TabPanel>
                        {/* Prevention */}
                        <div>
                            <span className="text-lg font-medium block  py-4">
                                To prevent infection and to slow transmission of COVID-19, do the following:
                            </span>
                            <div className="text-gray-100 p-4">
                                <ul className="list-disc">
                                    <li className="py-2">
                                        Wash your hands regularly with soap and water, or clean them with alcohol-based hand rub.
                                    </li>
                                    <li className="py-2">
                                        Maintain at least 1 metre distance between you and people coughing or sneezing.
                                    </li>
                                    <li className="py-2">
                                        Avoid touching your face.
                                    </li>
                                    <li className="py-2">
                                        Cover your mouth and nose when coughing or sneezing.
                                    </li>
                                    <li className="py-2">
                                        Stay home if you feel unwell.
                                    </li>
                                    <li className="py-2">
                                        Refrain from smoking and other activities that weaken the lungs.
                                    </li>
                                    <li className="py-2">

                                        Practice physical distancing by avoiding unnecessary travel and staying away from large groups of people.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        {/* Symptoms */}
                        <div>
                            <span className="text-lg font-medium block  py-4">
                                COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.
                            </span>
                            <div className="text-gray-100 p-4">
                                <ul className="list-disc">
                                    <span className="text-lg font-medium text-sentinel-l2-g-blue">Most common symptoms:</span>
                                    <li className="py-1">fever.</li>
                                    <li className="py-1">dry cough.</li>
                                    <li className="py-1">tiredness.</li>
                                </ul>

                                <ul className="list-disc mt-2">
                                    <span className="text-lg font-medium text-sentinel-l2-g-blue">
                                        Less common symptoms:
                                    </span>
                                    <li className="py-1">aches and pains.</li>
                                    <li className="py-1">conjunctivitis.</li>
                                    <li className="py-1">headache.</li>
                                    <li className="py-1">loss of taste or smell.</li>
                                    <li className="py-1">a rash on skin, or discolouration of fingers or toes.</li>
                                </ul>
                                <ul className="list-disc mt-2">
                                    <span className="text-lg font-medium text-sentinel-l2-g-blue">
                                        Serious symptoms:
                                    </span>
                                    <li className="py-1">difficulty breathing or shortness of breath.</li>
                                    <li className="py-1">chest pain or pressure..</li>
                                    <li className="py-1">loss of speech or movement.</li>

                                </ul>
                            </div>
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
};

export default Covid;