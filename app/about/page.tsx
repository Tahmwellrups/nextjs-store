import AboutHero from "@/components/about/AboutHero"

function AboutPage() {
  return (
    <section>
      {/* <div>
        <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl">
          We love
          <span className="bg-primary py-2 px-4 rounded-lg tracking-widest text-secondary text-center">
            store
          </span>
        </h1>
        <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero hic
          distinctio ducimus temporibus nobis autem laboriosam repellat, magni
          fugiat minima excepturi neque, tenetur possimus nihil atque! Culpa
          nulla labore nam?
        </p>
      </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="max-w-2xl font-bold text-xl tracking-tight sm:text-6xl">
            Shop like a billionaire
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
            It's never been this easier. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic vitae vero quo quos fuga rerum ipsam odio voluptatibus ad quae!
          </p>
        </div>
        <AboutHero />
      </div>
    </section>
  )
}
export default AboutPage
