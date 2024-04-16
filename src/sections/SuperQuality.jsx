import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
      

          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            We Provide You <span className='text-coral-red'>Super</span>
            <br />
            <span className="text-coral-red inline-block mt-3">Quality</span> Shoes
          </h2>

          <p className="mt-4 lg:max-w-lg leading-7 info-text"> Our shoes are made with the highest quality materials and craftsmanship to ensure that they are both comfortable and durable. We use premium leather and suede, as well as breathable mesh and other high-tech materials, to create shoes that look great and feel even better.</p>
          <p className='mt-6 lg:max-w-lg info-text'>We use premium leather and suede, as well as breathable mesh and other high-tech materials, to create shoes that look great and feel even better. </p>

          <div className="mt-11">
          <Button label="View Details"/>
          </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img 
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>

    </section>
  )
}

export default SuperQuality
