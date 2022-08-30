export interface Resume {
  owner: string
  role: string
  about: string
  experience: Timeline[]
}

export interface Timeline {
  title: string
  items?: Skill[]
  timelines?: Job[]
}

export interface Job {
  id: string
  employer?: string
  skill?: string
  role?: string
  startDate?: string
  endDate?: string
  jobDescription?: string
  jobDuties: Skill[]
}

export interface Skill {
  id: string
  description: string
}
