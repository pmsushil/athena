import React from 'react';

const jobOpenings = [
      
    {
        title: 'Data Analyst',
        experience: 'Minimum 2 years of experience',
        description: 'We are looking for a detail-oriented Data Analyst to join our team. The ideal candidate will have a strong background in data analysis and visualization.',
        responsibilities: [
            'Collect, analyze, and interpret large datasets.',
            'Develop and maintain databases and data systems.',
            'Create data visualizations and reports to communicate insights.',
            'Collaborate with stakeholders to identify business opportunities.'
        ],
        qualifications: [
            'Bachelor\'s degree in Mathematics, Statistics, or related field.',
            'Strong proficiency in Excel, SQL, and data visualization tools.',
            'Experience with data analysis and machine learning libraries (e.g. pandas, scikit-learn).',
            'Excellent analytical and problem-solving skills.'
        ],
        applyLink: '#apply-data-analyst'
    },
    {
        title: 'Data Engineer',
        experience: 'Minimum 2 years of experience',
        description: 'We are looking for a skilled Data Engineer to join our team. The ideal candidate will have a strong background in designing and implementing data pipelines.',
        responsibilities: [
            'Design, build, and maintain large-scale data pipelines.',
            'Develop and implement data processing algorithms.',
            'Ensure data quality and integrity.',
            'Collaborate with data scientists to implement machine learning models.'
        ],
        qualifications: [
            'Bachelor\'s degree in Computer Science or related field.',
            'Strong proficiency in programming languages (e.g. Python, Java).',
            'Experience with big data technologies (e.g. Hadoop, Spark).',
            'Excellent problem-solving and communication skills.'
        ],
        applyLink: '#apply-data-engineer'
    },
    {
        title: 'Java Developer',
        experience: 'Minimum 2 years of experience',
        description: 'We are looking for a skilled Java Developer to join our development team. The ideal candidate will have a strong background in Java and back-end development.',
        responsibilities: [
            'Develop and maintain Java-based applications.',
            'Collaborate with cross-functional teams to design and implement new features.',
            'Optimize application performance and scalability.',
            'Troubleshoot and debug issues in a timely manner.'
        ],
        qualifications: [
            'Bachelor\'s degree in Computer Science or related field.',
            'Strong proficiency in Java, including Java EE and Spring.',
            'Thorough understanding of object-oriented programming principles.',
            'Experience with popular Java frameworks and libraries.'
        ],
        applyLink: '#apply-java-developer'
    }
];

const Careerfile = () => {
    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4">Careers at Athena Cloud Solutions</h1>
                    <p className="text-xl text-gray-700">Join our team of experts and help usbuild innovative cloud solutions.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {jobOpenings.map((jobOpening, i) => (
                        <div key={i} className="border rounded-lg shadow-md p-8">
                            <h2 className="text-3xl font-semibold mb-4 text-gray-800">{jobOpening.title}</h2>
                            <p className="text-lg text-gray-700 mb-8">{jobOpening.description}</p>
                            <h3 className="text-2xl font-semibold mb-1">Responsibilities</h3>
                            <ul className="list-disc list-inside text-gray-700 mb-6">
                                {jobOpening.responsibilities.map((responsibility, j) => (
                                    <li key={j}>{responsibility}</li>
                                ))}
                            </ul>
                            <h3 className="text-2xl font-semibold mb-1">Qualifications</h3>
                            <ul className="list-disc list-inside text-gray-700">
                                {jobOpening.qualifications.map((qualification, k) => (
                                    <li key={k}>{qualification}</li>
                                ))}
                            </ul>
                            <a href={jobOpening.applyLink} className="block mt-8 text-xl font-semibold text-indigo-600 hover:text-indigo-900">Apply Now</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Careerfile;