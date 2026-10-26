import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const skills = [
    { icon: "🐍", title: "Python", text: "Scripting, OOP and data analysis" },
    { icon: "🗄️", title: "SQL", text: "Querying and managing databases" },
    { icon: "⚡", title: "JavaScript", text: "Interactive web pages" },
    { icon: "⚛️", title: "React", text: "Reusable UI components" },
  ];

  const stats = [
    { value: "10", label: "Days Completed" },
    { value: skills.length, label: "Core Skills" },
    { value: "1", label: "React App" },
  ];

  const footerLinks = [
    { label: "GitHub", url: "https://github.com/sarthakjejurkar7038-lab" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/sarthak-jejurkar-6187aa315" },
  ];

  return (
    <div className="app">
      <Header brand="Sarthak" links={["Home", "Skills", "Contact"]} cta="Hire Me" />
      <Home
        name="Sarthak Jejurkar"
        role="B.Tech CSE Student | Data Analytics"
        tagline="I enjoy working with data and building simple, useful web applications."
        stats={stats}
        skills={skills}
      />
      <Footer
        name="Sarthak Jejurkar"
        tagline="Learning full stack development step by step"
        year={2026}
        links={footerLinks}
      />
    </div>
  );
}

export default App;