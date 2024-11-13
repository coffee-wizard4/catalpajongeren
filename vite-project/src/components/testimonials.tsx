import {motion } from "framer-motion"
import {FaArrowLeft, FaArrowRight} from "react-icons/fa"
import { testimonial } from "../testimonial"
import { useState } from "react"
export const Testimonials : React.FC = () => {

    const container = {
        hidden:{opacity: 0},
        visible:{opacity: 1, transition:{staggerChildren:0.1}}
    }
    const variants = {
        visible:{opacity: 1, scale: 1},
        hidden:{opacity:0, scale: 0.9}
    }

    const testimonials: testimonial[] = [
        {
            img1:["/images/Korneel_1.jpg","de jongen, zittend naast 1 van de schapen van Marie. hij geeft het eten met een grote glimlach."],
            img2:["/images/Korneel_2.jpg","de jongen drinkt een kop thee terwijl hij naar het veld kijkt."],
            text:"We hebben voor De Catalpa gekozen omwille van de afstand en het kleinschalige van de zorgboerderij. Onze zoon ging met plezier naar Marie. Hij genoot voornamelijk van de verzorging van de dieren, het lichte tuinwerk, maar misschien nog het meest van de babbels met thee en het samen bakken. Als ouders apprecieerden we voornamelijk de individuele aanpak."
        },
        {
            img1:["/images/Sitske_1.jpg","een kom zelfgemaakte ramen noodles, afgewerkt met lenteui en gekookte eitjes."],
            img2:["/images/Sitske_2.jpg","het meisje aait O'malley, de kat van Marie."],
            text:"Mijn dochter heeft voornamelijk rust gevonden op De Catalpa in het koken, het verzorgen van de schapen en het knuffelen van de katten. Ik apprecieerde het feit dat er niets geforceerd werd en dat Marie werkte op het tempo van mijn kind."
        },
        {
            img1:["/images/Emily_1.jpg","een foto van het meisje die een schuur groen is aan het verven."],
            img2:["/images/Emily_2.jpg","een foto van het meisje die in een veld zonnenbloemen staat. ze heeft een zonnenbloem in haar handen die ze voor haar gezicht houdt."],
            text:"Omwille van schooluitval zochten we een zinvolle dagbesteding en rustpauze voor onze dochter. Zij genoot van het kleinschalige, het huiselijke en de gemoedelijke sfeer in De Catalpa. Het samen koken, het zaaien van bloemen en groeten, het verpotten gebeurde allemaal op het tempo van onz dochter. Het inspireerde haar zelfs om het thuis ook te proberen. Het feit dat De catalpa helemaal in het groen ligt droeg verder bij tot de rust die ze er ervaarde."
        }
    ]
    const [tmnIndex,setTmnIndex] = useState(0)

    const swapTestimonial = (next: boolean) =>{
        setTmnIndex((next? (tmnIndex + 1) : (tmnIndex - 1) + testimonials.length) % testimonials.length)
    }

    return (
        <>
        <motion.div
        id="testimonials" 
        className="container mx-auto mt-8 p-8 sm:text-justify argent"
        initial={{opacity: 0, y: -10}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.4, ease: "easeInOut"}}
        layout
        viewport={{amount: 0.1}}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 w-full border-b">Getuigenissen</h2>
            <div className="flex justify-center">
                <motion.button whileHover={{scale:1.5}} whileTap={{scale:1}} className="text-2xl px-8 py-2 h-20 m-auto" onClick={() => swapTestimonial(false)}><FaArrowLeft/></motion.button>
                <motion.div key={tmnIndex} initial="hidden" animate="visible" variants={container} className="grid grid-cols-2 w-3/4 gap-y-4 gap-x-4 h-[500px]">
                    <motion.img variants={variants} className="w-96 rounded m-auto" src={testimonials[tmnIndex].img1[0]} alt={testimonials[tmnIndex].img1[1]} />
                    <motion.img variants={variants} className="w-96 rounded m-auto" src={testimonials[tmnIndex].img2[0]} alt={testimonials[tmnIndex].img2[1]} />
                    <motion.p variants={variants} className="col-span-2">{testimonials[tmnIndex].text}</motion.p>
                </motion.div>
                <motion.button whileHover={{scale:1.5}} whileTap={{scale:1}} className="text-2xl px-8 py-2 h-20 m-auto" onClick={() => swapTestimonial(true)}><FaArrowRight/></motion.button>
            </div>
        </motion.div>
        </>
    )
}