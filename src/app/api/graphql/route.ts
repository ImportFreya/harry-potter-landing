import { ApolloServer } from "@apollo/server"
import { startServerAndCreateNextHandler } from "@as-integrations/next"
import { typeDefs } from "@/graphql/schema"
import { resolvers } from "@/graphql/resolvers"
import { NextRequest, NextResponse } from "next/server"

const server  = new ApolloServer({ typeDefs, resolvers })
const handler = startServerAndCreateNextHandler<NextRequest>(server)

const corsHeaders = {
  "Access-Control-Allow-Origin":  "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders })
}

export async function GET(req: NextRequest) {
  const res = await handler(req)
  Object.entries(corsHeaders).forEach(([k, v]) => res.headers.set(k, v))
  return res
}

export async function POST(req: NextRequest) {
  const res = await handler(req)
  Object.entries(corsHeaders).forEach(([k, v]) => res.headers.set(k, v))
  return res
}
