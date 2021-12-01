import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Curriculum() {
  return (
    <div>
      <Head>
        <title>Computer Science</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar title={'Computer Science'}/>
      <section id="main" className="wrapper">
        <div className="container">

          <header className="major special">
            <h2>Information Technology</h2>
            <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
          </header>

          <a href="#" className="image fit"><img src="/news/sample/pic11.jpg" alt="" /></a>
          <p>
          Future technology must be better and obsolete technology must be improved to provide the technological innovation which is easy to use and fast. Similar to the medical diagnosis which requires doctor to identify the illness of people, identifying the problems in IT system requires the analyst who has knowledge and skills.

Bachelor of Science Program in Information Technology (BSIT) focuses on the preparation of IT system analyst and software engineer for IT market.

We emphasize on the development of students’ knowledge and skills to discover and analyze the weak points of IT systems and improve them with the technological innovations which helps the business to be the leader in the competitive world. Real-world experiences and practical learning are used in teaching and learning to help students understand, learn, analyze, create, interact, and share experiences with each other. Real international environment helps students to be able to speak proper English, work as a team, and be the international leader.
          </p>
        </div>
      </section>

      <section id="concentration" className="wrapper style1">
        <header className="major special">
          <h2>Specialized Tracks</h2>
          <p>
            Software Engineering | Informatics and Data Science
            | Network Technology and Infrastructure
            | Enterprise Systems

            </p>
        </header>

        <div className="inner">
          <article className="feature left">
            <span className="image">
              <img src="images/3students-cover.png" alt="CS" /></span>
            <div className="content">
              <h2>SOFTWARE ENGINEERING</h2>
              <p>
                A track for software engineers, from software developers to software process management, whose aim is to develop the skills to further their career path in the software development industry. Candidates following this track focus on every aspects of software engineering, including software process and management, software development, and application platforms and architectures.
                </p>
            </div>
          </article>

          <article className="feature right">
            <span className="image"><img src="images/pic02.jpg" alt="IT" /></span>
            <div className="content">
              <h2>Information Technology</h2>
              <p>
                Walk hand-in-hand with businesses. Blended the core technology with real-world experience. Graduates are key to the success Digital Transformation.
              </p>
              <ul className="actions">
                <li>
                  <a href="it" className="button alt">More</a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}