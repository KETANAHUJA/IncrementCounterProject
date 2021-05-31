const counters = document.querySelectorAll('.conuter');

counters.forEach((counter)=>
{
    // console.log(counter);
    counter.innerHTML=0;
    const updateCount = ()=>
    {
        const target = +counter.getAttribute('data-target');
        // console.log(target);
        const startCount = Number(counter.innerHTML);
        const inc = target/100;
        if(startCount<target)
        {
        counter.innerHTML=` ${startCount+inc}`;
        setTimeout(updateCount,10);
        }
    }
    updateCount();
})