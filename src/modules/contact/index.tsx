import { Button } from "@/components/ui/button";
import { Footer } from "@/layout/footer";
import { Header } from "@/layout/header";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export function ContactPage() {
    return (
        <div className="w-full min-h-screen flex flex-col justify-start items-center text-[#6D758F]">
            <Header />
            <div className="py-12 w-full px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#2E364A]">Let us know what you think!</h2>
                    <p className="mt-4 text-[#6D758F]">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis sit aliquam sit nullam.
                    </p>
                    <div className="mt-8 flex flex-col md:flex-row justify-center md:space-x-8 space-y-4 md:space-y-0 text-[#6D758F]">
                        <div className="flex items-center space-x-2 text-start md:text-left">
                            <Image src="https://www.svgrepo.com/show/501544/email.svg" alt="Email" width={24} height={24} priority={true} loading="eager" />
                            <span>Email: contact@company.com</span>
                        </div>
                        <div className="flex items-center space-x-2 text-start md:text-left">
                            <Image src="https://www.svgrepo.com/show/533285/phone.svg" alt="Phone" width={24} height={24} priority={true} loading="eager" />
                            <span>Phone: (414) 687 - 5892</span>
                        </div>
                        <div className="flex items-center space-x-2 text-start md:text-left">
                            <Image src="https://www.svgrepo.com/show/493957/address.svg" alt="Location" width={24} height={24} priority={true} loading="eager"/>
                            <span>Location: 58 Middle Point Rd, San Francisco, 94124</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="w-full" />
            <div className="bg-white py-12 w-full px-4">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
                    <Card className="bg-[#7E8AA4] text-white p-8 rounded-lg flex-1 flex flex-col items-center text-center">
                        <Image src="https://www.svgrepo.com/show/522411/image.svg" alt="Idea" width={48} height={48} priority={true} loading="eager"/>
                        <h3 className="text-xl font-bold mt-4">Have an idea? Let’s make it real today!</h3>
                        <p className="mt-4">
                            Lorem ipsum dolor sit amet consectetur. Porta phasellus ipsum tellus morbi amet orci faucibus lectus lacus vitae feugiat enim.
                        </p>
                        <Button variant="outline" className="bg-white text-[#7E8AA4] mt-6">Browse portfolio</Button>
                    </Card>
                    <Card className="bg-white p-8 rounded-lg flex-1">
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="text-sm font-medium text-[#6D758F]">Name</label>
                                    <Input type="text" id="name" placeholder="Name" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-sm font-medium text-[#6D758F]">Email</label>
                                    <Input type="email" id="email" placeholder="Email" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="phone" className="text-sm font-medium text-[#6D758F]">Phone</label>
                                    <Input type="text" id="phone" placeholder="Phone" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="company" className="text-sm font-medium text-[#6D758F]">Company</label>
                                    <Input type="text" id="company" placeholder="Company" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="message" className="text-sm font-medium text-[#6D758F]">Message</label>
                                <Textarea id="message" placeholder="Type your message here..." className="h-24" />
                            </div>
                            <Button type="submit" className="w-full">
                                Send message
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
            <hr className="w-full" />
            <div className="bg-white py-12 w-full px-4">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-2xl font-bold text-[#2E364A] text-center mb-8">Our Location</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0533542569992!2d105.72985667484593!3d10.012451790093596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0882139720a77%3A0x3916a227d0b95a64!2sFPT%20University!5e0!3m2!1svi!2s!4v1725326573415!5m2!1svi!2s"
                        width="600"
                        height="450"
                        style={{ border: 0, width: "100%", height: "450px" }}
                    ></iframe>
                </div>
            </div>
            <Footer />
        </div>
    );
}
