import './skills.css';
import skillImg from '../assets/skillsImg.jpg'

function Skills() {
  return (
    <div className='skills'>
        <div className="languages">
            <div className="language">
                <div className="aboutLang">
                    <div className="nameLogo">
                        <div className="logoSkill"><i class="fa-brands fa-html5"></i></div>
                <div className="nameSkill">HTML</div>
                    </div>
                <div className="percentage">90%</div>
                </div>
                <div className="progress">
                    <progress value={90} max={100}></progress>
                </div>
            </div>
            <div className="language">
                <div className="aboutLang">
                    <div className="nameLogo">
                        <div className="logoSkill"><i class="fa-brands fa-css3"></i></div>
                <div className="nameSkill">CSS</div>
                    </div>
                <div className="percentage">85%</div>
                </div>
                <div className="progress">
                    <progress value={85} max={100}></progress>
                </div>
            </div>
            <div className="language">
                <div className="aboutLang">
                    <div className="nameLogo">
                        <div className="logoSkill"><i class="fa-solid fa-wind"></i>
</div>
                <div className="nameSkill">TAILWIND CSS</div>
                    </div>
                <div className="percentage">85%</div>
                </div>
                <div className="progress">
                    <progress value={85} max={100}></progress>
                </div>
            </div>
            <div className="language">
                <div className="aboutLang">
                    <div className="nameLogo">
                        <div className="logoSkill"><i class="fa-brands fa-git"></i></div>
                <div className="nameSkill">GIT</div>
                    </div>
                <div className="percentage">60%</div>
                </div>
                <div className="progress">
                    <progress value={60} max={100}></progress>
                </div>
            </div>
            <div className="language">
                <div className="aboutLang">
                    <div className="nameLogo">
                        <div className="logoSkill"><i class="fa-brands fa-js"></i></div>
                <div className="nameSkill">JAVASCRIPT</div>
                    </div>
                <div className="percentage">82%</div>
                </div>
                <div className="progress">
                    <progress value={82} max={100}></progress>
                </div>
            </div>
            <div className="language">
                <div className="aboutLang">
                    <div className="nameLogo">
                        <div className="logoSkill"><i class="fa-brands fa-react"></i></div>
                <div className="nameSkill">REACT JS</div>
                    </div>
                <div className="percentage">78%</div>
                </div>
                <div className="progress">
                    <progress value={78} max={100}></progress>
                </div>
            </div>
            <div className="language">
                <div className="aboutLang">
                    <div className="nameLogo">
                        <div className="logoSkill"><i class="fa-brands fa-figma"></i></div>
                <div className="nameSkill">FIGMA</div>
                    </div>
                <div className="percentage">70%</div>
                </div>
                <div className="progress">
                    <progress value={70} max={100}></progress>
                </div>
            </div>
            <div className="language">
                <div className="aboutLang">
                    <div className="nameLogo">
                        <div className="logoSkill"><i class="fa-brands fa-node"></i></div>
                <div className="nameSkill">NODE JS</div>
                    </div>
                <div className="percentage">60%</div>
                </div>
                <div className="progress">
                    <progress value={60} max={100}></progress>
                </div>
            </div>

        </div>
        <div className="skillImg">
            <img src={skillImg} alt="" />

        </div>
    </div>
  )
}

export default Skills;