import { motion } from "framer-motion";
import { ArrowRight, FileText, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Button = ({ children, className = "", ...props }) => (
    <button
        className={`px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 ${className}`}
        {...props}
    >
        {children}
    </button>
);

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const pathname = location.pathname;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [pathname, isMenuOpen]);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Features", path: "/features" },
        { name: "How It Works", path: "/how-it-works" },
        { name: "Pricing", path: "/pricing" },
    ];

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-100 bg-white/80 backdrop-blur-md border-b-black ${scrolled ? "shadow-sm" : "border-transparent"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center space-x-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
                        aria-label="Go to homepage"
                    >
                        <motion.div whileHover={{ rotate: 10 }} transition={{ duration: 0.2 }}>
                            <FileText className="h-6 w-6 text-blue-600" />
                        </motion.div>
                        <span className="text-xl font-bold text-gray-900">CoverLetterAI</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-blue-600 relative px-1 py-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${pathname === link.path ? "text-blue-600" : "text-gray-700"
                                    }`}
                                aria-current={pathname === link.path ? "page" : undefined}
                            >
                                {link.name}
                                {pathname === link.path && (
                                    <motion.div
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                                        layoutId="navbar-indicator"
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:flex items-center">
                        <Link to="/create" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">
                            <Button className="group">
                                Create Cover Letter
                                <motion.span className="inline-block" whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                                    <ArrowRight className="h-4 w-4" />
                                </motion.span>
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        whileTap={{ scale: 0.9 }}
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6 text-gray-700" />
                        ) : (
                            <Menu className="h-6 w-6 text-gray-700" />
                        )}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <motion.div
                className={`md:hidden bg-white/95 backdrop-blur-lg overflow-hidden ${isMenuOpen ? "block" : "hidden"
                    }`}
                initial={{ opacity: 0, height: 0 }}
                animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    height: isMenuOpen ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}
            >
                <div className="container mx-auto px-4 py-2 space-y-2">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                                opacity: isMenuOpen ? 1 : 0,
                                x: isMenuOpen ? 0 : -20,
                            }}
                            transition={{ delay: isMenuOpen ? index * 0.1 : 0, duration: 0.3 }}
                        >
                            <Link
                                to={link.path}
                                className={`block py-3 px-2 text-base font-medium rounded-lg transition-colors ${pathname === link.path
                                    ? "bg-blue-50 text-blue-600"
                                    : "text-gray-700 hover:bg-gray-100"
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                                aria-current={pathname === link.path ? "page" : undefined}
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                            opacity: isMenuOpen ? 1 : 0,
                            x: isMenuOpen ? 0 : -20,
                        }}
                        transition={{
                            delay: isMenuOpen ? navLinks.length * 0.1 : 0,
                            duration: 0.3,
                        }}
                        className="pt-2 pb-4"
                    >
                        <Link
                            to="/create"
                            className="block"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Button className="w-full">
                                Create Cover Letter
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </motion.header>
    );
}