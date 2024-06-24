import React from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import { IoLanguage } from "react-icons/io5";
 
const MovieTabs = ({children, setLang}) => {
  
  const data = [
    {label: "France",value: "fr",icon: IoLanguage },
    {label: "English",value: "en-US",icon: IoLanguage },
    {label: "Arabic",value: "ar",icon: IoLanguage },
  ];


  return (
    
        <Tabs value={"en-US"}>

            <TabsHeader className="w-full laptop:w-[800px] mx-auto" indicatorProps={{className: "bg-main text-primaryColor"}}>
                {data.map(({ label, value, icon }) => (
                <Tab key={value} value={value} onClick={(v)=>setLang(value)} className="text-lg font-bold bg-black text-white">
                <div className="flex items-center gap-2">{React.createElement(icon, { className: "w-5 h-5" })}{label}</div></Tab>))}
            </TabsHeader>

            <TabsBody animate={{initial: { y: 250 },mount: { y: 0 },unmount: { y: 250 }}}>
                {data.map(({ value, desc }) => (<TabPanel key={value} value={value}>{children}</TabPanel> ))}
            </TabsBody>

        </Tabs>
    
    
  );
}

export default MovieTabs;