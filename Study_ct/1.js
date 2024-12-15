function areAnagrams(s1, s2) {
    
    // Sort both strings
    s1 = s1.split('').sort().join('');
    s2 = s2.split('').sort().join('');

    // Compare sorted strings
    return s1 === s2;
}

const s1 = "geeks";
const s2 = "kseeg";
console.log(areAnagrams(s1, s2));

// output: true
// split(), sort(), join()