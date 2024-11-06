import marie from "/images/marie.jpg"
import deImker from "/images/imkermarie.jpg"
import { motion } from "framer-motion"

const WieBenIk : React.FC = () =>{
    return(
        <>
            <motion.div 
            id="marie" 
            className="container argent dark-green m-auto p-8"
            initial={{opacity: 0, y: -10}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.4, ease: "easeInOut"}}
            viewport={{amount: 0.1}}
            layout
            >
                <h2 className="md:text-5xl text-4xl text-center border-b mb-8 font-semibold">Wie ben ik?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <img src={marie} alt="foto van marie met een lekker stuk brood" className="rounded w-[300px] m-auto"/>
                    <div className="m-auto">
                        <p className="sm:text-justify p-4">Mijn naam is Marie Vanaudenhove en al van in mijn jeugd deed ik niets liever dan samenwerken met andere mensen. Ik was actief betrokken bij verschillende verenigingen en organiseerde op school talloze evenementen met als voornaamste drijfveer 'samen zijn met anderen'.</p>

                        <p className="sm:text-justify p-4">Na mijn studies Communicatiewetenschappen koos ik voor een eerder commerciële rol in de reclamewereld. Een paar jaar later besefte ik echter dat ik liever met jongeren wilde werken en besloot ik opnieuw te studeren, dit keer taal- en letterkunde. Daarna begon ik aan een carrière van 15 jaar als leraar in verschillende vormen van het secundair onderwijs. Wat ik het meeste waardeerde aan lesgeven, was het coachen van mijn leerlingen. Ik was altijd nieuwsgierig naar wat er in hen omging en ik vond niets fijner dan het ontdekken en ontwikkelen van hun talenten. Hoewel ik officieel geen leerlingbegeleider was, heb ik veel leerlingen intensief begeleid bij het overwinnen van uiteenlopende uitdagingen.</p>
                    </div>
                    <div className="m-auto">
                        <p className="sm:text-justify p-4">Na die 15 jaar waagde ik de sprong naar een rol als schooldirecteur. Zelfs in die leidinggevende functie maakte ik altijd tijd vrij voor de leerlingen die extra aandacht nodig hadden.</p>
                        <p className="sm:text-justify p-4">In de lente van 2022 werd ik gedwongen mijn carrière als schooldirecteur stop te zetten omwille van een burn-out. Tijdens mijn genezingsproces werd me al snel duidelijk dat mijn passie voor het begeleiden van jongeren nog niet was veranderd. Ik heb me gerealiseerd dat mijn kracht ligt in het verbinding maken met jonge mensen, naar hun behoeften te luisteren en hen te helpen ontdekken wie ze zijn, wat ze nodig hebben, hoe ze innerlijke rust kunnen vinden en hoe ze hun talenten kunnen ontplooien.</p>
                    </div>
                    <img src={deImker} alt="marie en man bij de bijenkorf" className="rounded w-[500px] m-auto" />
                </div>
            </motion.div>
        </>
    )
}

export default WieBenIk;