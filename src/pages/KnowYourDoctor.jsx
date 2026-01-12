import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, GraduationCap, Medal, Star, User, Globe, Activity, Phone } from 'lucide-react';
import docImg from '../assets/doctor_seated.png';

const KnowYourDoctor = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative bg-dark text-white py-20">
                <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="dotPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill="currentColor" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#dotPattern)" />
                    </svg>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="w-full md:w-1/3"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-20 transform scale-110"></div>
                                <img
                                    src={docImg}
                                    alt="Dr. G.S. Prabudoss"
                                    className="w-full max-w-sm mx-auto rounded-3xl shadow-2xl border-4 border-white/10 relative z-10"
                                />
                                <div className="absolute bottom-4 right-4 bg-primary text-white px-6 py-3 rounded-full shadow-lg z-20">
                                    <p className="font-bold text-lg whitespace-nowrap">20+ Years of Excellence</p>
                                </div>
                            </div>
                        </motion.div>
                        <div className="w-full md:w-2/3 text-center md:text-left">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-block bg-white/10 text-secondary border border-secondary/30 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4"
                            >
                                Surgical Gastroenterologist
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 leading-tight"
                            >
                                PHF.Prof. Dr. <br />
                                <span className="text-white">
                                    Gopalsamy Santhanam Prabudoss
                                </span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-xl text-gray-200 max-w-4xl mb-6 leading-relaxed bg-black/20 p-4 rounded-lg backdrop-blur-sm border border-white/5"
                            >
                                Director of Chennai Obesity & Gastro Surgeons Centre (COGS). A pioneer in painless nasal endoscopy and a leading authority in bariatric and metabolic surgery.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mb-8"
                            >
                                <h3 className="text-sm font-bold uppercase text-gray-400 mb-2">Qualifications</h3>
                                <p className="text-gray-200 leading-relaxed text-sm md:text-base font-medium">
                                    M.B.B.S, M.S, M.Ch (Surgical Gastroenterology), F.I.A.G.E.S, F.M.A.S, DIPLOME D’ UNIVERSITE DE CHIRURGIE LAPAROSCOPIQUE, F.I.C.R.S, F.I.M.S.A, Mini Fellowship in Laparoscopic Bariatric Surgery (Cleveland, USA), F.A.L.S, F.I.C.S (U.S.A), P.G. Diploma in Hospital Management, EFIAGES.
                                </p>
                            </motion.div>

                            <div className="flex flex-col md:flex-row gap-8 text-left border-t border-white/10 pt-6">
                                <div>
                                    <h4 className="text-secondary font-bold mb-1 flex items-center gap-2"><Phone size={16} /> Contact</h4>
                                    <p className="text-gray-300 text-sm">+91 92821 33313</p>
                                </div>
                                <div>
                                    <h4 className="text-secondary font-bold mb-1 flex items-center gap-2"><Globe size={16} /> Email</h4>
                                    <p className="text-gray-300 text-sm">drprabudoss@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Biography Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-2/3">
                            <h2 className="text-3xl font-bold text-dark mb-6 flex items-center gap-3">
                                <User className="text-primary" />
                                About the Doctor
                            </h2>
                            <div className="prose prose-lg text-gray-600 space-y-4 text-justify">
                                <p>
                                    Prof. Dr G.S. Prabudoss graduated from Rajah Muthiah Medical College, Annamalai University, Chidambaram. He completed his Masters in General Surgery and managerial postgraduation in Hospital Management from Annamalai University. He completed his Super speciality degree M.Ch (Surgical gastroenterology) from Sri Ramachandra University with a <strong>University Gold medal in the year 2008</strong> to be the youngest qualified surgical gastroenterologist form TN.
                                </p>
                                <p>
                                    He has presented various scientific papers during in post graduation and won the <strong>silver Medal</strong> for the best P.G. paper presentation.
                                </p>
                                <p>
                                    After his super speciality training in surgical gastroenterology, to fulfil his passion was towards minimally invasive surgery & Bariatric surgery he got trained from various reputed Institutions like University of Straubourg, France, University Hospitals, Cleveland Medical Centre, Cleveland, USA, Indian Association of Gastrointestinal Endoscopic Surgeons International College of Surgeons and World Association of Laparoscopic Surgeons. He is a trained Robotic surgeon and a National faculty at the World Laparoscopic Hospital, Gurgaon, and trains surgeons in minimally invasive Robotic surgery across India and abroad.
                                </p>
                                <p>
                                    He is a pioneer in painless nasal endoscopy and presented his international paper in IMSACON 2014. He has done over <strong>5000 diagnostic & therapeutic Endoscopies</strong>. Having trained in endobaritrics intervention for weight loss he offers various endoscopic interventional procedures for weightloss. He has patented Nasal endoscopy and been granted for the same.
                                </p>
                                <p>
                                    As Visiting Professor of Rajah Muthiah Medical College and Professor in Sree Balaji Medical College, he continues to train his post graduates more than a decade. He is also a teaching faculty in Minimally Invasive Surgical Training Institute, Chennai wherein he trains surgeons across India for last 5 years.
                                </p>
                                <p>
                                    As a Former Visiting Teaching Faculty of Hemas Hospitals, Colombo- an Australian medical council accredited hospital, he visited and operated various complex Bariatric surgical procedures for last three years. He also trains surgeons from various parts of Sri Lanka.
                                </p>
                                <p>
                                    Presently, he is a senior consultant, Bariatric & Metabolic Surgery, in various corporate hospitals in Chennai. Teaming up with Dr Neha Prashant Shah, they offer a wide variant of weightloss options and treatments to all patients from Laparoscopic Bariatric surgery, Endobariatric surgery, Revisional surgery, Metabolic surgery to medical weightloss. He has performed over <strong>1000 advanced and complex laparoscopic procedures</strong> and over hundreds of Bariatric procedures including revisions.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/3">
                            <div className="bg-light rounded-2xl p-8 sticky top-24">
                                <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-2">
                                    <Briefcase className="text-primary" size={20} />
                                    Current Positions
                                </h3>
                                <div className="space-y-6">
                                    <div className="border-l-4 border-primary pl-4">
                                        <h4 className="font-bold text-dark">Director</h4>
                                        <p className="text-sm text-gray-600">Chennai Obesity & Gastro Surgeons Centre (COGS), Chennai</p>
                                    </div>
                                    <div className="border-l-4 border-primary pl-4">
                                        <h4 className="font-bold text-dark">Senior Consultant</h4>
                                        <p className="text-sm text-gray-600">Institute of Bariatric & Metabolic Surgery, Apollo Spectra Hospitals, Chennai</p>
                                    </div>
                                    <div className="border-l-4 border-primary pl-4">
                                        <h4 className="font-bold text-dark">Visiting Consultant</h4>
                                        <p className="text-sm text-gray-600">Various Corporate Hospitals in Chennai</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Academic Particulars Table */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-dark mb-10 text-center flex items-center justify-center gap-3">
                        <GraduationCap className="text-primary" />
                        Academic Particulars
                    </h2>
                    <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-primary text-white">
                                    <th className="p-4 border-b border-primary-dark">Course</th>
                                    <th className="p-4 border-b border-primary-dark">University</th>
                                    <th className="p-4 border-b border-primary-dark">Year</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm md:text-base text-gray-700">
                                {[
                                    { course: 'M.B.B.S', uni: 'Rajah Muthiah Medical College & Hospital (RMMCH), Annamalai University India', year: '2001' },
                                    { course: 'P.G. Diploma in Hospital Management', uni: 'Annamalai University', year: '2003' },
                                    { course: 'M.S. General Surgery', uni: 'Rajah Muthiah Medical College, Annamalai University India', year: '2004' },
                                    { course: 'M.Ch (Surgical gastroenterology)', uni: 'Sri Ramachandra Medical College & Research Institute(SRMC & RI), Porur, Chennai. India', year: '2008' },
                                    { course: 'F.I.A.G.E.S', uni: 'Indian Association of Gastrointestinal Endoscopic Surgeons. India', year: '2009' },
                                    { course: 'F.M.A.S', uni: 'TGO University, India', year: '2009' },
                                    { course: 'DIPLOME D’ UNIVERSITE DE CHIRURGIE LAPAROSCOPIQUE', uni: 'UNIVERSITY OF STRAUSBOURG, FRANCE', year: '2010' },
                                    { course: 'F.I.C.R.S (Robotic Surgery)', uni: 'International College of Robotic surgeons', year: '2012' },
                                    { course: 'F.I.M.S.A', uni: 'International Medical Science Academy', year: '2014' },
                                    { course: 'Mini Fellowship in Laparoscopic Bariatric Surgery', uni: 'University Hospitals Cleveland Medical Centre', year: '2017' },
                                    { course: 'F.A.L.S', uni: 'Indian Association of Gastrointestinal Endoscopic Surgeons. India', year: '2017' },
                                    { course: 'F.I.C.S', uni: 'International College of Surgeons- Indian section', year: '2018' },
                                    { course: 'Post Graduate Programme In Healthcare Management', uni: 'L. I. B. A, ( Loyola institute Of Business Administration)', year: '2023 - 2024' },
                                ].map((item, index) => (
                                    <tr key={index} className={`hover:bg-gray-50 border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                                        <td className="p-4 font-semibold">{item.course}</td>
                                        <td className="p-4">{item.uni}</td>
                                        <td className="p-4 whitespace-nowrap">{item.year}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Awards */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm">Review of Excellence</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">Achievements & Awards</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-light p-8 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                            <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full h-fit flex-shrink-0"><Medal size={24} /></div>
                            <div>
                                <h4 className="font-bold text-lg mb-2">Gold Medal (2009)</h4>
                                <p className="text-gray-600 text-sm">Awarded Prof Dr Sambamdam Gold medal in Surgical Gastroenterology for highest rank at Sri Ramachandra University.</p>
                            </div>
                        </div>
                        <div className="bg-light p-8 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                            <div className="bg-gray-200 text-gray-600 p-3 rounded-full h-fit flex-shrink-0"><Award size={24} /></div>
                            <div>
                                <h4 className="font-bold text-lg mb-2">Silver Medal (2003)</h4>
                                <p className="text-gray-600 text-sm">Felicitated with a Silver Medal by Academy of Medical Sciences for best P.G. paper presentation titled “Total Oesophageal reconstruction for Total Corrosive oesophageal stricture”.</p>
                            </div>
                        </div>
                        <div className="bg-light p-8 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                            <div className="bg-blue-100 text-blue-600 p-3 rounded-full h-fit flex-shrink-0"><Globe size={24} /></div>
                            <div>
                                <h4 className="font-bold text-lg mb-2">Travel Scholar Award (2007)</h4>
                                <p className="text-gray-600 text-sm">"TRAVEL SCHOLAR AWARD 2007” by the International Society of Surgery Foundation, Switzerland at Montreal, Canada.</p>
                            </div>
                        </div>
                        <div className="bg-light p-8 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                            <div className="bg-green-100 text-green-600 p-3 rounded-full h-fit flex-shrink-0"><Star size={24} /></div>
                            <div>
                                <h4 className="font-bold text-lg mb-2">Best Paper Presentation Awards</h4>
                                <p className="text-gray-600 text-sm">Awards for “GIST — our experience” (2005), “Gastro Interstitial Stromal Tumours” (2006). Won First place in Apollo Gut club Endo quiz (2007).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Past Experience Timeline */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-dark mb-12 text-center">Past Positions Held</h2>
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-xs">2021</div>
                            <div>
                                <h4 className="text-xl font-bold text-dark">CEO & Hospital Administrator</h4>
                                <p className="text-gray-600">Sree Balaji Medical College & Hospital, Chrompet (2021 - 2023)</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/80 text-white flex items-center justify-center flex-shrink-0 font-bold text-xs">2019</div>
                            <div>
                                <h4 className="text-xl font-bold text-dark">Visiting Professor</h4>
                                <p className="text-gray-600">Department of General Surgery, Rajah Muthiah Medical College (2019 - 2021)</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/60 text-white flex items-center justify-center flex-shrink-0 font-bold text-xs">2015</div>
                            <div>
                                <h4 className="text-xl font-bold text-dark">Teaching Faculty</h4>
                                <p className="text-gray-600">Hemas Hospitals, Colombo (2015 - 2019)</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/40 text-white flex items-center justify-center flex-shrink-0 font-bold text-xs">2010</div>
                            <div>
                                <h4 className="text-xl font-bold text-dark">Professor</h4>
                                <p className="text-gray-600">Dept of Surgical Gastroenterology, Sree Balaji Medical College & Hospital (2010 - 2023)</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/20 text-dark flex items-center justify-center flex-shrink-0 font-bold text-xs">2009</div>
                            <div>
                                <h4 className="text-xl font-bold text-dark">Visiting National Teaching Faculty</h4>
                                <p className="text-gray-600">Department of Robotic Surgery, World Laparoscopic Hospital, Gurgaon (2009 - 2013)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extra Curricular & Media */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-dark mb-6 flex items-center gap-2">
                                <Activity className="text-primary" /> Extra-Curricular Activities
                            </h3>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex gap-3">
                                    <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0"></span>
                                    State level badminton player during school days and was an active participant in cultural events in college.
                                </li>
                                <li className="flex gap-3">
                                    <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0"></span>
                                    Selected as one of the student representatives during college days to interact with His Excellency Dr. A.P.J. Abdul Kalam during the Platinum Jubilee Celebrations of Annamalai University, 2004.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-dark mb-6 flex items-center gap-2">
                                <Globe className="text-primary" /> Media & Public Interactions
                            </h3>
                            <p className="text-gray-600 p-6 bg-light rounded-xl border border-gray-100">
                                Participated in the public awareness in Televisions, Radio FM and stage talk shows.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default KnowYourDoctor;
