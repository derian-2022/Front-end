import Layout from "../components/Layout";
import Link from "next/link";
import { skills, Experiences, projects } from "../profile";

const Index = () => (
  <Layout>
    {/**Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="/derian.png" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Derian AB</h1>
              <h1>FullStack Developer</h1>
              <p>
                Soy un desarrollador web altamente motivado con experiencia en
                diseño y desarrollo de sitios web modernos y receptivos. Mi
                enfoque se centra en crear soluciones atractivas y funcionales
                para mejorar la experiencia del usuario. Tengo habilidades en
                HTML, CSS, JavaScript, React, Node.js y Bootstrap. Además, tengo
                experiencia en desarrollo backend con Node.js, Express y bases
                de datos como MySQL y MongoDB. Mi objetivo es mejorar
                constantemente el rendimiento de los sitios web que desarrollo.
                [Derian]
              </p>
              <a href="/hireme">Hire Me</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/**Second section */}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Skills</h1>

            {skills.map(({ skills, porcentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skills}</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${porcentage}%` }}
                    aria-valuenow="50"
                    aria-aria-valuemin="0"
                    aria-aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experience</h1>

            <ul>
              {Experiences?.map(({ title, description, from, to }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                    {from}-{to}
                  </h5>
                  <p>{description}</p>
                </li>
              ))}
            </ul>

            <Link href="/experience" legacyBehavior>
              <a className="btn btn-light">Know More</a>
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/**Portfolio */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portfolio</h1>
            </div>

            {projects.map(({ name, description, Image }, i) => (
              <div className="col-md-4 p-2" key={i}>
                <div className="card h-100">
                  <div className="overflow">
                    <img src={`/${Image}`} alt="" className="card-img-top" />
                  </div>
                  <div className="card-body">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <a href="https://derian2023.netlify.app/">Know more</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link href="/portfolio" legacyBehavior>
              <a className="btn btn-outline-light">More projects</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

{
  /**1:10:29 */
}

export default Index;
