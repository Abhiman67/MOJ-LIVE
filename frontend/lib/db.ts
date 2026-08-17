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

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, { bufferCommands: false }).catch(err => {
      cached.promise = null
      throw err
    })
  }

  try {
    cached.conn = await cached.promise
  } catch (err) {
    cached.promise = null
    throw err
  }
  return cached.conn
}

