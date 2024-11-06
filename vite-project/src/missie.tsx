import logo_kleur from "/images/logo_catalpa_kleur.png";
import { motion } from 'framer-motion';

const Missie : React.FC = () =>{
    return(
        <>
            <motion.div 
            id='missie' 
            className='container mx-auto mt-8 p-8 sm:text-justify argent'
            initial={{opacity: 0, y: -10}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.4, ease: "easeInOut"}}
            layout
            viewport={{amount: 0.1}}
            >
                <h2 className='text-4xl md:text-5xl font-bold text-center mb-8 w-full border-b'>Missie</h2>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                    <div className='text-justify m-auto col-span-2'>
                        <p className='mb-16'>
                        We zorgen voor een veilige en groene haven voor jongeren die moeilijkheden ervaren op school of in hun leefomgeving. Ons doel is om jongeren de kans te bieden om te vertragen en zich te verbinden met de natuur in al haar facetten. Op deze manier proberen we de jongeren tot rust te brengen en hen de tools aan te reiken om zelf rust te kunnen vinden, ook te midden van de prikkels en druk van de buitenwereld.                    </p>
                        <p className='mb-8'>
                            Op deze plek ontdekken jongeren de schoonheid van de natuur, zorgen ze voor planten en dieren. We streven naar een omgeving van structuur, ritme en eenvoudige handelingen, waar een warme en familiale sfeer heerst. Hier, te midden van de natuur, kunnen jongeren volledig zichzelf zijn en werken aan hun persoonlijke groei en welzijn.
                        </p>
                    </div>
                    <img src={logo_kleur} alt="logo van catalpa met boom" className="w-[250px] m-auto" />
                </div>
            </motion.div>
        </>
    )
}

export default Missie;