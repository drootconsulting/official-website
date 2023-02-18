import dynamic from "next/dynamic";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";
const PortfolioIsotope = dynamic(
  () => import("../src/components/PortfolioIsotope"),
  {
    ssr: false,
  }
);
const WorksCreative = () => {
  return (
    <Layout>
      <div className="wrapper">
        <PageTitle title="Projects" />
        <PortfolioIsotope />
      </div>
      <Footer />
    </Layout>
  );
};
export default WorksCreative;
