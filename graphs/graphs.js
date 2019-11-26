class Graph {
    constructor(){
        this.nodes = {};
    }

    addNode(value) {
        this.nodes[value] = {
            edges: {}
        }
    }
    hasNode(value) {
        return this.nodes[value] ? true : false; 
    }
    removeNode(node) {
        for(let edgeNode in this.nodes[node].edges) {
            this.removeEdge(node, edgeNode);
        }
        delete this.nodes[node];
    }
    addEdge(node1, node2) {
        if (this.nodes[node1] && this.nodes[node2]) {
            this.nodes[node1].edges[node2] =
            this.nodes[node2].edges[node1] = true; 
        }
    }
    hasEdge(node1, node2) {
        if (this.nodes[node1] && this.nodes[node2]) {
            if((this.nodes[node1].edges[node2] &&
                this.nodes[node2].edges[node1])){
                    return true;
                } else {
                    return false;
                }
             
        } else {
            return false;
        }
    }
    removeEdge(node1, node2) {
        if(this.nodes[node1] && this.nodes[node2]) {
            delete this.nodes[node1].edges[node2];
            delete this.nodes[node2].edges[node1];
        }
    }
}

module.exports = Graph;
