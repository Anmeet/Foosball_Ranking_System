import {
    expect
} from 'chai';
import app from '../restfulserver/index';
import request from 'supertest';
 
describe('Matches API Test', () => {
    it('should return all the players', done => {
        request(app)
            .get('/api/players')
            .end((err, res) => {
                expect(err).to.equal(null);
                expect(res.statusCode).to.be.equal(200);
                done();
            });
    });
    it('should post a player', done => {
        let playerData = {
            "playerName": "test55_player",
            "playerImgUrl": "https://randomuser.me/api/portraits/med/women/96.jpg"
        }
        request(app)
            .post('/api/players')
            .send(playerData)
            .end((err, res) => {
                expect(err).to.equal(null);
                expect(res.statusCode).to.be.equal(200);
                done();
            });
    });
});