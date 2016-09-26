(function(){
    var app = angular.module('store', []);  
    
    app.controller('StoreController', function(){
        this.products = gems;
    });
    
    
    
    var gems = [
        {
            name: 'Dodecahedron',
        price: 2.95,
        description: 'coming soon',
        canPurchase: false,
        soldOut: false,
        images: [
				{id:0, url:'img/gem-01.gif'},
				{id:1, url:'img/gem-02.gif'},
				{id:2, url:'img/gem-03.gif'}
            ],
             reviews:[
            {
                stars:5, 
            body: "I love this product",
            author: "gijoe@thomas.com"
            },
            {
                stars:1, 
            body: "This product sucks!",
            author: "nice@hater.com"
            }
        ]
        },
        {
            name: 'Pentagonal Gem',
        price: 5.95,
        description: 'coming soon',
        canPurchase: false,
        soldOut: false, 
        images: [
				{id:0, url:'img/gem-04.gif'},
				{id:1, url:'img/gem-05.gif'},
				{id:2, url:'img/gem-06.gif'}
            ],
        reviews:[
            {
                stars:5, 
            body: "I love this product",
            author: "gijoe@thomas.com"
            },
            {
                stars:1, 
            body: "This product sucks!",
            author: "nice@hater.com"
            }
        ]
        
        } 
    ];
    
    app.controller('PanelController', function(){
        this.tab=1;
        
        this.selectTab  = function(setTab){
            this.tab = setTab;
        };
        
        this.isSelected = function(checkTab){
           return this.tab === checkTab;  
        };
    });
    
     app.controller("ReviewController",function(){
        this.review = {};
        
        this.addReview = function(product){
          product.reviews.push(this.review);
          this.review ={};
        
        };
    });
    
    app.controller('GalleryController', function(){
		this.current = 0;

		this.setCurrent = function(imageNumber){
			this.current = imageNumber || 0;
		}
	})
    
   
    
    
})();
 