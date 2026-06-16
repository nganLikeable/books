import FadeIn from "../components/FadeIn/FadeIn";

const features = [
  {
    image: "/discover.jpeg",
    alt: "A dramatic explorer with a magnifying glass",
    title: "Discover",
    description:
      "Search millions of titles and authors powered by the Open Library catalogue. Find your next favourite read in seconds.",
  },
  {
    image: "/track.jpg",
    alt: "Someone buried under a towering pile of books",
    title: "Track",
    description:
      "Organise your reading life across three shelves — Want to Read, Currently Reading, and Read. Your library, always in order.",
  },
  {
    image: "/review.jpg",
    alt: "A very opinionated person holding up a star rating",
    title: "Review",
    description:
      "Rate and write reviews for every book you finish. Build a personal record of your reading journey over time.",
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      {/* hero */}
      <section className="mb-20 text-center">
        <FadeIn delay={0}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
            About{" "}
            <span className="bg-linear-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent pr-1">
              Bookie
            </span>
          </h1>
        </FadeIn>
        <FadeIn delay={150}>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            A home for readers. Built to help you discover books you'll love,
            keep track of what you're reading, and remember what you've thought
            about every story you've lived through.
          </p>
        </FadeIn>
      </section>

      {/* features */}
      <section className="mb-24">
        <FadeIn delay={0}>
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-400 mb-10 text-center">
            What you can do
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 120}>
              <div className="flex flex-col rounded-2xl border border-line-bg bg-form-bg h-full hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <div className="w-full h-44 overflow-hidden">
                  <img
                    src={f.image}
                    alt={f.alt}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="text-base font-bold text-foreground">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* built by */}
      <section className="border-t border-line-bg pt-16">
        <FadeIn delay={0}>
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-400 mb-10">
            Built by
          </h2>
        </FadeIn>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <FadeIn delay={100}>
            <div className="w-28 h-28 rounded-2xl border border-line-bg shrink-0 overflow-hidden">
              <img
                src="/books.JPEG"
                alt="Ngan"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          <div className="flex flex-col gap-3">
            <FadeIn delay={150}>
              <h3 className="text-2xl font-bold text-foreground">Ngan</h3>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-gray-500 leading-relaxed max-w-xl">
                I've been a bookworm since a kid. I love laying hands on old,
                yellowish, dog-eared books I could find at the thrift stores
                whenever I go on a hunt. There's just something about the smell
                and feel of well-loved books that never fail to bring me joy.
              </p>
            </FadeIn>
            <FadeIn delay={280}>
              <p className="text-gray-500 leading-relaxed max-w-xl">
                I built Bookie simply because I want to have a book tracker for
                myself, inspired by goodreads.
              </p>
            </FadeIn>
            <FadeIn delay={360}>
              <p className="text-gray-500 leading-relaxed max-w-xl">
                If you love books half as much as I do, I hope Bookie feels like
                it was made for you. Because in a way, it was.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
