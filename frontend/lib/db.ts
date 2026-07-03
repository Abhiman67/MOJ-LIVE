import mongoose from 'mongoose'

declare global {
  var mongooseCache: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } | undefined
}

const cached: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } =
  global.mongooseCache ?? { conn: null, promise: null }

if (!global.mongooseCache) {
  global.mongooseCache = cached
}

export async function connectDB() {
  if (cached.conn) return cached.conn

  const uri = process.env.MONGODB_URI
  if (!uri) throw new Error('MONGODB_URI is not defined')

  cached.promise = mongoose.connect(uri, { bufferCommands: false })
  cached.conn = await cached.promise
  return cached.conn
}
