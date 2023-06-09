import SliderKeyFigures from "../components/about/SliderKeyFigures";
import Contact from "../components/about/Contact";

export default function About() {
  return (
    <section className="flex flex-col gap-8">
      <article className="flex flex-col items-center gap-3 md:flex-row md:gap-8">
        <div className="flex flex-col gap-3 self-start md:basis-2/3">
          <h1>ABOUT US</h1>
          <p>
            Origins is born from the fusion of 2 EMG subsidiary companies : On
            Rewind & Netco Sport both specialising in digital services tailored
            for broadcasters and sports federations. They are backed up by EMG's
            unique know-how and world-renowned expertise to master the entire
            value chain from image creation to distribution.‍
          </p>
          <p>
            Netco Sports, created in 2008 and integrated into the group "EMG" in
            2015, has a strong experience in developing premium tailored
            mobile/TV/console applications in the sports industry. On Rewind,
            born in 2015 and part of EMG since 2017, is an innovative company,
            specialising in OTT and new UX products.
          </p>
          <p>
            As a result of merging these two companies together in 2020, under
            the name "Origins Digital", we can now address all digital projects
            with a new product-oriented strategy, gathering our wide experience
            through every sport and every device.
          </p>
        </div>
        <div className="flex items-center justify-center gap-6 md:h-96 md:basis-1/3 md:flex-col">
          <img
            className="min-w-[80px]"
            width="80"
            height="auto"
            src="../assets/img/aboutus/origins_digital_dark.svg"
            alt="logo_origins_digital"
          />
          <img
            className="min-w-[200px]"
            width="200"
            height="auto"
            src="../assets/img/aboutus/rewind.svg"
            alt="logo_rewind_netco"
          />
        </div>
      </article>
      <article className="flex flex-col gap-3">
        <h1>WHAT WE PROVIDE</h1>
        <p>
          Fans have come to expect content to be available anytime, anywhere,
          such as live streaming, on-demand coverage as well as supporting
          statistics and analysis. On the other hand, rights holders need to
          innovate to capture their attention and connect with them whether they
          are in a venue, at home or on the move. We create innovative user
          experience and provide our customers with a unique offering for their
          audiences.
        </p>
      </article>
      <article className="flex flex-col gap-3">
        <h1>KEY FIGURES</h1>
        <SliderKeyFigures />
        {/* Slider component */}
      </article>
      <article className="flex flex-col gap-3">
        <h1>CONTACT US</h1>
        {/* Slider component */}
        <Contact />
      </article>
      <article className="flex flex-col gap-3">
        <h1>WHERE TO FIND US</h1>
        {/* Slider component */}
      </article>
    </section>
  );
}
