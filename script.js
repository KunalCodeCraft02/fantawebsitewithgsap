let tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 90%",   // jo peheli value rahegi vo normal start ki value he  aur second value scroller-start ki he
    end:"40% 50%",    // aur end value rahegi vo normal end ki value he  aur second value scroller-end ki he
    scrub:true,
    // markers:true
}});

// let tl = gsap.timeline();

tl.to("#fanta",{
    top:"110%",
    left:"6%",
},'orange');

tl.to("#orange-cut",{
    top:"145%",
    left:"30%"
},'orange');

tl.to("#orange",{
    top:"155%",
    left:"80%"
},'orange')
tl.to("#leaf",{
    top:"100%",
    left:"70%",
},'orange')

tl.to("#leaf2",{
    top:"90%",
    left:"9%"
},'orange')


let tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 90%",   // jo peheli value rahegi vo normal start ki value he  aur second value scroller-start ki he
    end:"30% 50%",    // aur end value rahegi vo normal end ki value he  aur second value scroller-end ki he
    scrub:true,
    markers:true
}});

tl2.from("#cocola",{
    rotate:"-120deg",
    top:"40%"
},'can')
tl2.from("#pepsi",{
    rotate:"120deg",
    top:"40%"
},'can')

tl2.from("#fanta3,#lom1",{
    opacity:0,
    y:70
})