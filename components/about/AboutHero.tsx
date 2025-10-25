import Image from 'next/image'
import CardSwap, { Card } from '../ui/CardSwap'
import hero1 from '@/public/images/hero1.jpg'
import hero2 from '@/public/images/hero2.jpg'
import hero3 from '@/public/images/hero3.jpg'

const cardImages = [hero1, hero2, hero3]

function AboutHero() {
  return (
    <div className='hidden lg:block' style={{ height: '600px', position: 'relative' }}>
      <CardSwap
        cardDistance={60}
        verticalDistance={70}
        delay={5000}
        pauseOnHover={false}
      >
        {cardImages.map((image, index) => {
            return (
              <Card key={index} className="p-4 border-4 rounded-2xl">
                <Image
                  src={image}
                  alt="about-hero"
                  className="w-full h-[22rem] rounded-md object-cover"
                />
              </Card>
            )
        })}
      </CardSwap>
    </div>
  )
}

export default AboutHero