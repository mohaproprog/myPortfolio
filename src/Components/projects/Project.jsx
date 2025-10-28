import './project.css'
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

function Project() {
  return (
    <div className='projects'>
        <div className="project">
            <img src={project1} alt="" />
            <button><a href="https://udusity-uni-2175.vercel.app/">View Project</a></button>
        </div>
        <div className="project">
            <img src={project2} alt="" />
            <button><a href="https://quiz-app-ukh6.vercel.app/">View Project</a></button>
        </div>
        <div className="project">
            <img src={project3} alt="" />
            <button><a href="https://skill-kaabe-project-sdgg.vercel.app/">View Project</a></button>
        </div>

    </div>
  )
}

export default Project