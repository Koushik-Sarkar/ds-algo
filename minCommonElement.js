const a = [2,5,3,2,8,1];
const b = [7,9,5,2,4,10,10];
const c = [6,7,5,5,3,7];
const p = {};

for (let i=0; i<a.length || i<b.length || i<c.length; i++) {
    if(a[i]) {
        if (p[a[i]]) {
            p[a[i]]['1'] = true;
        } else {
            p[a[i]] = {};
            p[a[i]]['1'] = true;
        }
    }
    if(b[i]) {
        if (p[b[i]]) {
            p[b[i]]['2'] = true;
        } else {
            p[b[i]] = {};
            p[b[i]]['2'] = true;
        }
    }
    if(c[i]) {
        if (p[c[i]]) {
            p[c[i]]['3'] = true;
        } else {
            p[c[i]] = {};
            p[c[i]]['3'] = true;
        }
    }
}
console.log(p);
console.log(Object.keys(p).filter((val) => Object.keys(p[val]).length > 1));

