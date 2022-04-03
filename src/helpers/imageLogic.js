const sourcePriority =
{
  "google": 1,
  "linkedin": 2,
  "facebook": 3,
  "twitter": 4,
  "office365": 5,
}

export const sortImageObject = (next, current) => {
  return sourcePriority[current.source] - sourcePriority[next.source]
}