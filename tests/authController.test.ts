import { expect } from 'chai';
import request from 'supertest';
import { app } from '../src/index'; // Assuming you've exported `app` from `src/index.ts'

describe('Auth Controller', () => {
  it('should register a user', async () => {
    const res = await request(app)
      .post('/auth/register')
      .send({
        email: 'test@example.com',
        password: 'password123'
      });

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('token');
  });

  it('should login a user', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({
        email: 'test@example.com',
        password: 'password123'
      });

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('token');
  });
});
