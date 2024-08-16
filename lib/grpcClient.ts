import { loadPackageDefinition, credentials } from '@grpc/grpc-js'
import { loadSync } from '@grpc/proto-loader'

import path from 'path'

const PROTO_PATH = path.resolve(process.cwd(), 'proto/auth-service.proto')

const packageDefinition = loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
})

const grpcObject = loadPackageDefinition(packageDefinition)
const AuthService = (grpcObject as any).auth.AuthService

const client = new AuthService(
  process.env.GRPC_SERVER_ADDRESS || 'localhost:50050',
  credentials.createInsecure()
)

export default client
