const ANALYTICS_ENABLED = false

export function Analytics() {
  if (!ANALYTICS_ENABLED) return null

  return null
}

export function getAnalyticsScripts(): Array<{ src: string; defer?: boolean; async?: boolean }> {
  if (!ANALYTICS_ENABLED) return []

  return []
}
