import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MailIcon,
  PhoneIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  UserIcon,
} from "lucide-react";

export default function DevOpsPortfolio() {
  const skills = [
    { name: "AWS" },
    { name: "Docker" },
    { name: "Kubernetes" },
    { name: "Jenkins" },
    { name: "Ansible" },
    { name: "Terraform" },
    { name: "Python" },
    { name: "Git" },
    { name: "SonarQube" },
    { name: "MongoDB" },
    { name: "MySQL" },
    { name: "Prometheus" },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <Avatar className="w-64 h-80 mx-auto mb-4 rounded-full overflow-hidden ">
          <AvatarImage
            src="/images/MyPic.jpg"
            alt="Kalyan's profile picture"
            className="object-cover w-full h-full"
          />
          <AvatarFallback>KY</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold mb-2">Kalyan</h1>
        <h2 className="text-2xl text-gray-600 mb-4">Cloud DevOps Engineer</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          With 4.4 years of experience in DevOps Engineering and AWS cloud
          computing operations, I specialize in building and maintaining
          scalable, reliable, and efficient cloud infrastructure.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" className="bg-black text-white hover:bg-gray-800">
            <MailIcon className="mr-2 h-4 w-4" /> kalyan.yadlapalli8@gmail.com
          </Button>
          <Button size="lg" className="bg-black text-white hover:bg-gray-800">
            <PhoneIcon className="mr-2 h-4 w-4" /> +917904061707
          </Button>
        </div>
      </header>

      {/* Skills Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className="text-lg py-2 px-4 justify-center flex items-center bg-white border border-gray-200"
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        <Card className="mb-6 border border-gray-200">
          <CardHeader>
            <CardTitle>Cloud DevOps Engineer</CardTitle>
            <CardDescription>
              Virtusa Consulting Services Pvt Ltd | May 2021 - Present
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Implemented CI/CD pipelines using Jenkins, integrating SonarQube
                for automated code quality analysis.
              </li>
              <li>
                Developed custom Jenkins pipelines with SonarQube scans and
                policy gates to ensure code quality.
              </li>
              <li>
                Deployed Docker containers into Kubernetes clusters via Jenkins
                pipelines using Helm.
              </li>
              <li>
                Configured and managed AWS services including Lambda, API
                Gateway, EC2, S3, and DynamoDB.
              </li>
              <li>
                Wrote CloudFormation templates and Terraform scripts for
                infrastructure as code (IaC).
              </li>
              <li>Managed database administration for MongoDB and MySQL.</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle>Cloud DevOps Engineer</CardTitle>
            <CardDescription>
              AI Being Software Solutions | May 2020 - May 2021
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Worked on Terraform, AWS Cloud services, Python, and Shell
                scripting.
              </li>
              <li>Implemented DevOps practices and managed databases.</li>
              <li>Utilized Datadog for monitoring and observability.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BriefcaseIcon className="mr-2 h-5 w-5" />
                  Crate and Barrel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Worked with AWS Cloud, Docker, Jenkins, Tomcat, and Kubernetes
                  to deliver efficient DevOps solutions.
                </p>
                <p className="mt-2">
                  <strong>Duration:</strong> May 2021 to Aug 2024
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BriefcaseIcon className="mr-2 h-5 w-5" />
                  Solar Aid
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Utilized Terraform, AWS Cloud services, Python, Shell
                  scripting, AWS CloudFormation, DevOps practices, and Datadog
                  for comprehensive cloud solutions.
                </p>
                <p className="mt-2">
                  <strong>Duration:</strong> April 2020 to April 2021
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle className="flex items-center">
              <GraduationCapIcon className="mr-2 h-5 w-5" />
              B. Tech in Computer Science and Engineering
            </CardTitle>
            <CardDescription>Kalasalingam University, Madurai</CardDescription>
          </CardHeader>
        </Card>
      </section>

      {/* Personal Details Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Personal Details
          </h2>
          <Card className="border border-gray-200">
            <CardContent className="mt-4">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <UserIcon className="mr-2 h-5 w-5" />
                  <span>
                    <strong>Marital status:</strong> Single
                  </span>
                </li>
                <li className="flex items-center">
                  <UserIcon className="mr-2 h-5 w-5" />
                  <span>
                    <strong>Languages:</strong> English, Hindi, Telugu, Tamil
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <p className="mb-8 text-lg">
          Interested in working together or have any questions? Feel free to
          reach out!
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" className="bg-black text-white hover:bg-gray-800">
            <MailIcon className="mr-2 h-4 w-4" /> Email Me
          </Button>
          <Button size="lg" className="bg-black text-white hover:bg-gray-800">
            <PhoneIcon className="mr-2 h-4 w-4" /> Call Me
          </Button>
        </div>
      </section>
    </div>
  );
}
