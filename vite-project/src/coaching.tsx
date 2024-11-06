import { motion } from "framer-motion"

const Coaching : React.FC = () =>{
    return (
        <>
            <motion.div 
            id="coaching" 
            className="container mx-auto mt-8 p-8 sm:text-justify argent"
            initial={{opacity: 0, y: -10}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.4, ease: "easeInOut"}}
            layout
            viewport={{amount: 0.1}}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 w-full border-b">Coaching</h2>
                <div className="m-auto md:w-3/4 mt-8">
                    <h3 className="text-3xl  font-semibold">Voor wie?</h3>
                    <p className="text-xl font-semibold">Kinderen en jongeren die behoefte hebben aan ondersteuning bij het omgaan met o.a.:</p>
                    <ul className="list-disc p-4">
                        <li>stress, druk, verwachtingen, onrust</li>
                        <li>faalangst</li>
                        <li>hoogsensitiviteit</li>
                        <li>relatie- en communicatieproblemen</li>
                        <li>pesten of gepest worden</li>
                        <li>motivatieproblemen</li>
                    </ul>
                </div>

                <div className="m-auto text-justify md:w-3/4  mt-8">
                    <h3 className="text-3xl  font-semibold">Wat houdt het in?</h3>
                    <div className="my-4">
                        <p>De coaching is gericht op het herontdekken van innerlijke kracht en het aanpakken van uitdagingen. Ik stel geen diagnoses maar luister in een intakegesprek naar zowel de jongere als de ouders om de behoeften te begrijpen.</p>
                        <p>De coachingsessies zijn dynamisch en flexibel, op maat gemaakt voor elke unieke jongere. We verkennen stress, begrijpen de gevolgen, ontdekken manieren om deze te verminderen. Samen identificeren we de bronnen van stress en ontwikkelen we strategieën om ermee om te gaan.</p>
                        <p>Elk traject is een persoonlijke reis, afgestemd op de individuele behoeften en dynamiek van de jongere.</p>
                    </div>
                </div>

                <div className="m-auto text-justify md:w-3/4  mt-8">
                    <h3 className="text-3xl  font-semibold">Hoe verloopt een coaching sessie?</h3>
                    <p className="my-4">Een sessie duurt 1,5 uur en is aangepast aan de behoeften van de jongere. De sessies kunnen in de natuur gehouden worden tijdens een wandeling of in de vertrouwde praktijkruimte.</p>
                </div>
            </motion.div>
        </>
    )
}

export default Coaching