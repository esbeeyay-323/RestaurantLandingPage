import { useState } from "react";
import {
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Button, ConfigProvider, Form, Input } from "antd";
import { FormSuccessNotice } from "../Components/FormSuccessNotice";

const { TextArea } = Input;

type ContactFormValues = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

const contactTheme = {
  token: {
    colorPrimary: "#b8432e",
    colorText: "#2b2118",
    colorTextPlaceholder: "#4a382a",
    colorBorder: "rgba(43, 33, 24, 0.32)",
    borderRadius: 0,
    boxShadow: "none",
    boxShadowSecondary: "none",
    fontFamily: '"Barlow", "Arial Narrow", sans-serif',
  },
  components: {
    Input: {
      activeBg: "transparent",
      activeBorderColor: "#b8432e",
      activeShadow: "none",
      colorBgContainer: "transparent",
      hoverBg: "transparent",
      hoverBorderColor: "#4a382a",
    },
    Button: {
      defaultBg: "#b8432e",
      defaultBorderColor: "#b8432e",
      defaultColor: "#f5efe4",
      defaultHoverBg: "#a63828",
      defaultHoverBorderColor: "#a63828",
      defaultHoverColor: "#ffffff",
      defaultActiveBg: "#8f2f24",
      defaultActiveBorderColor: "#8f2f24",
      defaultActiveColor: "#ffffff",
      defaultShadow: "none",
      primaryShadow: "none",
      fontWeight: 600,
    },
  },
};

