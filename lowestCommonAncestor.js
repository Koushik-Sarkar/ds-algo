class Node {
    constructor(data){
        this.data = data;
        this.children = [];
    }
}

let getNode = function(bossNode, boss) {
    if (bossNode.data == boss) {
        return bossNode;
    } else if(!bossNode.children.length) {
        return null;
    } else {
        for(let i=0; i<bossNode.children.length; i++) {
            let findNode = getNode(bossNode.children[i], boss);
            if(findNode) {
                return findNode;
            }
        }
    }
}

let addEmployee = function(bossTree, boss, employee) {
    let currentNode = getNode(bossTree, boss);
    if(currentNode) {
        currentNode.children[currentNode.children.length] = new Node(employee);
    } else {
        console.log("no boss found");
    }
}

let printBossTree = function(bossTree) {
   if(bossTree) {
        // console.log(bossTree.data);
        if (bossTree.children.length > 0) {
            bossTree.children.forEach(child => printBossTree(child));
        }
   }
   return; 
}

let mainFunction = function() {
    let bossTree = new Node('1');
    addEmployee(bossTree, '1', '2');
    addEmployee(bossTree, '1', '3');
    addEmployee(bossTree, '1', '4');
    addEmployee(bossTree, '2', '7');
    addEmployee(bossTree, '7', '12');
    addEmployee(bossTree, '7', '11');
    addEmployee(bossTree, '3', '5');
    addEmployee(bossTree, '3', '6');
    addEmployee(bossTree, '6', '10');
    addEmployee(bossTree, '10', '14');
    addEmployee(bossTree, '10', '15');
    addEmployee(bossTree, '6', '9');
    addEmployee(bossTree, '9', '13');
    addEmployee(bossTree, '4', '8');
    // printBossTree(bossTree);
    findImmediateCommonBoss(bossTree, 4, 8);
}

let searchForOneEmpBosses = function(bossTree, emp1, emp2) {
    if(bossTree.data == emp1 || bossTree.data == emp2) {
        return bossTree;
    } else if(!bossTree.children.length) {
        return null;    
    } else {
        let noOfMatchFound = 0;
        let foundedMatch = null;
        for(let i = 0; i < bossTree.children.length; i++) {
            let findOneMatch = searchForOneEmpBosses(bossTree.children[i], emp1, emp2);
            if(findOneMatch) {
                foundedMatch = findOneMatch;
                noOfMatchFound += 1;
            }
            if(noOfMatchFound >= 2) {
                return bossTree;
            }
        }
        return foundedMatch;
    }
}

let findImmediateCommonBoss = function(bossTree, emp1, emp2) {
    let findOneEmp = searchForOneEmpBosses(bossTree, emp1, emp2);
    console.log(`common boss ${findOneEmp.data}`);
}



mainFunction();
