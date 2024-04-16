import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">

      <div className="flex-1">
        <img src={offer} width={773} height={687} 
        className="object-contain w-full" />
      </div>

      <div className="flex flex-1 flex-col">
      

          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
             <span className='text-coral-red'>Special</span> Offer
            <br />
            
          </h2>

          <p className="mt-4 lg:max-w-lg leading-7 info-text"> Get the best offer you can get anywhere else.</p>
          <p className='mt-6 lg:max-w-lg info-text'>We use premium leather and suede, as well as breathable mesh and other high-tech materials, to create shoes that look great and feel even better. </p>

          <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight}/>
          <Button label="Learn More"  backgroundColor="bg-white" borderColor = "border-slate-gray" textColor = "text-slate-gray"/>
          </div>
      </div>

      </section>
  )
}

export default SpecialOffer
