
//format string conatining picture anme, place name and date with placename+numberofoccurrence.extension

function solution(S) {
    let results = [];
    const visited = new Map();
    let tempStringArr = S.split('\n');
    tempStringArr = tempStringArr.map((item, index) => {
        item = item.split(',');
        item.push(index)
        return item;
    });
    tempStringArr = tempStringArr.sort((item1, item2) => {
        let date1 = new Date(item1[2].trim());
        let date2 = new Date(item2[2].trim());
        return (date1-date2);
    });
    tempStringArr = tempStringArr.map(item => {
        let place = visited.get(item[1]);
        
        if(place!==undefined) {
            visited.set(item[1], (place+1));
            place = place+1;
            const digits = place.toString().length;
            if(digits===1) {
                place = place.toString();
                place = 0 + place
            }
            const ext = item[0].split('.')[1];
            item[1] = item[1] + place + '.' + ext;
        } else {
            visited.set(item[1], 1);
            const ext = item[0].split('.')[1];
            item[1] = item[1] + '01' + '.' + ext;
        }
        return item;
    })
    tempStringArr.map(item => {
        results[item[3]] = item[1].trim();
    });

    
    results = results.join('\n');
    console.log(results);
    return results;
}

const S = `
    photo.jpg, Warsaw, 2013-09-05 14:08:15\n
    john.png, London, 2015-06-20 15:13:22\n
    myFriends.png, Warsaw, 2013-09-05 14:07:13\n
    Eiffel.jpg, Paris, 2015-07-23 08:03:02\n
    pisatower.jpg, Paris, 2015-07-22 23:59:59\n
    BOB.jpg, London, 2015-08-05 00:02:03\n
    notredame.png, Paris, 2015-09-01 12:00:00\n
    me.jpg, Warsaw, 2013-09-06 15:40:22\n
    a.png, Warsaw, 2016-02-13 13:33:50\n
    b.jpg, Warsaw, 2016-01-02 15:12:22\n
    c.jpg, Warsaw, 2016-01-02 14:34:30\n
    d.jpg, Warsaw, 2016-01-02 15:15:01\n
    e.png, Warsaw, 2016-01-02 09:49:09\n
    f.png, Warsaw, 2016-01-02 10:55:32\n
    g.jpg, Warsaw, 2016-02-29 22:13:11`;


console.log(solution(S));

