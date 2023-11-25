import AboutHomePage from "../components/AboutHomePage";
import AboutSecondPage from "../components/AboutSecondPage";
import AboutServices from "../components/AboutServices";
import AboutValues from "../components/AboutValues";

export default function About() {
  return (
    <div className="bg-white">
      <AboutHomePage />
      <AboutValues />
      <AboutSecondPage />
      <AboutServices />
    </div>
  );
}
