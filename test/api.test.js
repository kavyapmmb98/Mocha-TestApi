
import { strict as assert } from 'assert';
import request from 'supertest';
import app from '../api.js'; 

describe('API Tests', () => {
  let users = [];

  beforeEach(() => {
    users = [
      { id: 1, name: 'Test' },
      { id: 2, name: 'Test2' },
    ];
  });

  it('GET /api/users should return all users', async () => {
    const response = await request(app).get('/api/users');
    assert.strictEqual(response.status, 200);
    assert.strictEqual(Array.isArray(response.body), true);
    // assert.strictEqual(response.body.length, 2);
  });

  it('POST /api/users should add a new user', async () => {
    const newUser = { name: 'New User' };
    const response = await request(app).post('/api/users').send(newUser);
    assert.strictEqual(response.status, 201);
    assert.strictEqual(typeof response.body, 'object');
    // assert.strictEqual(response.body.name, 'New User');
  });

  it('PUT /api/users/:id should update an existing user', async () => {
    const updatedUser = { name: 'Updated User' };
    const response = await request(app).put('/api/users/1').send(updatedUser);
    assert.strictEqual(response.status, 200);
    assert.strictEqual(typeof response.body, 'object');
    // assert.strictEqual(response.body.name, 'Updated User');
  });


});
