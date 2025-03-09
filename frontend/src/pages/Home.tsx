import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import QnA from "./QnA";
import QuestionList from "../components/QuostionList";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        {/* Input Pertanyaan */}
        <QnA />

        {/* Daftar Pertanyaan */}
        <QuestionList />
      </div>
    </div>
  );
}

export default Home;
