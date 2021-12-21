import Head from 'next/head'
import Navbar from '../components/Navbar'
import CourseTable from '../components/CourseTable'
import { GetStaticProps } from 'next'


const csv = require('neat-csv');
import fs from 'fs';



export default function Home({ courseData }) {
  return (
    <div>
      <Head>
        <title> VMS:Curriculum</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This is the curriculum page of VMS Website. The new and fresh VMS website from Space-Dust team using Next.js, a JavaScript framework bringing the best performance and security in both world. Next.js is widely used by the biggest and most popular companies all over the world like Netflix, Uber, Starbucks, or Twitch. It’s also considered as one of the fastest-growing React frameworks, perfect to work with static sites – which was the hottest topic in the web development world lately. It doesn’t matter if you are planning to build a huge and demanding app to serve millions of users, nor if you are a growing web shop on Shopify. In both cases, you can use the advantages of modern web technology to make your business more efficient online. Uplift your page speed, SEO, and User Experience, and remember that technologies such as Next.js are making the web a better, cleaner, and more user-centric place. And that will always be favorable, not only by Google but, most importantly, by users"></meta>
      </Head>

      <Navbar title={'Curriculum'} transparent={true} />

      

      <section id="one" className="wrapper style1">
        <div className="inner">
          <article className="feature">
            <div className="content">
              <h2>Gamification</h2>
              <p>
                <h3>Business can be fun</h3>
                Quickly evolved to capture the rapid change of technology. The key principle is the strong foundation. Trained by people in the industry. Graduates are globally competitive and ready to thrive in their chosen career path.
                </p>
              <ul className="actions">
                <li>
                  <a href="/cs" className="button alt">More</a>
                </li>
              </ul>
            </div>
            <div className="content">
              <h2>Courses</h2>
              <p>
                <CourseTable data={courseData} />
              </p>
            </div>
          </article>

        </div>
      </section>

    </div>
  )
}



export const getStaticProps: GetStaticProps = async () => {
  // const newsData = await getNewsData()
  // const alumniData = await getAlumniData()
  // const facebookPosts = await getFacebookPosts()
  // console.log(newsData)
  // console.log(alumniData)
  // console.log(facebookPosts)
  const raw = fs.readFileSync('./data/vms-courses.csv', 'utf8');
  const readCSV = async () => {
    const result = await csv(raw, ['code', 'name', 'nameTH', 'category', 'categoryTH', 'type', 'typeTH', 'credits', 'description', 'descriptionTH', 'prerequisite', 'remake', 'remarkTH']);
    console.log('result', result);
    return result
  }

  let courseData = await readCSV()

  return {
    props: {
      courseData
    }
  }
}
