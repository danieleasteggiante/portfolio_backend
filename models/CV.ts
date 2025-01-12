interface ICV {
    name: string,
    job: string,
    location: string,
    profileImage: string,
    website: string,
    technicalSkills: string[],
    jobExperience: IJobExperience[],
    education: IEducation[],
    languages: ILanguage[],
    certifications: ICertification[]
}

interface IJobExperience {
    company: string,
    role: string,
    date: string,
    description: string,
    skills: string[]
}

interface IEducation {
    institution: string,
    vote: string,
    degree: string,
    date: string,
    description: string,
    mainSubjects: string[]
}

interface ILanguage {
    language: string,
    level: string
}

interface ICertification {
    name: string,
    date: string,
    link?: string
}