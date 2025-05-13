import Footer from "../components/footer"
import Header from "../components/header"
import WhatsAppComponent from "../components/whatsapp"

const ServicesPage = () => {
    return (
        <>
            <Header/>
            <ServiceComponent/>
            <WhatsAppComponent/>
            <Footer/>
        </>
    )
}

const ServiceComponent = () => {
    return (
        <div className="container mt-5 mb-5">
         <h1 className="fw-bold text-danger">Services</h1>
         <hr/>
         <div>
            <h1 className="fw-bold">Core Services</h1>
            <h2>1. Vegetable Seed Merchandising</h2>
            <p>
                We offer a robust selection of open-pollinated and hybrid vegetable seeds sourced from trusted international breeders. Our seeds are carefully selected for high germination percentage, disease resistance, and regional adaptability.
            </p>
            <h6>Major crop lines:</h6>
            <ul>
                <li>Tomato</li>
                <li>Cabbage</li>
                <li>Pepper (Capsicum)</li>
                <li>Onion</li>
                <li>Carrot</li>
                <li>Spinach</li>
                <li>Other leafy vegetables and root crops</li>
            </ul>
            <p>
                We work closely with farmers to guide seed choice and cultivation techniques, ensuring optimal performance under local growing conditions.
            </p>
            <h2>2. Pesticide Efficacy Trials</h2>
            <p> 
                ICM Solutions Ltd has been accredited by PCPB (Pest Control Product Board) to carry out pesticide efficacy trials on cereals, herbs & spices, roots & tuber crops, legumes, flowers, fruits and vegetables.
            </p>
            <p>Our trials expertise:</p>
            <ul>
                <li>Insecticides</li>
                <li>Fungicides</li>
                <li>Herbicides</li>
                <li>Biopesticides</li>
                <li>Nematicides</li>
                <li>Growth Regulators</li>
            </ul>
            <p>
                Our trials are executed in both field and greenhouse settings across multiple agro-ecological zones.
            </p>
            <h2>3. Laboratory Services</h2>
            <p>
                ICM Solutions operates specialized laboratory services to support seed and crop health diagnostics. Our lab provides accurate, timely analyses to inform decisions in both commercial production and research.  
            </p>
            <p>
                Lab Capabilities:
                <ul>
                    <li>Seed germination and purity testing</li>
                    <li>Plant pathology diagnostics (disease and pest identification)</li>
                </ul>
            </p>
            <p>
                These services are tailored for farmers, researchers, and agrochemical developers seeking reliable, science-based insights to improve productivity and compliance. 
            </p>
            <h2>4. Professional Training & Capacity Building</h2>
            <p>
                ICM Solutions Ltd is a registered Management and Supervisory Training Provider
                with the Directorate of Industrial Training (NITA/TRN/2044). We offer both
                on-farm and centralized training to horticultural farms across Kenya and East 
                Africa. This is majorly to offer more knowledge as to the 'Why' behind the 
                daily practices across farms as well as empowering our trainees with skills to
                run operations without supervision. We aim at offering insights that will 
                in turn lead to the farm achieving results with limited loss and time. 
                We have a team of NITA accredited trainers with the skill and knowledge of 
                horticultural farming and practices.
            </p>
            <p>
                Training Areas include:
                <ul>
                    <li>Crop production</li>
                    <li>Plant propagation</li>
                    <li>Crop protection (Integrated Pest Management (IPM))</li>
                    <li>Safe pesticide handling and application</li>
                    <li>Irrigation and fertigation management</li>
                    <li>Greenhouse management</li>
                    <li>Plant nutrition</li>
                    <li>Plant tissue culture</li>
                    <li>Post harvest handling and management</li>
                    <li>Lab and Research</li>
                </ul>
            </p>
            <h2>Target Clients</h2>
            <p>We serve a broad clientele across the agricultural and agrochemical sectors:</p>
            <ul>
                <li>
                	Farmers and grower cooperatives
                </li>
                <li>
                    Horticultural export companies
                </li>
                <li>
                    Agrochemical manufacturers and distributors
                </li>
                <li>
                    Academic and research institutions 
                </li>
                <li>
                    Government ministries and agricultural departments  
                </li>
            </ul>
            <p>
                Our services are designed to be flexible and scalable, allowing for customization based on specific project needs and client objectives.
            </p>
            <h2>Team & Expertise</h2>
            <p>
            Our multidisciplinary team includes:
            </p>
            <ul>
                <li><strong>Agronomists</strong> with regional expertise in crop production</li>
                <li><strong>Trial specialists</strong> with knowledge on trials</li>
                <li><strong>Data analy</strong>with skills in experimental design and statistical validation</li>
                <li><strong>Laboratory technicians</strong> trained in diagnostics and analytical methods</li>
                <li><strong>Training facilitators</strong> experienced in extension work</li>
            </ul>
            <p>
            Our professionals are not only technically competent but also committed to service excellence, ensuring that every client receives value-driven results.
            </p>
            <h2>
            Facilities & Locations
            </h2>
            <p>Our operations are supported by strong infrastructure:</p>
            <ul>
                <li><strong>Head Office (Nakuru):</strong> Equipped with seed storage, sample processing, and administrative functions.</li>
                <li><strong>Trial Stations:</strong> Located in different agro-ecological zones for comprehensive performance testing</li>
                <li><strong>Controlled Environments:</strong> Greenhouse and laboratory access for precision trials</li>
                <li><strong>Laboratory Unit:</strong> For diagnostics and analytical services</li>
            </ul>
            <p>This setup ensures reliable, efficient, and high-quality service delivery across all operational areas.</p>
            <h2>Commitment to Quality</h2>
            <p>
            At ICM Solutions Ltd., we are deeply committed to quality and client trust.
            </p>
            <p>We uphold:</p>
            <ul>
                <li><strong>Scientific and regulatory compliance</strong> across all trial and lab work</li>
                <li><strong>Quality assurance and traceability</strong> in seed distribution</li>
                <li><strong>Ongoing client engagement</strong> through training, feedback, and advisory services</li>
            </ul>
            <p>We pride ourselves on transparency, integrity, and relentless pursuit of agricultural excellence.</p>
         </div>
        </div>
    )
}
export default ServicesPage