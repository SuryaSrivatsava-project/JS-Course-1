/* Promise API's
    1. Promise.All(iterable[p1,p2,p3,...])
        * used to handle multiple API calls/ promises together
        * takes array of promises as input
        * suppose p1 -> 3sec, p2-> 1sec and p3-> 2sec, considering success scenario
        * Promise.All() takes 3 sec in total to complete and return array of result [val1,val2,val3]
        * it will wait for all of them to finish
        * Any failure in any one of the promise executions returns an error and will not wait for other promises even if others resolve
    
    2. Promise.allSettled([p1,p2,p3])
        * If all of them get successful, at above time after 3sec we get [val1,val2,val3]
        * If one of these promises get rejected,it waits for all promises to get settled (resolved or rejected)
        * output [val1,err,val3] after 3sec
        
    3. Promise.race([p1,p2,p3]) (3s,1s,2s)
        * As soon as first promise is settled (resolved/rejected) which is p2 here it returns value 
        * (val2)
        * 
*/