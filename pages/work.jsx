import dynamic from "next/dynamic";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";
const Projects = dynamic(
  () => import("../src/components/ProjectsCard"),
  {
    ssr: false,
  }
);
const Work = () => {
  return (
    <Layout>
      <div className="wrapper">
        <PageTitle title="Projects" />
        <Projects />
      </div>
    </Layout>
  );
};
export default Work;
