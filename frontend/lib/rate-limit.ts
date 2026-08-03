const WINDOW_MS = 60_000
const MAX_REQUESTS = 20

import { RateLimit } from '@/models/RateLimit'

/** A shared, authenticated-user limit that works across all application instances. */
export async function rateLimit(userId: string): Promise<{ allowed: boolean; remaining: number }> {
  const now = Date.now()
  const window = Math.floor(now / WINDOW_MS)
  const expiresAt = new Date((window + 2) * WINDOW_MS)

  const entry = await RateLimit.findOneAndUpdate(
    { key: userId, window },
    { $inc: { count: 1 }, $setOnInsert: { expiresAt } },
    { upsert: true, returnDocument: 'after' }
  ).lean()

  const count = entry?.count ?? MAX_REQUESTS + 1
  return { allowed: count <= MAX_REQUESTS, remaining: Math.max(0, MAX_REQUESTS - count) }
}

/** A per-IP limit for endpoints that run before authentication (e.g. registration). */
export async function rateLimitByIp(ip: string): Promise<{ allowed: boolean; remaining: number }> {
  const now = Date.now()
  const window = Math.floor(now / WINDOW_MS)
  const expiresAt = new Date((window + 2) * WINDOW_MS)

  const entry = await RateLimit.findOneAndUpdate(
    { key: `ip:${ip}`, window },
    { $inc: { count: 1 }, $setOnInsert: { expiresAt } },
    { upsert: true, returnDocument: 'after' }
  ).lean()

  const count = entry?.count ?? MAX_REQUESTS + 1
  return { allowed: count <= MAX_REQUESTS, remaining: Math.max(0, MAX_REQUESTS - count) }
}
