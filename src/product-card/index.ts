interface productCardInterface {
    name: string;
    price: number;
    imgs: string[];
    altImgs: string;
}

const PRODUCT_BASE_MODEL: productCardInterface = {
    name  : 'Bike',
    price : 120,
    imgs  : [
        'https://drive.google.com/uc?id=1obnGAPs1OMuh79GmVS1oejGCFwDBF-bB',
        'https://drive.google.com/uc?id=1xY1EGy8wZcIAyRdrBSxkAp4R1uHt-7He',
        'https://drive.google.com/uc?id=1QZcvxTGgOuRxdwQM0Ge3A74E1jqYGNlR',
    ],
    altImgs : 'Bike photo'
};

const PRODUCTS_LIST: productCardInterface[] = [];
for (let i = 0; i < 3; i++) {
    PRODUCTS_LIST.push(PRODUCT_BASE_MODEL);
}
const CARDS_CONTAINER = document.querySelector('.cards-container') as HTMLDivElement;

const renderProducts = (productsList: productCardInterface[]) => {
    // Opción 1
    // for (const PRODUCT of productsList) {
    //     const PRODUCT_CARD = document.createElement('div');
    //     PRODUCT_CARD.classList.add('product-card');
    
    //     const FIGURE_PRODUCT = document.createElement('figure');
    //     FIGURE_PRODUCT.classList.add('product-img-container');
    //     FIGURE_PRODUCT.tabIndex = 0;
    //     FIGURE_PRODUCT.title = PRODUCT.altImgs;

    //     const PICTURE_FIGURE_PRODUCT = document.createElement('picture');
        
    //     const MOBILE_IMG_PRODUCT = document.createElement('img');
    //     MOBILE_IMG_PRODUCT.classList.add('product-img');
    //     MOBILE_IMG_PRODUCT.src = PRODUCT.imgs[0];
    //     MOBILE_IMG_PRODUCT.alt = PRODUCT.altImgs;
    
    //     const TABLET_IMG_PRODUCT = document.createElement('source');
    //     TABLET_IMG_PRODUCT.media = '(min-width: 800px)';
    //     TABLET_IMG_PRODUCT.srcset = PRODUCT.imgs[1];
    
    //     const DESKTOP_IMG_PRODUCT = document.createElement('source');
    //     DESKTOP_IMG_PRODUCT.media = '(min-width: 1024px)';
    //     DESKTOP_IMG_PRODUCT.srcset = PRODUCT.imgs[2];
    
    //     PICTURE_FIGURE_PRODUCT.append(DESKTOP_IMG_PRODUCT, TABLET_IMG_PRODUCT, MOBILE_IMG_PRODUCT);
    //     FIGURE_PRODUCT.appendChild(PICTURE_FIGURE_PRODUCT);
    
    //     const PRODUCT_DETAILS = document.createElement('div');
    //     PRODUCT_DETAILS.classList.add('product-details');
        
    //     const PRODUCT_INFO = document.createElement('div');
    //     PRODUCT_INFO.classList.add('product-info');
    
    //     const PRICE = document.createElement('p');
    //     PRICE.classList.add('product-price');
    //     PRICE.innerText = PRODUCT.price.toString();
    
    //     const NAME = document.createElement('p');
    //     NAME.classList.add('product-name');
    //     NAME.innerText = PRODUCT.name;
    
    //     PRODUCT_INFO.append(PRICE, NAME);
    
    //     const FIGURE_CART_ICON = document.createElement('figure');
    //     FIGURE_CART_ICON.classList.add('add-to-cart');
    //     FIGURE_CART_ICON.tabIndex = 0;
    //     FIGURE_CART_ICON.title = 'Add to cart icon';
    
    //     const CART_ICON = document.createElement('img');
    //     CART_ICON.src = 'https://drive.google.com/uc?id=1nkWqKAzdlfolis7ICFA_ckW1RhtUX43e';
    //     CART_ICON.alt = 'Add to cart icon';
    
    //     FIGURE_CART_ICON.appendChild(CART_ICON);
    
    //     PRODUCT_DETAILS.append(PRODUCT_INFO, FIGURE_CART_ICON);
    
    //     PRODUCT_CARD.append(FIGURE_PRODUCT, PRODUCT_DETAILS);
    
    //     CARDS_CONTAINER.appendChild(PRODUCT_CARD);
    // }

    // Opción 2
    for (const PRODUCT of productsList) {
        const card = `<div class="product-card">
        <figure class="product-img-container" tabindex="0" title=${PRODUCT.altImgs}>
            <picture>
                <source media="(min-width: 1024px)" srcset=${PRODUCT.imgs[2]} />
                <source media="(min-width: 800px)" srcset=${PRODUCT.imgs[1]} />
                <img class="product-img" src=${PRODUCT.imgs[0]} alt=${PRODUCT.altImgs}/>
            </picture>
        </figure>
        <div class="product-details"> 
            <div class="product-info">
                <p class="product-price">${PRODUCT.price}</p>
                <p class="product-name">${PRODUCT.name}</p>
            </div>
            <figure class="add-to-cart" tabindex="0" title="Add to cart icon">
                <img src="https://drive.google.com/uc?id=1nkWqKAzdlfolis7ICFA_ckW1RhtUX43e" alt="Add to cart icon"/>
            </figure>
        </div> 
    </div>`;

        CARDS_CONTAINER.innerHTML += card;
    }
};

renderProducts(PRODUCTS_LIST);


