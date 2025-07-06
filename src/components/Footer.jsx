import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="border-t bg-gray-950 text-white">
            <div className="container mx-auto px-4 py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <FileText className="h-6 w-6 text-primary" />
                            <span className="text-xl font-bold">CoverLetterAI</span>
                        </div>
                        <p className="text-sm text-muted-foreground px-10">
                            AI-powered cover letter generator to help you land your dream job.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/create" className="text-sm text-muted-foreground hover:text-primary">
                                    Create Cover Letter
                                </Link>
                            </li>
                            <li>
                                <Link to="/features" className="text-sm text-muted-foreground hover:text-primary">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-primary">
                                    How-It-Works
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/guides" className="text-sm text-muted-foreground hover:text-primary">
                                    Guides
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link to="/support" className="text-sm text-muted-foreground hover:text-primary">
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} CoverLetterAI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
