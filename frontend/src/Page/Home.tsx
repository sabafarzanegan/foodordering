import Hero from "@/components/main/Hero";
import Layout from "@/Layout";

function Home() {
  return (
    <Layout>
      <div className="space-y-6">
        <Hero />
      </div>
    </Layout>
  );
}

export default Home;
