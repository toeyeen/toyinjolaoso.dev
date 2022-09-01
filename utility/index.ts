export const formatDate = (date: string) => {
  const dateFormat = new Date(date)
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return dateFormat.toLocaleDateString('en-US', options as any)
}

export const wordCount = (path: string) => {}
