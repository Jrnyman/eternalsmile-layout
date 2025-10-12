document.addEventListener('DOMContentLoaded', function() {
            var checkpoint = document.querySelector('#catch-up');
            var pageget = document.getElementById('nextpage');
            var stophere = document.getElementById('catch-up');
            var titleget = document.getElementById('Title');
    
            var observermaybe = new IntersectionObserver(function(entries) {
                if (entries[0].isIntersecting === true){
                    var titlesize = titleget.offsetHeight - 200;
                    var whereIbe = window.pageYOffset + stophere.getBoundingClientRect().top - 2075 - titlesize;
                    
                    console.log(whereIbe);
                    if(whereIbe > 504){
			pageget.style.translate = '0px ' + whereIbe + 'px';
                        console.log("Get over here!");
                    }
                } else {
			pageget.style.translate = '0';
                }
            }, { threshold: [0] });
            observermaybe.observe(checkpoint);
        })
