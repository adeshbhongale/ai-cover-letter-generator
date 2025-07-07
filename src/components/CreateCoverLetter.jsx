import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Textarea } from "../components/ui/textarea";
import { generateCoverLetter } from "./Prompt";
import { Button } from "./ui/button";

export default function CreateCoverLetter() {
    const [personalFormData, setPersonalFormData] = useState({
        name: "",
        email: "",
        number: "",
        location: "",
        linkedin: "",
    });

    const [jobFormData, setJobFormData] = useState({
        jobTitle: "",
        company: "",
        hiringManager: "",
        department: "",
        jobDescription: "",
    });

    const [skillsFormData, setSkillsFormData] = useState({
        skills: "",
        experience: "",
        education: "",
        college: "",
        achievements: "",
        tone: "professional",
    });

    const [activeTab, setActiveTab] = useState("personal");
    const [generatedCoverLetter, setGeneratedCoverLetter] = useState("");
    const [loading, setLoading] = useState(false);

    const handleInputChange =
        (setter) =>
            (e) => {
                const { id, value } = e.target;
                setter((prev) => ({ ...prev, [id]: value }));
            };

    const validateForm = (formData) => {
        return Object.values(formData).every((val) => val.trim() !== "");
    };

    const handleGenerateCoverLetter = async () => {
        setLoading(true);

        if (!validateForm(personalFormData) || !validateForm(jobFormData) || !validateForm(skillsFormData)) {
            toast.error("Please fill in all required fields before generating the cover letter.");
            setLoading(false);
            return;
        }

        try {
            const coverLetter = await generateCoverLetter(personalFormData, jobFormData, skillsFormData);
            setGeneratedCoverLetter(coverLetter);
            setActiveTab("preview");
        } catch (error) {
            console.error("Error generating cover letter:", error);
            toast.error("An error occurred while generating the cover letter. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto py-10 px-4 max-w-5xl">
            <h1 className="text-5xl font-bold text-center mb-10 mt-10">Create Your Cover Letter</h1>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-4 mb-5">
                    {["personal", "job", "skills", "preview"].map((tab) => (
                        <TabsTrigger
                            key={tab}
                            value={tab}
                            className={
                                activeTab === tab
                                    ? "bg-black text-white"
                                    : ""
                            }
                        >
                            {tab === "personal" && "Personal Info"}
                            {tab === "job" && "Job Details"}
                            {tab === "skills" && "Skills & Experience"}
                            {tab === "preview" && "Preview"}
                        </TabsTrigger>
                    ))}
                </TabsList>

                <TabsContent value="personal">
                    <Card>
                        <CardHeader>
                            <CardTitle>Personal Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Input id="name" value={personalFormData.name} onChange={handleInputChange(setPersonalFormData)} placeholder="Full Name" />
                            <Input id="email" value={personalFormData.email} onChange={handleInputChange(setPersonalFormData)} type="email" placeholder="Email" />
                            <Input id="number" value={personalFormData.number} onChange={handleInputChange(setPersonalFormData)} placeholder="Phone Number" />
                            <Input id="location" value={personalFormData.location} onChange={handleInputChange(setPersonalFormData)} placeholder="Location" />
                            <Input id="linkedin" value={personalFormData.linkedin} onChange={handleInputChange(setPersonalFormData)} placeholder="LinkedIn Profile" />
                        </CardContent>
                        <CardFooter>
                            <Button onClick={() => setActiveTab("job")} className="ml-auto">
                                Next: Job Details
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="job">
                    <Card>
                        <CardHeader>
                            <CardTitle>Job Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Input id="jobTitle" value={jobFormData.jobTitle} onChange={handleInputChange(setJobFormData)} placeholder="Job Title" />
                            <Input id="company" value={jobFormData.company} onChange={handleInputChange(setJobFormData)} placeholder="Company Name" />
                            <Input id="hiringManager" value={jobFormData.hiringManager} onChange={handleInputChange(setJobFormData)} placeholder="Hiring Manager (optional)" />
                            <Input id="department" value={jobFormData.department} onChange={handleInputChange(setJobFormData)} placeholder="Department (optional)" />
                            <Textarea id="jobDescription" value={jobFormData.jobDescription} onChange={handleInputChange(setJobFormData)} placeholder="Job Description" />
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button variant="outline" onClick={() => setActiveTab("personal")}>
                                Back
                            </Button>
                            <Button onClick={() => setActiveTab("skills")}>Next: Skills & Experience</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="skills">
                    <Card>
                        <CardHeader>
                            <CardTitle>Skills & Experience</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Input id="skills" value={skillsFormData.skills} onChange={handleInputChange(setSkillsFormData)} placeholder="Key Skills" />
                            <Textarea id="experience" value={skillsFormData.experience} onChange={handleInputChange(setSkillsFormData)} placeholder="Relevant Experience" />
                            <Input id="education" value={skillsFormData.education} onChange={handleInputChange(setSkillsFormData)} placeholder="Education" />
                            <Input id="college" value={skillsFormData.college} onChange={handleInputChange(setSkillsFormData)} placeholder="college" />
                            <Textarea id="achievements" value={skillsFormData.achievements} onChange={handleInputChange(setSkillsFormData)} placeholder="Achievements" />
                            <Select defaultValue={skillsFormData.tone} onValueChange={(val) => setSkillsFormData((prev) => ({ ...prev, tone: val }))}>
                                <SelectTrigger id="tone">
                                    <SelectValue placeholder="Select a tone" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="professional">Professional</SelectItem>
                                    <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                                    <SelectItem value="confident">Confident</SelectItem>
                                    <SelectItem value="creative">Creative</SelectItem>
                                    <SelectItem value="formal">Formal</SelectItem>
                                </SelectContent>
                            </Select>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button variant="outline" onClick={() => setActiveTab("job")}>
                                Back
                            </Button>
                            <Button onClick={handleGenerateCoverLetter} disabled={loading}>
                                {loading ? <Loader2 className="animate-spin" /> : "Generate Cover Letter"}
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="preview">
                    <Card>
                        <CardHeader>
                            <CardTitle>Your Cover Letter</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <pre className="whitespace-pre-wrap">{generatedCoverLetter || "Your cover letter will appear here..."}</pre>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
