const skills = [
    'React', 'Python', 'Node', 'Github', 'Blender', 'HTML', 'CSS', 'SASS', 'AWS',
    'DJANGO', 'Sequelize', 'SQL Server', 'Postgres', 'MySQL', 'GIT', 'Jira', 'Adobe XD', 
    'Libreria Office', 'Figma', 'Trello'
];

export default function InformationHome() {
    const randomDelay = () => `${Math.random() * 3 + 1}s`;
    
	return (
		
		<div className="w-full min-h-[100vh] bg-[#3d3d3d] p-[20px] md:p-[70px] md:flex md:items-start md:justify-between">	

            <div className="w-full md:w-1/2 h-auto md:h-full">

                <div className="w-full h-auto max-w-[600px] mr-0">
                    <h2 className="text-yellow-500 text-[40px] md:text-[60px] mb-14 font-bebas w-full ">Hola, yo soy Iván S. Carrillo</h2>
                    <p className="text-white text-md mb-4 font-jura max-w-[500px]"><span className="font-bold">Desarrollador Web Fullstack y artista 3D</span>, tengo una gran pasión por la tecnología en general, lo que provocó mi gusto y fascinación por el desarrollo de aplicaciones web y modelado 3D.</p>
                    <p className="text-white text-md mb-4 font-jura max-w-[500px]">Mi compromiso y trabajo me han llevado a colaborar en distintas empresas a lo largo de mi carrera profesional, donde he aprendido diversas tecnologías y metodologías de trabajo.</p>
                    <p className="text-white text-md mb-4 font-jura max-w-[500px]">He participado en diferentes proyectos, siempre aportando con profesionalismo y una gran empatía para apoyar a los equipos de trabajo.</p>
                    <p className="text-white text-md mb-14 font-jura max-w-[500px]">Me gusta emprender, y los trabajos de tipo freelancer son mi especialidad.</p>
                </div>

            </div>

            <div className="w-full md:w-1/2 h-auto md:h-[80vh] flex justify-end items-center flex-col p-[40px]">

                <div className="w-full h-auto text-center p-4">
                    <h2 className="text-gold-neon font-bold text-[60px] font-bebas">Tabla de skills</h2>
                </div>

                <div className="w-full max-w-[400px] h-auto flex flex-wrap gap-3 justify-center items-center ">

                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="skill-item"
                        style={{ animationDelay: randomDelay() }}
                    >
                        <span className="scrolling-text font-jura">{skill}</span>
                    </div>
                ))}

                </div>

            </div>

		</div>

	)

}
