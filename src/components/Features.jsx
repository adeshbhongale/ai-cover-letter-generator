import { ArrowRight, BarChart, Clock, Download, Edit, FileText, Globe, Shield, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import FadeIn from "./ui-animation/FadeIn";
import StaggerChildren from "./ui-animation/StaggerChildren";
import StaggerItem from "./ui-animation/StaggerItem";
import { Button } from "./ui/button";

export default function FeaturesPage() {
    return (
        <div className="pt-10">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-primary/10 to-background py-10 px-4 mt-16">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex flex-col items-center text-center space-y-6">
                        <FadeIn delay={0.2}>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Powerful Features</h1>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p className="text-xl text-muted-foreground max-w-2xl">
                                Discover all the tools and features that make our AI Cover Letter Generator the best choice for job
                                seekers.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Main Features */}
            <section className="py-10 px-4 transition-shadow duration-300">
                <div className="container mx-auto max-w-5xl">
                    <FadeIn delay={0.2}>
                        <h2 className="text-3xl font-bold text-center mb-16">Core Features</h2>
                    </FadeIn>

                    <StaggerChildren>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <StaggerItem>
                                <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-md">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <Sparkles className="h-10 w-10 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">AI-Powered Writing</h3>
                                    <p className="text-muted-foreground">
                                        AI analyzes job descriptions to create perfectly tailored cover letters that highlight
                                        your relevant skills.
                                    </p>
                                </div>
                            </StaggerItem>

                            <StaggerItem>
                                <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-md">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <Clock className="h-10 w-10 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Time-Saving</h3>
                                    <p className="text-muted-foreground">
                                        Generate professional cover letters in seconds. Focus on applying to more jobs instead of
                                        writing.
                                    </p>
                                </div>
                            </StaggerItem>

                            <StaggerItem>
                                <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-md">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <Edit className="h-10 w-10 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Fully Customizable</h3>
                                    <p className="text-muted-foreground">
                                        Edit and refine your cover letter to match your personal style and preferences.
                                    </p>
                                </div>
                            </StaggerItem>
                        </div>
                    </StaggerChildren>
                </div>
            </section>

            {/* Additional Features */}
            <section className="py-10 px-4 bg-muted transition-shadow duration-300">
                <div className="container mx-auto max-w-5xl">
                    <FadeIn delay={0.2}>
                        <h2 className="text-3xl font-bold text-center mb-16">Additional Features</h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FadeIn delay={0.2}>
                            <div className="flex items-start p-6 rounded-lg bg-card hover:shadow-md transition-shadow duration-300">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                                    <Download className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Multiple Export Options</h3>
                                    <p className="text-muted-foreground">
                                        Download your cover letter as PDF, DOCX, or copy to clipboard for easy sharing and application.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="flex items-start p-6 rounded-lg bg-card hover:shadow-md">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                                    <FileText className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Multiple Templates</h3>
                                    <p className="text-muted-foreground">
                                        Choose from a variety of professional templates to match your industry and style preferences.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn>
                            <div className="flex items-start p-6 rounded-lg bg-card hover:shadow-md">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                                    <Shield className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Privacy Protection</h3>
                                    <p className="text-muted-foreground">
                                        Your data is secure and never shared. We prioritize your privacy throughout the process.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn>
                            <div className="flex items-start p-6 rounded-lg bg-card hover:shadow-md">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                                    <BarChart className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">ATS Optimization</h3>
                                    <p className="text-muted-foreground">
                                        Our AI ensures your cover letter passes through Applicant Tracking Systems with relevant keywords.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn>
                            <div className="flex items-start p-6 rounded-lg bg-card hover:shadow-md transition-shadow duration-300">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                                    <Zap className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Instant Generation</h3>
                                    <p className="text-muted-foreground">
                                        Get your cover letter in seconds with our high-performance AI processing.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn>
                            <div className="flex items-start p-6 rounded-lg bg-card hover:shadow-md transition-shadow duration-300">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                                    <Globe className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Multi-Language Support</h3>
                                    <p className="text-muted-foreground">
                                        Create cover letters in multiple languages to apply for international positions.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-10 px-4 flex justify-center items-center w-full bg-primary text-primary-foreground transition-shadow duration-300">
                <div className="container mx-auto max-w-5xl text-center">
                    <FadeIn>
                        <h2 className="text-3xl font-bold mb-6">Ready to Experience These Features?</h2>
                    </FadeIn>
                    <FadeIn>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Start creating professional cover letters today and land your dream job faster.
                        </p>
                    </FadeIn>
                    <FadeIn>
                        <Link to="/create">
                            <Button className=" rounded-lg border md:flex-row mx-auto gap-x-2 group bg-sky-200" size="lg" >
                                Create Your Cover Letter Now
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
