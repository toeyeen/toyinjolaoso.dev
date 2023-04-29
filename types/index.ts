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
  // excerpt: string
}

export interface Blog {
  id: string
  title: string
  tags: string[]
  createdAt: string
  author: string
  type: string
  blog: boolean
  excerpt: string
  _path: string
  // data: BlogPost
}

export interface BlogPost {
  id: string
  title: string
  content: string
}

export type WorkType = 'featured' | 'personal'

export interface Work extends Skill {
  tags: string[]
  title: string
  type: WorkType
  liveUrl?: string
  repoUrl?: string
}
