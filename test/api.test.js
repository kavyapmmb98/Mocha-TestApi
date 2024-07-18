

import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../api';

const { expect } = chai;

// Configure chai
chai.use(chaiHttp);

describe('API Tests', () => {
  // Initialize sample data before each test
  beforeEach(() => {
    users = [
      { id: 1, name: 'Test' },
      { id: 2, name: 'Test2' },
    ];
  });

  // Test for GET /api/users
  describe('GET /api/users', () => {
    it('should return all users', (done) => {
      chai.request(app)
        .get('/api/users')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          expect(res.body.length).to.equal(2); 
          done();
        });
    });
  });

  // Test for POST /api/users
  describe('POST /api/users', () => {
    it('should add a new user', (done) => {
      const newUser = { name: 'New User' };

      chai.request(app)
        .post('/api/users')
        .send(newUser)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('name', 'New User');
          done();
        });
    });
  });

  // Test for PUT /api/users/:id
  describe('PUT /api/users/:id', () => {
    it('should update an existing user', (done) => {
      const updatedUser = { name: 'Updated User' };

      chai.request(app)
        .put('/api/users/1') 
        .send(updatedUser)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('name', 'Updated User');
          done();
        });
    });
  });

  // Test for DELETE /api/users/:id
  describe('DELETE /api/users/:id', () => {
    it('should delete an existing user', (done) => {
      chai.request(app)
        .delete('/api/users/1') 
        .end((err, res) => {
          expect(res).to.have.status(204);
          chai.request(app)
            .get('/api/users')
            .end((err, res) => {
              expect(res.body.length).to.equal(1); 
              done();
            });
        });
    });
  });

});
