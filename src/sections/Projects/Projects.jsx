import styles from './ProjectsStyles.module.css';
import fullStack from '../../assets/fullStack.jpg';
import powerBi from '../../assets/powerBi.jpg';
import python from '../../assets/python.jpg';
import extension from '../../assets/extension.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={fullStack}
          // link=""
          h3="Full Stack"
          p="Developed React JS frontend for 
          efficient patient data management."
        />
        <ProjectCard
          src={powerBi}
          // link=""
          h3="Power BI"
          p="Power BI dashboard for VP insights, using PostgreSQL, Python, and DAX."
        />
        <ProjectCard
          src={python}
          // link=""
          h3="Python Automation"
          p="Automated solution reduced document preparation time from 3 days to 3 minutes."
        />
        <ProjectCard
          src={extension}
          // link=""
          h3="Azure Extention"
          p="Azure code review extension automates analysis, improving efficiency and quality."
        />
      </div>
    </section>
  );
}

export default Projects;
