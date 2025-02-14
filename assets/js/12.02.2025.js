
                // parctice of yesterday training

// console.log(document);


// console.log(document.getElementsByClassName('parent'));

// const paren=document.getElementsByClassName('parent')

// const q_sel=document.querySelector('h1')

// console.log(q_sel);


// const q_selall=document.querySelector('.head2')
// console.log(q_selall);

// console.log(q_selall.innerHTML);

// const paren=document.querySelector('.parent')   

// paren.innerHTML="hii hello welcome"

// const par=document.querySelector('.paren')
// console.log(par);

// const ne_ele=document.createElement('div')
// ne_ele.classList.add('ch')
// ne_ele.innerHTML='<h2>innerhtml</h2>'


// console.log(ne_ele);

// paren.append(ne_ele)

                //Given task 12.02.2025

const products=[
    {   
        product_name:'Moto m1',
        img:"/assets/images/m1.jpg" ,
        p:"11,999",
        price:"10,000"
    },
    {   
        product_name:'Moto m2',
        img:"/assets/images/m4.jpg" ,
        p:"21,999",
        price:"20,000"
    },
    {   
        product_name:'Moto m3',
        img:'/assets/images/m3.jpg',
        p:"31,999",
        price:"30,000"
    },
    {   
        product_name:'Moto Z3',
        img:'/assets/images/m5.jpg',
        p:"31,999",
        price:"30,000"
    }, 
    {   
        product_name:'Asus Z5',
        img:'/assets/images/a1.jpg',
        p:"9,999",
        price:"8,000"
    }, 
    {   
        product_name:'Asus M1',
        img:'/assets/images/a2.jpg',
        p:"8,999",
        price:"6,500"
    }, 
    {   
        product_name:'Asus ZC',
        img:'/assets/images/a3.jpg',
        p:"10,999",
        price:"9,000"
    }, 
    {   
        product_name:'Zenfone 9',
        img:'/assets/images/a4.jpg',
        p:"6,999",
        price:"5,000"
    },
    {   
        product_name:'Redmi 8',
        img:'/assets/images/redmi1.jpg',
        p:"7,999",
        price:"5,000"
    },
    {   
        product_name:'Redmi 9',
        img:'/assets/images/redmi2.jpg',
        p:"8,999",
        price:"7,500"
    },
    {   
        product_name:'Redmi 10',
        img:'/assets/images/redmi3.jpg',
        p:"8,500",
        price:"7,500"
    },
    {   
        product_name:'Redmi 11',
        img:'/assets/images/redmi4.jpg',
        p:"7,500",
        price:"6,500"
    }, 
    {   
        product_name:'Vivo V1',
        img:'/assets/images/v1.jpg',
        p:"5,500",
        price:"4,500"
    },
    {   
        product_name:'Vivo V2',
        img:'/assets/images/v2.jpg',
        p:"6,500",
        price:"5,500"
    }, 
    {   
        product_name:'Vivo V3',
        img:'/assets/images/v3.jpg',
        p:"7,500",
        price:"7,499"
    },
    {   
        product_name:'Vivo V4',
        img:'/assets/images/v4.jpg',
        p:"6,500",
        price:"6,499"
    },
    {   
        product_name:'Vivo V40',
        img:'/assets/images/v40.jpg',
        p:"13,500",
        price:"12,499"
    },
    {   
        product_name:'Vivo V15',
        img:'/assets/images/v15.jpg',
        p:"12,500",
        price:"12,499"
    }, 
    {   
        product_name:'Vivo V9',
        img:'/assets/images/v9.jpg',
        p:"11,500",
        price:"11,499"
    }, 
    {   
        product_name:'Vivo Y18',
        img:'/assets/images/y18.jpg',
        p:"10,500",
        price:"10,499"
    },     
    
]

const parent=document.querySelector('.parent')

console.log(parent);

const append_div=products.map((product)=>{
const box=document.createElement('div')
box.classList.add('child')
box.innerHTML=`<h2>${product.product_name}</h2>
<img src="${product.img}"/>
<h4 class="pact"> &#8377 ${product.p}</h4>
<h4 class="porg"> &#8377 ${product.price}</h4>
<button>Add to cart</button> &nbsp;  <button>Buy now</button>`
parent.append(box)
}
)

















