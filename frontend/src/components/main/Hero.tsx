function Hero() {
  return (
    <div className="bg-hero w-full h-[500px] bg-cover bg-center brightness-75 bg-no-repeat flex items-center justify-center">
      <h1 className="font-vazir  text-center px-4 space-y-6">
        <p className=" text-3xl md:text-4xl lg:text-6xl font-bold text-orange-300  leading-relaxed text-wrap backdrop-blur-2xl px-4 py-3 rounded-sm">
          غذای مورد علاقت رو پیدا کن
        </p>
        <p className="font-vazir text-lg leading-3 text-white py-3 font-semibold">
          با یک اشاره غذا در خونته
        </p>
      </h1>
    </div>
  );
}

export default Hero;
