const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const User = require('../models/user')
const config = require('../utils/config')

const api = supertest(app)

beforeAll(async () => {
  await mongoose.connect(config.MONGODB_URI) // config will pick TEST_MONGODB_URI in test env
})

beforeEach(async () => {
  await User.deleteMany({})

  // one initial user for uniqueness tests
  const initialUser = new User({
    username: 'root',
    name: 'Superuser',
    passwordHash: 'doesnotmatter' // we won't check hash; just presence
  })
  await initialUser.save()
})

describe('creating users', () => {
  test('succeeds with a fresh username', async () => {
    const usersAtStart = await api.get('/api/users')

    const newUser = {
      username: 'sadiq_bk',
      name: 'Abubakar Sadiq',
      password: '123456789'
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await api.get('/api/users')
    expect(usersAtEnd.body).toHaveLength(usersAtStart.body.length + 1)

    const usernames = usersAtEnd.body.map(u => u.username)
    expect(usernames).toContain(newUser.username)
  })

  test('fails with status 400 if username already taken', async () => {
    const newUser = { username: 'root', name: 'Another', password: 'password' }

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)

    expect(result.body.error).toContain('unique')
  })

  test('fails with 400 if password missing or too short', async () => {
    const newUser = { username: 'shortpass', name: 'NoPass' }
    const request = await api.post('/api/users').send(newUser).expect(400)
    expect(request.body.error).toContain('password')
  })

  test('fails with 400 if username too short', async () => {
    const newUser = { username: 'ab', name: 'Too Short', password: 'longenough' }
    const request = await api.post('/api/users').send(newUser).expect(400)
    expect(request.body.error).toContain('username')
  })
})

afterAll(async () => {
  await mongoose.connection.close()
})
