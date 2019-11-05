import {
    expect
} from 'chai';
import app from '../restfulserver/index';
import request from 'supertest';
 
describe('Matches API Test', () => {
    it('should return all the matches', done => {
        request(app)
            .get('/api/matches')
            .end((err, res) => {
                expect(err).to.equal(null);
                expect(res.statusCode).to.be.equal(200);
                done();
            });
    });
 
    it('should post a match', done =>{
        let matchData = {
            "matchTime": "2019-10-31T15:21:26.093Z",
            "matchResult": {
              "hostScore": 0,
              "guestScore": 0,
              "winner": [{
                "_id": "5dbada508b59a71ac2ebcc56",
                "playerName": "test1"
              }]
            },
            "matchDetail": [],
            "guestTeamMember": [{
              "_id": "5dbada508b59a71ac2ebcc56",
              "playerName": "test"
            }],
            "hostTeamMember": [{
              "_id": "5dba4791e0258b996b8a5e39",
              "playerName": "test3"
            }],
            "matchDutation": 1800
          }
        request(app)
            .post('/api/matches')
            .send(matchData)
            .end((err,res) => {
                expect(err).to.equal(null);
                expect(res.statusCode).to.be.equal(200);
                done();
            });
    });
    it('should return all the scores', done => {
        request(app)
            .get('/api/scores')
            .end((err, res) => {
                let { data } = res.body;
                expect(err).to.equal(null);
                expect(res.statusCode).to.be.equal(200);
                done();
            });
    });
})