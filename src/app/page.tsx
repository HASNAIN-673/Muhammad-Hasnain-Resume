import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function ColorfulResume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 p-4 sm:p-8">
      <Card className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Avatar className="w-32 h-32 sm:w-24 sm:h-24 border-4 border-teal-500">
              <AvatarImage src="/images/pic.jpg" alt="Profile picture" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="text-4xl sm:text-3xl font-bold text-teal-700">MUHAMMAD HASNAIN</CardTitle>
          <p className="text-xl sm:text-lg text-gray-600">Cloud Applied Generative AI</p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-4 px-4">
            <Badge variant="secondary" className="flex items-center gap-2 w-full sm:w-auto">
              <Mail className="w-4 h-4" />
              <span className="break-words">muhammadhasnainkhan500@com</span>
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2 w-full sm:w-auto">
              <Phone className="w-4 h-4" />
              <span>+92 3152856006</span>
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2 w-full sm:w-auto">
              <MapPin className="w-4 h-4" />
              <span>Shah Faisal Town, Pakistan</span>
            </Badge>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-4 px-4">
            <Badge variant="outline" className="flex items-center gap-2 w-full sm:w-auto">
              <Github className="w-4 h-4" />
              <span className="break-words">https://github.com/HASNAIN-673</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2 w-full sm:w-auto">
              <Linkedin className="w-4 h-4" />
              <span className="break-words">https://www.linkedin.com/in/muhammad-hasnain-6521a6252/</span>
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="grid gap-6">
          <section>
            <h2 className="text-2xl font-bold text-teal-700 mb-2">Summary</h2>
            <p className="text-black font-serif text-justify">
              A dedicated and versatile professional with a rich background in diverse industries, including retail, manufacturing,
              and technology. Experienced in roles such as cashier, computer operator, and electrical technician, showcasing adaptability
              and a strong work ethic. Currently advancing skills in Artificial Intelligence and modern web development technologies, 
              including HTML, CSS, Tailwind CSS, JavaScript, TypeScript, Next.js, and API integration. Proficient in using tools like 
              Figma and exploring Agent AI to build intelligent, user-focused applications. Committed to continuous learning and innovation,
              blending past experiences with cutting-edge technologies to deliver impactful solutions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {["JavaScript", "TypeScript", "React", "Node.js", "Python", "Django", "PostgreSQL", "MongoDB", "Docker", "AWS", "Git", "Agile"].map((skill) => (
                <Badge key={skill} className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 text-lg font-semibold rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-teal-700 mb-2">Experience</h2>
            <div className="space-y-4">
              {/* Experience Cards */}
              {[
                {
                  title: "Frontend Developer",
                  company: "Governor Sindh IT Initiative Institute.",
                  period: "2023 - Present",
                  responsibilities: [
                    "Currently pursuing expertise in Artificial Intelligence with a strong focus on frontend technologies.",
                    "Proficient in HTML, CSS, JavaScript, TypeScript, and Next.js for creating modern, responsive interfaces.",
                    "Skilled in API integration and design tools like Figma to deliver seamless user experiences.",
                    "Exploring Agent AI to develop intelligent, interactive, and cutting-edge applications."
                  ]
                },
                {
                  title: "Chase Up Super Market",
                  company: "Chase Up Super Market As a Cashier.",
                  period: "2022 - 2023",
                  responsibilities: [
                    "Efficiently managed cash transactions with accuracy, ensuring excellent customer service during peak hours.",
                    "Maintained a clean and organized checkout area, enhancing the shopping experience for customers.",
                    "Handled cash reconciliations and supported inventory management, ensuring smooth store operations."
                  ]
                },
                {
                  title: "Imtiaz Super Market",
                  company: "Imtiaz Super Market",
                  period: "2020 - 2021",
                  responsibilities: [
                    "Excelled in handling high customer volume with speed and accuracy during peak hours.",
                    "Enhanced multitasking and problem-solving skills while resolving customer queries efficiently.",
                    "Gained expertise in managing cash flows and resolving discrepancies to ensure smooth operations."
                  ]
                },
                {
                  title: "Diamond Super Market",
                  company: "Diamond Super Market",
                  period: "2018 - 2019",
                  responsibilities: [
                    "Began as a warehouse associate, managing stocking and shelf delivery efficiently.",
                    "Promoted to till helper, improving customer interaction and checkout skills.",
                    "Advanced to cashier, ensuring accurate transactions and excellent service."
                  ]
                },
                {
                  title: "Secom Engineering Services Pvt Ltd",
                  company: "Secom Engineering Services Pvt Ltd",
                  period: "2016 - 2017",
                  responsibilities: [
                    "Assisted in troubleshooting and repairing electrical systems, ensuring efficient and safe operations.",
                    "Performed routine maintenance and inspections to prevent system failures and downtime.",
                    "Collaborated with the team to install and upgrade electrical components, enhancing system performance."
                  ]
                },
                {
                  title: "Gatron Industries Project Two Pvt Ltd",
                  company: "Gatron Industries Project Two Pvt Ltd",
                  period: "2011 - 2015",
                  responsibilities: [
                    "Managed data entry and system updates with precision, ensuring timely and accurate information processing.",
                    "Monitored and maintained computer systems to ensure uninterrupted operations and optimal performance.",
                    "Provided technical support to staff, resolving issues efficiently to maintain workflow continuity."
                  ]
                }
              ].map(({ title, company, period, responsibilities }) => (
                <Card key={title}>
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-600">{title}</CardTitle>
                    <p className="text-black font-bold">{company} | {period}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-gray-600">
                      {responsibilities.map((item, index) => (
                        <li key={index} className="text-black font-serif">{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-teal-700 mb-2">Education</h2>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">Intermediate in Computer Science</CardTitle>
                <p className="text-black font-bold">Board Of Secondary Education Karachi | 2008 - 2010</p>
                <p className="text-black font-bold">The Bright Career Institute IT Technology | 2010 - 2011</p>
                <p className="text-black font-bold">Governor Sindh IT Initiative Technology | 2023 - Present</p>
              </CardHeader>
              <CardContent>
                <p className="text-black font-serif text-justify">
                A solid academic foundation in computer science and information technology, complemented by hands-on 
                learning in emerging technologies like Artificial Intelligence, web development,and modern frameworks,
                Proficient in HTML, CSS, Tailwind CSS, JavaScript, TypeScript, Next.js, API integration, and design tools like Figma.
                Continuously advancing technical skills to stay at the forefront of industry trends and deliver innovative, user-focused 
                solutions.
                </p>
              </CardContent>
            </Card>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
