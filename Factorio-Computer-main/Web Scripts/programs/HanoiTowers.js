function hanoi(disks) {
    const res = [];
    
    function rec(l, from, temp, to) {
        if (l <= 0) return;

        rec(l-1, from, to, temp);
        res.push(from, to);
        rec(l-1, temp, from, to);
    }

    rec(disks, 1, 2, 3);

    return res;
}
hanoi(4)