function Contact() {
  const [form] = Form.useForm<ContactFormValues>();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    form.resetFields();
    setSubmitted(true);
  };

  return (
    <main className="contact-page dark-surface min-h-dvh w-full overflow-x-hidden">
      <div className="grid min-h-dvh grid-cols-1 lg:grid-cols-2">
        <section className="contact-dark-panel hidden h-full min-h-0 items-start px-[clamp(3rem,7vw,9rem)] pb-5 pt-[clamp(7rem,14vh,8.5rem)] text-bone-50 lg:flex">
          <div className="w-full max-w-2xl">
            <p className="font-body text-[clamp(0.7rem,calc(0.66rem+0.12vw),0.9rem)] font-semibold uppercase tracking-[0.2em] text-ember-300">
              Contact
            </p>
            <h2 className="mt-3 max-w-[13ch] font-display text-[clamp(2.25rem,calc(1.9rem+1.8vw),4.25rem)] font-medium leading-[0.95] tracking-[-0.02em] text-bone-50">
              Connect with Ember &amp; Oak
            </h2>
            <p className="mt-4 max-w-[38ch] font-body text-[clamp(0.9rem,calc(0.82rem+0.25vw),1.15rem)] leading-[1.6] text-ash-300">
              Questions, private dining, or simply want to say hello? Our
              team would love to hear from you.
            </p>

            <div className="mt-5 border-t border-bone-50/15 pt-3">
              <address className="not-italic">
                <a className="contact-detail-row" href="tel:+233200000000">
                  <PhoneOutlined aria-hidden="true" />
                  <span>
                    <small>Call us</small>
                    +233 20 000 0000
                  </span>
                </a>
                <a
                  className="contact-detail-row"
                  href="mailto:hello@emberandoak.com"
                >
                  <MailOutlined aria-hidden="true" />
                  <span>
                    <small>Email</small>
                    hello@emberandoak.com
                  </span>
                </a>
                <div className="contact-detail-row">
                  <EnvironmentOutlined aria-hidden="true" />
                  <span>
                    <small>Visit us</small>
                    12 Ember Lane, Osu, Accra
                  </span>
                </div>
              </address>
            </div>

            <div className="contact-map" aria-hidden="true">
              <span className="contact-map-pin" />
              <span className="contact-map-label">Ember &amp; Oak</span>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <span className="mr-2 font-body text-xs uppercase tracking-[0.16em] text-ash-500">
                Follow
              </span>
              <a
                className="contact-social-link"
                href="#instagram"
                aria-label="Ember and Oak on Instagram"
              >
                <InstagramOutlined />
              </a>
              <a
                className="contact-social-link"
                href="#facebook"
                aria-label="Ember and Oak on Facebook"
              >
                <FacebookOutlined />
              </a>
            </div>
          </div>
        </section>

        <section className="paper-surface flex h-full min-h-0 items-start overflow-hidden px-6 pb-4 pt-28 sm:px-10 lg:px-[clamp(3rem,7vw,9rem)] lg:pb-5 lg:pt-[clamp(7rem,14vh,8.5rem)]">
          <div className="w-full max-w-2xl">
            <p className="font-body text-[clamp(0.7rem,calc(0.66rem+0.12vw),0.9rem)] font-semibold uppercase tracking-[0.2em] text-ember-600">
              Drop us a line
            </p>
            <h1 className="mt-3 font-display text-[clamp(2.25rem,calc(1.9rem+1.8vw),4.25rem)] font-medium leading-[0.95] tracking-[-0.02em] text-ink-900">
              Get in touch
            </h1>
            <p className="mt-3 max-w-[42ch] font-body text-[clamp(0.9rem,calc(0.82rem+0.25vw),1.15rem)] leading-[1.55] text-ink-600">
              Fill in the form and we&apos;ll get back to you within one
              business day.
            </p>

            <ConfigProvider theme={contactTheme}>
              <Form<ContactFormValues>
                form={form}
                name="contact"
                variant="underlined"
                requiredMark={false}
                onFinish={handleSubmit}
                onValuesChange={() => submitted && setSubmitted(false)}
                className="contact-form mt-5 w-full"
              >
                <Form.Item
                  name="fullName"
                  label="Full name"
                  layout="vertical"
                  rules={[
                    { required: true, whitespace: true, message: "Please enter your full name." },
                    { min: 2, message: "Your name should be at least 2 characters." },
                  ]}
                >
                  <Input autoComplete="name" placeholder="Ama Mensah" />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email address"
                  layout="vertical"
                  rules={[
                    { required: true, message: "Please enter your email address." },
                    { type: "email", message: "Please enter a valid email address." },
                  ]}
                >
                  <Input
                    autoComplete="email"
                    inputMode="email"
                    placeholder="ama@example.com"
                  />
                </Form.Item>

                <Form.Item
                  name="subject"
                  label="Subject"
                  layout="vertical"
                  rules={[
                    { required: true, whitespace: true, message: "Please tell us what your message is about." },
                    { min: 3, message: "The subject should be at least 3 characters." },
                    { max: 100, message: "Please keep the subject under 100 characters." },
                  ]}
                >
                  <Input placeholder="Private dining enquiry" />
                </Form.Item>

                <Form.Item
                  name="message"
                  label="Message"
                  layout="vertical"
                  rules={[
                    { required: true, whitespace: true, message: "Please enter your message." },
                    { min: 10, message: "Please add a little more detail so we can understand your enquiry." },
                    { max: 1000, message: "Please keep your message under 1,000 characters." },
                  ]}
                >
                  <TextArea
                    autoSize={{ minRows: 2, maxRows: 4 }}
                    placeholder="Tell us how we can help"
                  />
                </Form.Item>

                <Form.Item className="contact-submit mb-0!">
                  <Button
                    htmlType="submit"
                    className="h-11! w-full px-5! font-body! text-xs! uppercase tracking-[0.18em]! shadow-none!"
                  >
                    Send message
                  </Button>
                </Form.Item>

                {submitted && (
                  <FormSuccessNotice
                    title="Message submitted"
                    message="Your form has been cleared. This portfolio demo does not send a real message."
                    onDismiss={() => setSubmitted(false)}
                  />
                )}
              </Form>
            </ConfigProvider>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Contact;
