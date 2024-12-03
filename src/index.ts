import { Elysia } from 'elysia'

const app = new Elysia().get('/', () => 'Combat Service is running').listen(3004)

console.log(`⚔️ Combat Service is running at ${app.server?.hostname}:${app.server?.port}`)
