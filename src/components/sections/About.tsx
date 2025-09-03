'use client';

import { Button } from '@/components/ui/button';
import LogoLoop from '@/components/LogoLoop/LogoLoop';
import Link from 'next/link';

const About = () => {
  const statsLogos = [
    {
      node: (
        <div className="flex items-center justify-center min-w-[150px] h-[125px] mt-4">
          <img
            src="/images/AGMark.png"
            alt="Company Logo 1"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ),
      title: "Company Logo 1",
    },
    {
      node: (
        <div className="flex items-center justify-center min-w-[120px] h-[100px]">
          <img
            src="/images/Bharat.png"
            alt="Company Logo 2"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ),
      title: "Company Logo 2",
    },
    {
      node: (
        <div className="flex items-center justify-center min-w-[120px] h-[100px]">
          <img
            src="/images/LogoISO.jpg"
            alt="Company Logo 3"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ),
      title: "Company Logo 3",
    },
    {
      node: (
        <div className="flex items-center justify-center min-w-[150px] h-[125px] mt-4">
          <img
            src="/images/India-Organic.jpg"
            alt="Company Logo 4"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ),
      title: "Company Logo 4",
    },
    {
      node: (
        <div className="flex items-center justify-center min-w-[150px] h-[125px] mt-4">
          <img
            src="/images/landscapinglogo.jpg"
            alt="Company Logo 5"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ),
      title: "Company Logo 5",
    },
    {
      node: (
        <div className="flex items-center justify-center min-w-[120px] h-[100px]">
          <img
            src="/images/inf.png"
            alt="Company Logo 6"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ),
      title: "Company Logo 6",
    },
  ];

  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* OUR HISTORY Section */}
        <div className="bg-white rounded-3xl p-12 relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
            <div className="text-[400px] leading-none text-amber-400 rotate-12">
              🌾
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left Content - History Text */}
            <div>
              <div className="mb-8">
                <h2 className="text-5xl font-bold text-gray-900 mb-4">OUR</h2>
                <h3 className="text-4xl font-bold text-green-700 tracking-wide">
                  HISTORY
                </h3>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  We are pleased to introduce ourselves as the leading and
                  unmatched manufacturer of
                  <span className="font-semibold text-green-700">
                    {" "}
                    Insecticides, Herbicides & Weedicides, Fungicides,
                    Fertilizers
                  </span>
                  , Micro Nutrients, and various Plant Growth Regulators.
                  Established in <span className="font-semibold">1973</span> as
                  a trader of agrochemicals, we came into manufacturing in{" "}
                  <span className="font-semibold">1990</span> having to one side
                  a passion for quality control.
                </p>

                <p className="text-gray-700 leading-relaxed text-lg">
                  Guided by the motto of{" "}
                  <span className="italic font-medium text-green-700">
                    &quot;Service to Agriculture&quot;
                  </span>
                  ,<span className="font-semibold"> CROP CHEMICALS</span> group
                  was founded by visionary
                  <span className="font-semibold"> Mr. M.R.Goyal</span> which
                  has now become the fastest-growing concern of the nation in
                  the agro-industry with revenues of more than{" "}
                  <span className="font-bold text-green-600">200 CRs</span>. As
                  far as the company&apos;s financial position is concerned, we are
                  awarded{" "}
                  <span className="font-semibold">
                    A1 ranking by CRISIL Ratings
                  </span>
                  .
                </p>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <span className="font-semibold text-green-700">CCIL</span>{" "}
                    has developed several environment-friendly formulations,
                    which are result-oriented and cost-effective to the farming
                    community. We are geared not only for increasing the yield
                    of farmers but also for providing them with bigger monetary
                    benefits through our modern and reasonable range of crop
                    protection chemicals.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg">
                  These formulations are widely accepted throughout the globe
                  for the control of insects, pests, and a range of diseases in
                  various crop segments. As we believe superiority is the best
                  way of eliminating competition, we consistently maintain the
                  superlative standards of quality which is earning accolades
                  from our clients. Our laboratories are fully equipped with the
                  latest devices and instruments.
                </p>

                <div className="pt-4">
                  <Link href="#contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-green-600 text-green-700 hover:bg-green-50"
                    >
                      GET IN TOUCH
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Content - Visual Element */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Main Image Container */}
                <div className="w-96 h-96 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full flex items-center justify-center relative overflow-hidden shadow-2xl">
                  {/* Wheat stalks background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="text-8xl text-amber-600 absolute top-8 left-8 rotate-12">
                      🌾
                    </div>
                    <div className="text-6xl text-amber-600 absolute bottom-12 right-12 -rotate-12">
                      🌾
                    </div>
                    <div className="text-7xl text-amber-600 absolute top-20 right-16 rotate-45">
                      🌾
                    </div>
                  </div>

                  {/* Central wheat bundle */}
                  <div className="text-9xl z-10 drop-shadow-lg">🌾</div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🧪</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">⚗️</span>
                </div>
                <div className="absolute top-12 -left-8 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl">🔬</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Stats Section with LogoLoop */}
        <div className="w-full overflow-hidden">
          <LogoLoop
            logos={statsLogos}
            speed={40}
            direction="left"
            width="100%"
            logoHeight={140}
            gap={120}
            pauseOnHover={true}
            fadeOut={true}
            scaleOnHover={false}
            ariaLabel="Partner company logos"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
