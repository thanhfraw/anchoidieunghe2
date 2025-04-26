import FadeInSection from "./ui/FadeInSection";

const Menu = () => {
    return (
      <section id="menu" className="py-20 bg-jigger-dark">
        <FadeInSection className="container">
          
          <div className="mb-16">
            <h3 className="font-serif text-2xl text-jigger-gold mb-6 text-center">Signature at Ăn Chơi Điệu Nghệ</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Cocktail 1 */}
              <div className="border border-jigger-gold/30 p-6 rounded">
                <h4 className="font-serif text-xl text-jigger-gold mb-2">Mother's Milk</h4>
                <p className="text-jigger-cream/80 mb-3">Gin, Sake, Cherry Blossom Vermouth, Umeshu</p>
                {/* <p className="text-jigger-gold">$22</p> */}
              </div>
              
              {/* Cocktail 2 */}
              <div className="border border-jigger-gold/30 p-6 rounded">
                <h4 className="font-serif text-xl text-jigger-gold mb-2">Anh Di Dai</h4>
                <p className="text-jigger-cream/80 mb-3">Jamaican Rum, Campari, Pineapple, Lime, Demerara</p>
                {/* <p className="text-jigger-gold">$24</p> */}
              </div>
              
              {/* Cocktail 3 */}
              <div className="border border-jigger-gold/30 p-6 rounded">
                <h4 className="font-serif text-xl text-jigger-gold mb-2">Pink Panther</h4>
                <p className="text-jigger-cream/80 mb-3">Bourbon, Aperol, Amaro Nonino, Lemon</p>
                {/* <p className="text-jigger-gold">$24</p> */}
              </div>
              
              {/* Cocktail 4 */}
              <div className="border border-jigger-gold/30 p-6 rounded">
                <h4 className="font-serif text-xl text-jigger-gold mb-2">Luon Vui Tuoi</h4>
                <p className="text-jigger-cream/80 mb-3">Gin, Cherry Heering, DOM Bénédictine, Grenadine, Pineapple, Lime</p>
                {/* <p className="text-jigger-gold">$25</p> */}
              </div>
              
              {/* Cocktail 5 */}
              <div className="border border-jigger-gold/30 p-6 rounded">
                <h4 className="font-serif text-xl text-jigger-gold mb-2">Princes Peach</h4>
                <p className="text-jigger-cream/80 mb-3">Bourbon, Angostura Bitters, Sugar, Orange</p>
                {/* <p className="text-jigger-gold">$22</p> */}
              </div>
              
              {/* Cocktail 6 */}
              <div className="border border-jigger-gold/30 p-6 rounded">
                <h4 className="font-serif text-xl text-jigger-gold mb-2">Cha Nail</h4>
                <p className="text-jigger-cream/80 mb-3">Vodka, Coffee Liqueur, Espresso, Vanilla</p>
                {/* <p className="text-jigger-gold">$23</p> */}
              </div>
            </div>
          </div>
          
          {/* <div className="text-center">
            <p className="text-jigger-cream mb-6">Explore our full selection of classic and innovative cocktails, wines, spirits, and non-alcoholic options.</p>
            <a 
              href="#" 
              className="inline-block px-6 py-2 border border-jigger-gold text-jigger-gold hover:bg-jigger-gold hover:text-jigger-dark transition-colors"
            >
              View Full Menu
            </a>
          </div> */}
        </FadeInSection>
      </section>
    );
  };
  
  export default Menu;