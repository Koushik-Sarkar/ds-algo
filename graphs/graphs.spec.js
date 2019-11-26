let expect = require('chai').expect;
let Graph = require('./graph');

describe('Graph',() => {
    it('Use a graph to create list of friends', () => {
        let friends = new Graph();
        friends.addNode('f1');
        friends.addNode('f2');
        friends.addNode('f3');
        expect(friends.hasNode('f1')).to.be.true;
        expect(friends.hasNode('f2')).to.be.true;
        expect(friends.hasNode('f3')).to.be.true;
        friends.addEdge('f1', 'f2');
        friends.addEdge('f2', 'f3');
        expect(friends.hasEdge('f1','f2')).to.be.true;
        expect(friends.hasEdge('f2','f3')).to.be.true;
        friends.removeEdge('f2', 'f3');
        expect(friends.hasEdge('f2','f3')).to.be.false;
        friends.removeNode('f2');
        expect(friends.hasNode('f2')).to.be.false;
    });
});
