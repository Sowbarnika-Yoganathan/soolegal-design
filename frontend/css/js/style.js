// function toggleUserCard4() {
//     var userCard4 = document.getElementById("more");
//     if (userCard4.style.display === "none") {
//       userCard4.style.display = "block";
//       document.getElementById("loadMoreButton").textContent = "Show Less";
//     } else {
//       userCard4.style.display = "none";
//       document.getElementById("loadMoreButton").textContent = "Load More";
//     }
//   }



let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
