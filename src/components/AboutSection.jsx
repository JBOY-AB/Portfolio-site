import { Briefcase,User, Code } from "lucide-react";

export const AboutSection = () => {
    return (<section id="about" className="py-24 px-4 relative">
        {""}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary "> Me</span>
            </h2>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold ">Passionate Web developer & Tech Creator</h3>

                    <p className=" text-muted-foreground">
                       With over 3years of experience in web development,
                        I specialize in crafting dynamic and responsive web applications. My expertise is in the front-end technologies,
                        enabling me to deliver comprehensive solutions that meet client needs.
                    </p>

                    <p className="text-muted-foreground">
                        I am Passionate about building user-friendly, efficient, and visually appealing digital experiences.
                        I thrive in collaborative environments and am always eager to embrace new challenges and technologies
                         in the ever-evolving tech landscape.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>
                        <a href="/Jeremiah_Abiona_Ayoola_CV.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download Cv
                        </a>

                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web developement</h4>
                                <p className="text-muted-foreground">
                                    Building responsive and dynamic web applications using 
                                    modern technologies.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                         <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>

                              <div className="text-left">
                                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                <p className="text-muted-foreground">
                                    Designing Intuituive user interface and seamless user
                                    experiences for web applications.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                         <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>

                             <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    Project Management
                                </h4>
                                <p className="text-muted-foreground">
                                  Leading projects from conception withagile
                                    methodologies to ensure timely delivery.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};