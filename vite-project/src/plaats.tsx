import catalpaboom from "/images/catalpaboom.jpg"
import { motion } from "framer-motion"

const Plaats : React.FC = () =>{
    return(
        <>
            <motion.div 
            id='plaats' 
            className='container mx-auto p-8 argent sm:text-justify'
            initial={{opacity: 0, y: -10}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.4, ease: "easeInOut"}}
            viewport={{amount: 0.1}}
            layout
            >
                <h2 className='text-4xl md:text-5xl w-full border-b text-center font-bold  mt-8 mb-4 md:mb-8'>De Plek</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-16'>
                    <img className='w-[300px] m-auto rounded' src={catalpaboom} alt="mooie boom" />
                    <div className="col-span-2">
                        <div className='my-8'>
                            <p>Net na de Tweede Wereldoorlog kochten mijn grootouders dit huis. Het kreeg al snel de naam <b>‘De Catalpa’</b>, ter ere van de meer dan honderd jaar oude boom die majestueus in het midden van de tuin staat. Mijn grootouders stonden bekend om hun gastvrijheid en ‘De Catalpa’ werd een geliefde ontmoetingsplek voor vrienden en familie om het leven te vieren na de verschrikkingen van de oorlog.</p>
                            <p>Na het overlijden van mijn grootvader besloot mijn grootmoeder om alleen nog tijdens de zomermaanden in haar geliefde Catalpa te verblijven. Dit maakte dat het huis een toevluchtsoord werd voor vele familieleden tijdens verbouwingen, scheidingen en verhuizingen.</p>
                        </div>
                        <div className='my-8'>
                        <p>In 2004 kochten mijn man en ik dit huis en renoveerden het volledig. In de lijn van de geest van mijn grootouders hebben we hier ook talloze vrienden en familie verwelkomd.

                            Nu is het mijn wens deze oase van rust beschikbaar te stellen voor jongeren die behoefte hebben aan een plek om tot zichzelf te komen.

                            De naam <b>‘Catalpa’</b> is afgeleid van het Cherokee-woord <b>‘Catawba’</b>, omdat de Cherokee-Indianen delen van deze boom gebruikten als geneesmiddel.

                            De Catalpa is een late bloeier, pas eind juni prijken zijn prachtige bloesems.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Plaats;