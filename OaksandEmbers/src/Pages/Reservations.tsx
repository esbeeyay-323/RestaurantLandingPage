import { Button, ConfigProvider, DatePicker, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { FormSuccessNotice } from "../Components/FormSuccessNotice";
import { useState } from "react";


const reservationTimes = [
    "5:00pm",
    "5:30pm",
    "6:00pm",
    "6:30pm",
    "7:00pm",
    "7:30pm",
    "8:00pm",
    "8:30pm",
    "9:00pm",
].map((time) => ({ label: time, value: time }));

const partySizes = Array.from({ length: 9 }, (_, index) => {
    const size = index + 1;

    return {
        label: `${size} ${size === 1 ? "guest" : "guests"}`,
        value: size,
    };
});




function Reservations () {

    const [form] = Form.useForm();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        form.resetFields();
        setSubmitted(true);
    };

    return (
        <>
        <main className="dark-surface min-h-dvh flex flex-col w-full">
            <div className="w-full flex flex-1 flex-col lg:flex-row">

            <section className="reservation-dark-panel w-full p-6 pt-30 lg:flex lg:items-start lg:justify-center lg:pt-32 lg:pb-4">
                <div className="w-full lg:flex lg:w-3/5 lg:flex-col lg:gap-4">
                
                <div>
                <p className="w-full font-sans text-[clamp(0.75rem,calc(0.65rem+0.12vw),1.25rem)] uppercase tracking-[2.5px] text-[#b8432e] mb-4 lg:text-left">Reservations</p>
                
                <h1 className="w-full font-serif font-medium text-[clamp(2.25rem,calc(1.5rem+1.5vw),8rem)] leading-[1.08] text-[#f5efe4] lg:mx-auto">
                Reserve Your Table
                </h1>

                <p className="font-sans text-[clamp(1rem,calc(0.8rem+0.25vw),2rem)] leading-[1.6] text-[#a99d8b] max-w-[34ch] mb-8 mt-5.5 lg:mb-4 lg:mt-3">
                Wood smoke, open flame, and a seat saved by the fire.
                </p>

                <div className="w-full border border-[#F5EFE424] mb-6 lg:mb-0"/>
                </div>

                <div className="w-full mb-8 text-[clamp(0.95rem,calc(0.75rem+0.2vw),1.75rem)] lg:mb-0">
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

                    <p className="w-full flex flex-col mb-8 text-[clamp(0.95rem,calc(0.75rem+0.2vw),1.75rem)] lg:mb-0">
                        <span className="font-bold text-[#F5EFE4]">12 Ember Lane Osu Accra</span>
                        <span className="text-[#A99D8B]">+233 20 000 0000</span>
                    </p>

                    
                    
                    <div className="w-full border border-[#F5EFE424] mb-4"/>

                    <p className="text-[clamp(0.8125rem,calc(0.7rem+0.15vw),1.5rem)]">
                        Booking for a party of 10 or more? <a className="text-[#BD9354] underline" href="#">Call us directly</a> and we'll set up the room for you.
                    </p>

                </div>
               
            </section>



            <section className="paper-surface w-full p-6 lg:flex lg:flex-col lg:items-center lg:justify-start lg:pt-32 lg:pb-4">
            <div className="w-full flex flex-col lg:w-3/5 lg:items-center">
                <h2 className="w-full text-left font-serif font-medium text-[clamp(2rem,calc(1.5rem+1.5vw),8rem)] 
                    leading-[1.08] text-[#2a2019] mt-6 lg:mt-0">
                Book a table
                </h2>

                <p className="w-full text-left font-sans text-[clamp(1rem,calc(0.8rem+0.25vw),2rem)] leading-[1.6] text-[#7d7264] mb-8 mt-2 lg:mb-3 lg:mt-1">
                Fill in your details and we'll confirm by phone.
                </p>

               
            <ConfigProvider 
            theme={{
                    components: {

                Input: {
                    colorBgContainer: "transparent",
                    colorBorder: "rgba(42, 32, 25, 0.3)",
                    colorPrimary: "#B8432E",
                    colorText: "#2A2019",
                    colorTextPlaceholder: "#7D7264",
                    borderRadius: 0,
                },
                DatePicker : {
                    colorBgContainer: "transparent",
                    colorBorder: "rgba(42, 32, 25, 0.3)",
                    colorPrimary: "#B8432E",
                    colorText: "#2A2019",
                    colorTextPlaceholder: "#7D7264",
                    borderRadius: 0,
                },
                Select :{
                    colorBgContainer: "transparent",
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
                <Form
                form={form}
                variant="underlined" 
                onFinish={handleSubmit} 
                className="reservation-form w-full"
                onValuesChange={() => setSubmitted(false)}
                >
                    <div className="w-full flex flex-col gap-2 lg:gap-0">
                        <Form.Item
                            name="fullName"
                            label={<span className="uppercase text-[12px] text-[#7d7264]">full name</span>}
                            layout="vertical"
                            rules={[
                                { required: true, whitespace: true, message: "Please enter your full name." },
                                { min: 2, message: "Your name should be at least 2 characters." },
                            ]}
                        >
                            <Input autoComplete="name" placeholder="e.g. Ama Mensah"/>
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            label={<span className="uppercase text-[12px] text-[#7d7264]">phone number</span>}
                            layout="vertical"
                            rules={[
                                { required: true, message: "Please enter a phone number we can reach you on." },
                                {
                                    pattern: /^\+?[0-9\s()-]{7,20}$/,
                                    message: "Please enter a valid phone number, including the country code if needed.",
                                },
                            ]}
                        >
                            <Input autoComplete="tel" inputMode="tel" placeholder="e.g. +233 20 000 0000"/>
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label={<span className="uppercase text-[12px] text-[#7d7264]">email address</span>}
                            layout="vertical"
                            rules={[
                                { required: true, message: "Please enter your email address." },
                                { type: "email", message: "Please enter a valid email address." },
                            ]}
                        >
                            <Input autoComplete="email" inputMode="email" placeholder="e.g. ama@example.com"/>
                        </Form.Item>
                        <Form.Item
                            name="date"
                            label={<span className="uppercase text-[12px] text-[#7d7264]">date</span>}
                            layout="vertical"
                            rules={[{ required: true, message: "Please choose a date for your reservation." }]}
                        >
                            <DatePicker className="w-full" placeholder="Select a date"/>
                        </Form.Item>
                        <Form.Item
                            name="time"
                            label={<span className="uppercase text-[12px] text-[#7d7264]">time</span>}
                            layout="vertical"
                            rules={[{ required: true, message: "Please choose a time for your reservation." }]}
                        >
                            <Select className="w-full" options={reservationTimes} placeholder="Select a time"/>
                        </Form.Item>
                        <Form.Item
                            name="partySize"
                            label={<span className="uppercase text-[12px] text-[#7d7264]">party size</span>}
                            layout="vertical"
                            rules={[{ required: true, message: "Please tell us how many guests will be joining you." }]}
                        >
                            <Select className="w-full" options={partySizes} placeholder="Select party size"/>
                        </Form.Item>
                        <Form.Item
                            name="notes"
                            label={<span className="uppercase text-[12px] text-[#7d7264]">notes</span>}
                            layout="vertical"
                            rules={[{ max: 500, message: "Please keep special requests under 500 characters." }]}
                        >
                            <TextArea placeholder="Dietary requirements or special requests"/>
                        </Form.Item>
                        <Form.Item className="reservation-submit">
                            <Button
                                htmlType="submit"
                                className="h-12! w-full px-4! font-body! text-xs! tracking-[0.16em]! shadow-none!"
                            >
                                <span className="uppercase">request reservation</span>
                            </Button>
                        </Form.Item>
                        {submitted && (
                            <FormSuccessNotice
                                title="Reservation request submitted"
                                message="Your form has been cleared. This portfolio demo does not send a real booking."
                                onDismiss={() => setSubmitted(false)}
                            />
                        )}
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
