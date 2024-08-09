import Hero from "@/components/main/Hero";
import Layout from "@/Layout";
import coffeLogo from "../../public/image/restaurant.png";

function Home() {
  return (
    <Layout>
      <div className="">
        <Hero />
        {/* seller section */}
        <section className="py-8">
          <div className="container flex items-center justify-between flex-row-reverse flex-wrap mx-auto gap-y-3 ">
            <div>
              <img src={coffeLogo} alt="" className="w-[200px]" />
            </div>
            <div className="text-right space-y-8 font-vazir ">
              <h2 className="font-bold text-2xl leading-loose text-orange-500">
                صاحب کسب و کار هستید؟
              </h2>
              <p className="font-semibold leading-6 text-slate-500">
                با تپسی فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Home;
