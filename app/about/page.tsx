import AboutHero from "@/components/about/AboutHero"

function AboutPage() {
  return (
    <section>
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
