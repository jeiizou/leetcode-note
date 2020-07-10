

function readTree(tree) {
    let out = [];
    let read = (node) => {
        out.push(node.val);
        if (node.left) {
            read(node.left);
        } else {
            out.push(null)
        }
        if (node.right) {
            read(node.right);
        } else {
            out.push(null);
        }
    }

    read(tree);

    return out;
}

module.exports = {
    readTree
}