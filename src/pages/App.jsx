import { createContext, useState } from "react";
import Flavors from "./Flavors.jsx";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx"

import { Routes, Route } from "react-router-dom";

export const CartContext = createContext([]);
export const ItemsContext = createContext([])

function App() {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState(
  [
    {
      name: "COOKIES N' CREAM", 
      id: "cookies-and-cream", 
      image: [
            "https://sugarspunrun.com/wp-content/uploads/2023/08/Cookies-and-cream-ice-cream-3-of-8.jpg",
            "https://www.yourhomebasedmom.com/wp-content/uploads/2020/06/cookies-and-cream-ice-cream-7.jpg",
            "https://www.chewoutloud.com/wp-content/uploads/2013/08/cookies-and-cream-in-white-bowl.jpg",
            "https://images.squarespace-cdn.com/content/v1/525d98f0e4b0f07bb3deb091/1595432470418-SNATOFZCZD5D99KYRFID/Classic+Cookies+and+Cream+Ice+Cream",
            ],
      best: true,
      isIceCream: true
    },
    {
      name: "MELON",
      id:"melon", 
      image: [
            "https://i.imgur.com/tET6wVo.jpg",
            "https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2023/01/Melon-ice-cream-hero-23.jpg",
            "https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2023/01/Melon-ice-cream-hero-06.jpg",
            "https://whatgreatgrandmaate.com/wp-content/uploads/2020/06/cantaloupe-sorbet-sq-scaled.jpg"
          ]
    },
    {
      name: "BUKO" ,
      id: "buko", 
      image: [
            "https://www.thedailymeal.com/img/gallery/the-super-simple-ice-cream-scooping-tip-you-need-to-remember/let-the-ice-cream-warm-up-slightly-before-scooping-1689968320.jpg",
            "https://healthiir.com/wp-content/uploads/2019/11/IMG_2978-1024x1280.jpg",
            "https://www.fromvalerieskitchen.com/wordpress/wp-content/uploads/2023/08/Coconut-Ice-Cream-29.jpg",
            "https://img.onmanorama.com/content/dam/mm/en/food/recipe/images/2023/5/9/coconut-ice-cream.jpg"
          ],
        isIceCream: true
    },
    {
      name: "BUKO PANDAN", 
      id: "buko-pandan", 
      image: [
            "https://sugaryums.com/wp-content/uploads/2023/05/Pandan-Ice-Cream-Recipe-SugarYums-11.jpg",
            "https://sugaryums.com/wp-content/uploads/2023/05/Pandan-Ice-Cream-Recipe-SugarYums-7.jpg",
            "https://sugaryums.com/wp-content/uploads/2023/05/Pandan-Ice-Cream-Recipe-SugarYums-9.jpg",
            "https://takestwoeggs.com/wp-content/uploads/2022/08/Pandan-Ice-Cream-Takestwoeggs-final-photography-1.jpg"
          ],
      isIceCream: true
    },
    {
      name: "LANGKA", 
      id: "langka", 
      image: [
            "https://s.yimg.com/ny/api/res/1.2/byX_Vxwgkf0HwUYZvYV2Aw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/the_daily_meal_185/1b11ad853b4f2a9cc9dc6ca3d4c43c68",
            "https://minimalistbaker.com/wp-content/uploads/2014/10/AMAZING-creamy-Pumpkin-Pie-Ice-Cream-_-10-ingredients-simple-methodsSO-delicious-vegan-pumpkin-glutenfree.jpg",
            "https://i.ytimg.com/vi/fU7WZEKTQI8/maxresdefault.jpg",
            "https://cdn.foodaciously.com/static/recipes/f79ae8ca-d7ba-4dc8-9879-ffe92beefe89/vegan-jackfruit-ice-cream-sugar-free-f6c3503eedf30fc85d8e3d364c7aed61-1920-q90.jpg"
          ],
      isIceCream: true
    },
    {
      name: "UBE", 
      id: "ube", 
      image: [
            "https://foodtasia.com/wp-content/uploads/2021/09/ube-ice-cream-13.jpg",
            "https://www.theflavorbender.com/wp-content/uploads/2020/07/Ube-Ice-Cream-8120-780x1169.jpg",
            "https://www.kawalingpinoy.com/wp-content/uploads/2017/07/homemade-ube-macapuno-ice-cream-3.jpg",
            "https://www.cooking-therapy.com/wp-content/uploads/2021/06/Ube-Ice-Cream-3.jpg"
          ],
      isIceCream: true
    },
    {
      name: "MANGO", 
      id: "mango", 
      image: [
            "https://shivanilovesfood.com/wp-content/uploads/2023/06/Mango-Ice-Cream-8.jpg",
            "https://www.recipesbynora.com/wp-content/uploads/2023/05/Mango-Queso-Ice-Cream-featured-image.jpg",
            "https://beamingbaker.com/wp-content/uploads/2015/01/IGT1-3-Ingredient-Homemade-Mango-Ice-Cream-Recipe-Easy-1.jpg",
            "https://www.pineappleandcoconut.com/wp-content/uploads/2021/06/Mango-Ice-Cream-9.jpg"
          ],
      isIceCream: true
    },
    {
      name: "MACAPUNO", 
      id: "macapuno", 
      image: [
            "https://f90a7d8c.rocketcdn.me/wp-content/uploads/2023/03/Coconut-milk-ic-scoop.jpg",
            "https://handletheheat.com/wp-content/uploads/2021/06/homemade-vanilla-ice-cream.jpg",
            "https://diycandy.com/wp-content/uploads/2022/05/coconut-ice-cream.jpg.webp",
            "https://www.modernhoney.com/wp-content/uploads/2016/07/DSC_0197-1-copy.jpg"
          ],
      isIceCream: true
    },
    {
      name: "AVOCADO", 
      id: "avocado", 
      image: [
            "https://thebigmansworld.com/wp-content/uploads/2022/06/avocado-ice-cream-recipe.jpg",
            "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FEdit%2F2022-06-Avocado-Ice-Cream%2FIMG_8543",
            "https://www.adashofmegnut.com/wp-content/uploads/2012/10/Avocado-Ice-Cream-1.jpg",
            "https://culinaryshades.com/wp-content/uploads/2023/04/Avocado-ice-cream-main02-sqr.jpg"
          ],
      isIceCream: true
    },
    {
      name: "CHOCOLATE", 
      id: "chocolate", 
      image: [
            "https://iambaker.net/wp-content/uploads/2022/06/chocolate-ice-cream.jpg",
            "https://www.yourhomebasedmom.com/wp-content/uploads/2023/08/CHOCOLATE-ice-cream-9.jpg",
            "https://carveyourcraving.com/wp-content/uploads/2021/06/chocolate-icecream-in-an-icecream-maker.jpg",
            "https://www.modernhoney.com/wp-content/uploads/2020/09/No-Churn-Chocolate-Chunk-Ice-Cream-5-edit-scaled.jpg",
          ],
      best: true,
      isIceCream: true
    },
    {
      name: "CHEESE", 
      id:"cheese", 
      image: [
            "https://www.creationsbykara.com/wp-content/uploads/2021/05/Cheesecake-Ice-Cream-9-2.jpg",
            "https://www.creationsbykara.com/wp-content/uploads/2021/05/Cheesecake-Ice-Cream-21-2-1.jpg",
            "https://www.tasteofhome.com/wp-content/uploads/2018/01/Cream-Cheese-Ice-Cream_EXPS_FT21_37247_F_0511_1.jpg",
            "https://www.creationsbykara.com/wp-content/uploads/2021/05/Cheesecake-Ice-Cream-12-2.jpg"
          ],
      isIceCream: true
    },
    {
      name: "STRAWBERRY", 
      id: "strawberry", 
      image: [
            "https://www.livinglou.com/wp-content/uploads/2013/06/the-best-homemade-strawberry-ice-cream.jpg",
            "https://www.budgetbytes.com/wp-content/uploads/2022/06/No-Churn-Strawberry-Ice-Cream-V2.jpg",
            "https://foodduchess.com/wp-content/uploads/2020/06/Strawberry-Cheesecake-Ice-Cream00039-1229x1536.jpg",
            "https://getinspiredeveryday.com/wp-content/uploads/2023/06/Strawberry-Cheesecake-Ice-Cream-Get-Inspired-Everyday-11.jpg",
          ],
      best: true,
      isIceCream: true
    },
    {
      name: "BUKO SHERBET",
      id: "buko-sherbet",
      image: [
        "https://dimpyskitchen.ph/cdn/shop/products/DIMPYS-10BukoSherbetB.jpg?v=1659278256",
        "https://morethanmeatandpotatoes.com/wp-content/uploads/2020/05/Coconut-Sorbet-Featured-Image.jpg",
        "https://thecozyplum.com/wp-content/uploads/2022/07/1x1-coconut-sorbet-process-1.jpg",
        "https://www.wholesalesuppliesplus.com/Images/Products/coconut-milk-sorbet.jpg"
      ],
      isSherbet: true
    },
    {
      name: "PANDAN SHERBET",
      id: "pandan-sherbet",
      image: [
        "https://www.kawalingpinoy.com/wp-content/uploads/2020/03/no-buko-pandan-ice-cream-1.jpg",
        "https://www.recipesbynora.com/wp-content/uploads/2021/11/buko-pandan-in-a-cup-1.jpg",
        "https://amcarmenskitchen.com/wp-content/uploads/2020/07/1663.jpg",
        "https://takestwoeggs.com/wp-content/uploads/2022/08/Pandan-Ice-Cream-Takestwoeggs-final-photography-1.jpg"
      ],
      isSherbet: true
    },
    {
      name: "MELON SHERBET",
      id: "melon-sherbet",
      image: [
        "https://www.healthyseasonalrecipes.com/wp-content/uploads/2022/06/easy-watermelon-sorbet-011.jpg",
        "https://www.acouplecooks.com/wp-content/uploads/2021/07/Watermelon-Sorbet-004.jpg",
        "https://espressoandlime.com/wp-content/uploads/2021/07/Watermelon-Sherbert-5-1.jpeg",
        "https://eatsbythebeach.com/wp-content/uploads/2020/06/FI-Fresh-Watermelon-Sherbet-Eats-By-The-Beach.jpg"
      ],
      isSherbet: true
    },
    
  ]
  )

  return (
    <>
      <CartContext.Provider value={[cart, setCart]}>
      <ItemsContext.Provider value={[items, setItems]}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/flavors" element={<Flavors />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        </ItemsContext.Provider>
      </CartContext.Provider>
    </>
  );
}

export default App;
