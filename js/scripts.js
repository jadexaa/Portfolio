// adds current year in footer
const currentYear = new Date()
document.querySelector("#year").innerHTML = currentYear.getFullYear()

const myListOfItems = document.querySelectorAll('section')

let observerOptions = {
    root: null,
    rootMargin: '0px 0px -30px 0px',
    threshold: .25
  }

const myObserver = new IntersectionObserver(allItems => {
    allItems.forEach(singleItem => {
        if (singleItem.isIntersecting){
            hiliteNav(singleItem.target)
        }
    })
}, observerOptions)

function hiliteNav(x) {
	document.querySelector('.active').classList.remove('active');
	let theid = x.getAttribute('id');
	let newActiveLink = document.querySelector(`[href="#${theid}"]`)
	newActiveLink.parentElement.classList.add('active');
}

myListOfItems.forEach(item => {
    myObserver.observe(item)
});
