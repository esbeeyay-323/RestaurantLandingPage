import { Button, ConfigProvider, DatePicker, Form, Input, Select, TimePicker } from "antd";
import { Brand } from "../Components/Brand";
import MyDrawer from "../Components/Drawer";
import { DesktopHeader } from "../Components/Header";
import TextArea from "antd/es/input/TextArea";

function Reservations () {

    return (
        <>
        <main className="min-h-dvh flex flex-col w-full bg-white">
            <header className="w-full items-center p-6 bg-[radial-gradient(ellipse_at_30%_85%,rgba(184,67,46,0.35),transparent_55%),
            radial-gradient(ellipse_at_75%_15%,rgba(189,147,84,0.12),transparent_50%)] bg-[#1c1712] flex justify-between lg:hidden">
                    <Brand className="justify-self-start font-display text-[clamp(1.4rem,1.75vw,3.5rem)] 
                    font-semibold uppercase tracking-[0.14em] text-bone-50"/>
                    <MyDrawer className={""}/>
                </header>
                <div className="hidden p-6 bg-black lg:flex">
                <DesktopHeader NavClassName="text-bone-50" className = "hidden w-full grid-cols-[1fr_auto_1fr] items-center lg:grid"/>
                </div>

            <div className="w-full flex flex-1 flex-col lg:flex-row">

            <section className="reservation-dark-panel w-full p-6 lg:flex lg:items-center lg:justify-center">
                <div className="w-full lg:flex lg:w-3/5 lg:flex-col lg:justify-center lg:gap-[clamp(2rem,1.5vw,5rem)]">
                
                <div>
                <h1 className="w-full font-sans text-[clamp(0.75rem,calc(0.65rem+0.12vw),1.25rem)] uppercase tracking-[2.5px] text-[#b8432e] mb-4 lg:text-left">Reservations</h1>
                
                <h1 className="w-full font-serif font-medium text-[clamp(2.25rem,calc(1.5rem+1.5vw),8rem)] leading-[1.08] text-[#f5efe4] lg:mx-auto">
                Reserve Your Table
                </h1>

                <p className="font-sans text-[clamp(1rem,calc(0.8rem+0.25vw),2rem)] leading-[1.6] text-[#a99d8b] max-w-[34ch] mb-8 mt-5.5">
                Wood smoke, open flame, and a seat saved by the fire.
                </p>

                <div className="w-full border border-[#F5EFE424] mb-6"/>
                </div>

                <div className="w-full mb-8 text-[clamp(0.95rem,calc(0.75rem+0.2vw),1.75rem)]">
                    <p className="w-full flex p-2 border-b border-[#F5EFE424] justify-between">
                        <span className="text-[#A99D8B]">Tue-Thu</span>
                        <span className="text-[#F5EFE4]">5:00pm-10:00pm</span>
                    </p>
                    <p className="w-full flex p-2 border-b border-[#F5EFE424] justify-between">
                        <span className="text-[#A99D8B]">Fri-Sat</span>
                        <span className="text-[#F5EFE4]">5:00pm-11:00pm</span>
                    </p>
                    <p className="w-full flex p-2 border-b border-[#F5EFE424] justify-between">
                        <span className="text-[#A99D8B]">Sunday</span>
                        <span className="text-[#F5EFE4]">12:00pm-9:00pm</span>
                    </p>
                    <p className="w-full flex p-2 border-b border-[#F5EFE424] justify-between">
                        <span className="text-[#A99D8B]">Monday</span>
                        <span className="text-[#F5EFE4]">Closed</span>
                    </p>
                </div>

                    <p className="w-full flex flex-col mb-8 text-[clamp(0.95rem,calc(0.75rem+0.2vw),1.75rem)]">
                        <span className="font-bold text-[#F5EFE4]">12 Ember Lane Osu Accra</span>
                        <span className="text-[#A99D8B]">+233 20 000 0000</span>
                    </p>

                    
                    
                    <div className="w-full border border-[#F5EFE424] mb-4"/>

                    <p className="text-[clamp(0.8125rem,calc(0.7rem+0.15vw),1.5rem)]">
                        Booking for a party of 10 or more? <a className="text-[#BD9354] underline" href="#">Call us directly</a> and we'll set up the room for you.
                    </p>

                </div>
               
            </section>



            <section className="w-full bg-[#F5EFE4] p-6 lg:flex lg:flex-col lg:justify-center lg:items-center">
            <div className="w-full flex flex-col lg:w-3/5 lg:justify-center lg:items-center">
                <h1 className="w-full text-left font-serif font-medium text-[clamp(2rem,calc(1.5rem+1.5vw),8rem)] 
                    leading-[1.08] text-[#2a2019] mt-6">
                Book a table
                </h1>

                <p className="w-full text-left font-sans text-[clamp(1rem,calc(0.8rem+0.25vw),2rem)] leading-[1.6] text-[#7d7264] mb-8 mt-2">
                Fill in your details and we'll confirm by phone.
                </p>

               
            <ConfigProvider 
            theme={{
                    components: {

                Input: {
                    colorBgContainer: "#F5EFE4",
                    colorBorder: "rgba(42, 32, 25, 0.3)",
                    colorPrimary: "#B8432E",
                    colorText: "#2A2019",
                    colorTextPlaceholder: "#7D7264",
                    borderRadius: 0,
                },
                DatePicker : {
                    colorBgContainer: "#F5EFE4",
                    colorBorder: "rgba(42, 32, 25, 0.3)",
                    colorPrimary: "#B8432E",
                    colorText: "#2A2019",
                    colorTextPlaceholder: "#7D7264",
                    borderRadius: 0,
                },
                Select :{
                    colorBgContainer: "#F5EFE4",
                    colorBorder: "rgba(42, 32, 25, 0.3)",
                    colorPrimary: "#B8432E",
                    colorText: "#2A2019",
                    colorTextPlaceholder: "#7D7264",
                    borderRadius: 0,
                },
                Button: {
                    defaultBg: "#B8432E",
                    defaultColor: "#F5EFE4",
                    defaultBorderColor: "#B8432E",
                    defaultHoverBg: "#A63828",
                    defaultHoverColor: "#FFFFFF",
                    defaultHoverBorderColor: "#A63828",
                    defaultActiveBg: "#8F2F24",
                    defaultActiveColor: "#FFFFFF",
                    defaultActiveBorderColor: "#8F2F24",
                    defaultShadow: "none",
                    borderRadius: 0,
                    fontWeight: 600,
                }
    },
                
            }}
            >
                <Form variant="underlined" className="w-full">
                    <div className="w-full flex flex-col gap-2">
                        <Form.Item label={<span className="uppercase text-[12px] text-[#7d7264]">full name</span>} layout="vertical">
                            <Input placeholder="e.g. Ama Mensah"/>
                        </Form.Item>
                        <Form.Item label={<span className="uppercase text-[12px] text-[#7d7264]">phone number</span>} layout="vertical">
                            <Input placeholder="e.g. +233 20 000 0000"/>
                        </Form.Item>
                        <Form.Item label={<span className="uppercase text-[12px] text-[#7d7264]">email address</span>} layout="vertical">
                            <Input placeholder="e.g. ama@example.com"/>
                        </Form.Item>
                        <Form.Item label={<span className="uppercase text-[12px] text-[#7d7264]">date</span>} layout="vertical">
                            <DatePicker className="w-full" placeholder="Select a date"/>
                        </Form.Item>
                        <Form.Item label={<span className="uppercase text-[12px] text-[#7d7264]">time</span>} layout="vertical">
                            <TimePicker showSecond={false} className="w-full" placeholder="Select a time"/>
                        </Form.Item>
                        <Form.Item label={<span className="uppercase text-[12px] text-[#7d7264]">party size</span>} layout="vertical">
                            <Select placeholder="Select party size"/>
                        </Form.Item>
                        <Form.Item label={<span className="uppercase text-[12px] text-[#7d7264]">notes</span>} layout="vertical">
                            <TextArea placeholder="Dietary requirements or special requests"/>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                htmlType="submit"
                                className="h-12! w-full px-4! font-body! text-xs! tracking-[0.16em]! shadow-none!"
                            >
                                <span className="uppercase">request reservation</span>
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
        </ConfigProvider>

            </div>
            </section>

        </div>
    
        </main>
        
        </>
    )
}


export default Reservations;
