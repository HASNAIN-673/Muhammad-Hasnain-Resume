import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

export default function ColorfulResume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 p-8">
      <Card className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Avatar className="w-32 h-32 border-4 border-teal-500">
              <AvatarImage src="/images/pic.jpg" alt="Profile picture" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="text-4xl font-bold text-teal-700">MUHAMMAD HASNAIN</CardTitle>
          <p className="text-xl text-gray-600 text-balance">Cloud Applied Generative AI</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Badge variant="secondary" className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>muhammadhasnainkhan500@com</span>
            </Badge>
            <Badge variant="secondary" className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+92 3152856006</span>
            </Badge>
            <Badge variant="secondary" className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Shah Faisal Town, Pakistan</span>
            </Badge>
          </div>
          <div className="flex justify-center space-x-4 mt-2">
            <Badge variant="outline" className="flex items-center space-x-2">
              <Github className="w-4 h-4" />
              <span>https://github.com/HASNAIN-673</span>
            </Badge>
            <Badge variant="outline" className="flex items-center space-x-2">
              <Linkedin className="w-4 h-4" />
              <span>https://www.linkedin.com/in/muhammad-hasnain-6521a6252/</span>
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
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-purple-600">Frontend Developer</CardTitle>
                  <p className="text-black font-bold">Governor Sindh IT Initiative Institute. | 2023 - Present</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-600">
                    <li className="text-black font-serif">Currently pursuing expertise in Artificial Intelligence with a strong focus on frontend technologies.</li>
                    <li className="text-black font-serif">Proficient in HTML, CSS, JavaScript, TypeScript, and Next.js for creating modern, responsive interfaces.</li>
                    <li className="text-black font-serif">Skilled in API integration and design tools like Figma to deliver seamless user experiences.</li>
                    <li className="text-black font-serif">Exploring Agent AI to develop intelligent, interactive, and cutting-edge applications.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-purple-600">Chase Up Super Market</CardTitle>
                  <p className="text-black font-bold">Chase Up Super Market As a Cashier. | 2022 - 2023</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-600">
                    <li className="text-black font-serif">Efficiently managed cash transactions with accuracy, ensuring excellent customer service during peak hours.</li>
                    <li className="text-black font-serif">Maintained a clean and organized checkout area, enhancing the shopping experience for customers.</li>
                    <li className="text-black font-serif">Handled cash reconciliations and supported inventory management, ensuring smooth store operations.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-purple-600">Imtiaz Super Market</CardTitle>
                  <p className="text-black font-bold">Governor Sindh IT Initiative Institute. | 2020 - 2021</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-600">
                    <li className="text-black font-serif">Excelled in handling high customer volume with speed and accuracy during peak hours.</li>
                    <li className="text-black font-serif">Enhanced multitasking and problem-solving skills while resolving customer queries efficiently.</li>
                    <li className="text-black font-serif">Gained expertise in managing cash flows and resolving discrepancies to ensure smooth operations.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-purple-600">Diamond Super Market</CardTitle>
                  <p className="text-black font-bold">Governor Sindh IT Initiative Institute. | 2018 - 2019</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-600">
                    <li className="text-black font-serif">Began as a warehouse associate, managing stocking and shelf delivery efficiently.</li>
                    <li className="text-black font-serif">Promoted to till helper, improving customer interaction and checkout skills.</li>
                    <li className="text-black font-serif">Advanced to cashier, ensuring accurate transactions and excellent service.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-purple-600">Secom Engineering Services Pvt Ltd</CardTitle>
                  <p className="text-black font-bold">Governor Sindh IT Initiative Institute. | 2016 -2017 </p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-600">
                    <li className="text-black font-serif">Assisted in troubleshooting and repairing electrical systems, ensuring efficient and safe operations.</li>
                    <li className="text-black font-serif">erformed routine maintenance and inspections to prevent system failures and downtime.</li>
                    <li className="text-black font-serif">Collaborated with the team to install and upgrade electrical components, enhancing system performance.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-purple-600">Gatron Industries Project Two Pvt Ltd</CardTitle>
                  <p className="text-black font-bold">Governor IT Initiative Tecnology | 2011 - 2015</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-600">
                    <li className="text-black font-serif">Managed data entry and system updates with precision, ensuring timely and accurate information processing.</li>
                    <li className="text-black font-serif">Monitored and maintained computer systems to ensure uninterrupted operations and optimal performance.</li>
                    <li className="text-black font-serif">Provided technical support to staff, resolving issues efficiently to maintain workflow continuity</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-teal-700 mb-2">Education</h2>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">Intermediate in Computer Science</CardTitle>
                <p className="text-black font-bold">Board Of Secondary Education Karachi       | 2008 - 2010</p>
                <p className="text-black font-bold"> The Bright Career Institute IT Technology | 2010 - 2011</p>
                <p className="text-black font-bold"> Governor Sindh IT Initiative Technology   | 2023 - Present</p>
              </CardHeader>
              <CardContent>
                <li className="text-black font-serif text-justify">A solid academic foundation in computer science and information technology, complemented by hands-on
                   learning in emerging technologies like Artificial Intelligence, web development, and modern frameworks.
                   Proficient in HTML, CSS, Tailwind CSS, JavaScript, TypeScript, Next.js, API integration, and design tools like Figma.
                   Continuously advancing technical skills to stay at the forefront of industry trends and deliver innovative, user-focused solutions.</li>
              </CardContent>
            </Card>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}

