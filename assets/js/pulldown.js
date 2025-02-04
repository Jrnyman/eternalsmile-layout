document.addEventListener('DOMContentLoaded', function() {
            var bruh = document.querySelector('#catch-up');
            var pageget = document.getElementById('nextpage');
            var whoIbe = document.getElementById('catch-up');
            var titleget = document.getElementById('Title');
    
            var observermaybe = new IntersectionObserver(function(entries) {
                if (entries[0].isIntersecting === true){
                    var titlesize = titleget.offsetHeight - 200;
                    var whereIbe = window.pageYOffset + whoIbe.getBoundingClientRect().top - 2175 - titlesize;
                    
                    console.log(whereIbe)
                    if(whereIbe > -1204){
                //        pageget.style.marginTop = whereIbe + 'px';
			pageget.style.transform = 'translateY(' + whereIbe + 'px)';
                        console.log("Get over here!");
                    }
                } else {
                //    pageget.style.marginTop = '-1750px';
		pageget.style.transform = 'translateY(0)';
                }
            }, { threshold: [0] });
            observermaybe.observe(bruh);
        })
