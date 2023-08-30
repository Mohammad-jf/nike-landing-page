import Button from "../components/Button"
import { arrowRight } from '../assets/icons'



const Hero = () => {
    return (
        <section id="home"
            className="flex w-full flex-col justify-center min-h-screen xl:flex-row gap-10 max-container">

            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full    max-xl:padding-x pt-28">

                <p>our Summer Collection</p>
                <h1>
                    <span>The New Arrival</span>
                    <br />
                    <span>Nike</span>Shoes
                </h1>

                <p>
                    Discover stylish Nike
                    arrivals, quality comfort,
                    and innovation for your
                    active life.
                </p>

                <Button label="shop now" iconUrl={arrowRight} />

            </div>

        </section>
    )
}

export default Hero