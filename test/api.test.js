

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

  // it('DELETE /api/users/:id should delete an existing user', async () => {
  //   // First, ensure there are 2 users
  //   const initialResponse = await request(app).get('/api/users');
  //   assert.strictEqual(initialResponse.body.length, 2);

  //   // Delete user with id 1
  //   const deleteResponse = await request(app).delete('/api/users/1');
  //   assert.strictEqual(deleteResponse.status, 204);

  //   // Verify user with id 1 is deleted
  //   const finalResponse = await request(app).get('/api/users');
  //   assert.strictEqual(finalResponse.body.length, 1);
  //   assert.strictEqual(finalResponse.body[0].id, 2); // Ensure the remaining user is correct
  // });
});
