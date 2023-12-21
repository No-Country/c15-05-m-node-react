import "./Footer.componet.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  const equipo = [
    {
      id: 1,
      rol: "Gerente Proyecto (PM)",
      name: "Gloria Nabor",
      gitHub: "https://github.com/Gloria-Nabor",
      linkedin: "https://www.linkedin.com/in/gloria-nabor/en/",
      image: "https://i.imgur.com/7c1XLaf.jpg",
    },
    {
      id: 2,
      rol: "Tester de Calidad (QA)",
      name: "Arelys Acevedo",
      gitHub: "https://github.com/acad2018",
      linkedin: "https://www.linkedin.com/in/arelys-acevedo",
      image: "https://i.imgur.com/o4QhzO8.jpg",
    },
    {
      id: 3,
      rol: "Tester de Calidad (QA)",
      name: "Pinamba Totolero",
      gitHub: "https://github.com/Pinatorto",
      linkedin: "https://www.linkedin.com/in/pinamba-tortolero-9b72b223/",
      image: "https://i.imgur.com/RkgMMen.jpg",
    },
    {
      id: 4,
      rol: "Desarrollador",
      name: "Carla Aular",
      gitHub: "https://github.com/CarlaJoha",
      linkedin: "https://www.linkedin.com/in/carlajoha/",
      image: "https://i.imgur.com/6O8iEtg.jpg",
    },
    {
      id: 5,
      rol: "Desarrollador",
      name: "Franco Deanquin",
      gitHub: "https://github.com/Francodeanquin",
      linkedin: "https://www.linkedin.com/in/franco-deanquin",
      image: "https://i.imgur.com/Zchecq4.jpg",
    },
    {
      id: 6,
      rol: "Desarrollador",
      name: "Torres Richard",
      gitHub: "https://github.com/TorresRichardtorrot",
      linkedin: "https://www.linkedin.com/in/richard-torres-n1/",
      image: "https://i.imgur.com/YCOQckz.png",
    },
    {
      id: 7,
      rol: "Desarrollador",
      name: "Virginia Montoya",
      gitHub: "https://github.com/mvirm",
      linkedin: "https://www.linkedin.com/in/virginiamontoya/",
      image: "https://i.imgur.com/OQQxgaN.jpg",
    },
  ];
  return (
    <div className="footer">
      <h2 className="footer-name">
        Equipo de Trabajo <span className="footer-span"> iPunto</span>
      </h2>
      <div className="footer-box-container">
      {equipo.map((p) => (
          <div className="footer-card" key={p.id}>
            <div className="footer-card-image">
            <img
              src={p.image}
              alt={`image ${p.name}`}
              className="footer-image"
            />
            </div>
            <div className="footer-card-content">
              <h4 className="footer-card-title">
                {p.name}
              </h4>
              <p className="footer-card-text">
                {p.rol}
              </p>
              <a
                className="footer-card-link"
                href={p.gitHub}
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
              <a
                className="footer-card-link"
                href={p.linkedin}
                target="_blank"
                rel="noreferrer"
              >
               <LinkedInIcon/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
