'use client';

import { useState } from 'react';

const products = [
  { id: 'classic', name: 'Classic Makhana', note: 'Simply roasted • Lightly seasoned', price: 249, size: '100 g', image: '/products/snaxon-classic.jpeg', tag: 'Bestseller' },
  { id: 'seeded', name: 'Classic Makhana', note: 'Pure, airy & naturally wholesome', price: 229, size: '100 g', image: '/products/snaxon-seeded.jpeg', tag: 'Everyday favourite' }
];

function Icon({ children }) { return <span className="icon">{children}</span>; }

export default function Home() {
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);
  const add = (product) => {
    setCart((items) => {
      const existing = items.find((item) => item.id === product.id);
      return existing ? items.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item) : [...items, { ...product, qty: 1 }];
    });
    setOpen(true);
  };
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return <main>
    <div className="announcement">Free shipping on orders over ₹499 <span>•</span> Freshly packed in India</div>
    <header className="nav">
      <a className="brand" href="#top">SNAX<span>ON</span><i /></a>
      <nav><a href="#shop">Shop</a><a href="#why">Why makhana?</a><a href="#story">Our story</a><a href="#contact">Contact</a></nav>
      <button className="cart-button" onClick={() => setOpen(true)} aria-label="Open cart"><Icon>◌</Icon> Bag <b>{count}</b></button>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Nature’s original snack</p>
        <h1>Big crunch.<br /><em>Clean joy.</em></h1>
        <p className="lead">Lightly roasted foxnuts that make everyday snacking feel deliciously uncomplicated.</p>
        <div className="hero-actions"><a className="button primary" href="#shop">Shop makhana <span>→</span></a><a className="text-link" href="#why">Meet the mighty foxnut <span>↓</span></a></div>
        <div className="proof"><div><strong>100%</strong><span>natural</span></div><div><strong>0</strong><span>junk</span></div><div><strong>✓</strong><span>plant-powered</span></div></div>
      </div>
      <div className="hero-product">
        <div className="sun" /><div className="blob one" /><div className="blob two" />
        <span className="floating crunch">CRUNCH<br />HAPPY</span><span className="floating good">GOOD<br />FOR YOU</span>
        <img src="/products/snaxon-classic.jpeg" alt="Snaxon Organic Makhana pack" />
      </div>
    </section>

    <section className="marquee"><div>CRUNCH INTO BETTER <b>✦</b> SNACKING MADE SIMPLE <b>✦</b> FEEL-GOOD FUEL <b>✦</b> CRUNCH INTO BETTER <b>✦</b></div></section>

    <section className="shop section" id="shop">
      <div className="section-heading"><div><p className="eyebrow">The snack shelf</p><h2>Pick your <em>crunch.</em></h2></div><p>Made with thoughtfully sourced foxnuts and nothing you can’t pronounce.</p></div>
      <div className="product-grid">{products.map((product, index) => <article className={'product-card product-' + index} key={product.id}>
        <div className="product-image"><span>{product.tag}</span><img src={product.image} alt={product.name} /></div>
        <div className="product-info"><div><h3>{product.name}</h3><p>{product.note}</p></div><strong>₹{product.price}</strong></div>
        <div className="product-bottom"><span>{product.size}</span><button onClick={() => add(product)}>Add to bag <b>+</b></button></div>
      </article>)}</div>
    </section>

    <section className="benefits" id="why">
      <div className="benefit-intro"><p className="eyebrow">Tiny snack, big energy</p><h2>Goodness you can <em>feel.</em></h2><p>Foxnuts are naturally light, satisfyingly crunchy, and have been loved in Indian homes for generations.</p><a href="#shop" className="text-link">Snack smarter <span>→</span></a></div>
      <div className="benefit-list"><div><span>01</span><h3>Feel-light fuel</h3><p>Airy crunch that won’t weigh you down.</p></div><div><span>02</span><h3>Simply real</h3><p>Made from the humble lotus seed, with care.</p></div><div><span>03</span><h3>Full of fibre</h3><p>A satisfying snack for your in-between moments.</p></div></div>
    </section>

    <section className="ritual"><div className="ritual-image"><img src="/products/snaxon-seeded.jpeg" alt="Snaxon foxnut pouch" /><p>one handful<br /><i>at a time</i></p></div><div className="ritual-copy"><p className="eyebrow">Your 4 PM ritual, upgraded</p><h2>For the desk,<br />the drive, and <em>everywhere.</em></h2><p>When the little hunger strikes, reach for a snack that brings the crunch — no compromise necessary.</p><a className="button dark" href="#shop">Find your flavour <span>→</span></a></div></section>

    <section className="story section" id="story"><p className="eyebrow">From the heart of India</p><h2>Real ingredients. <em>Really good</em> snacks.</h2><p>At Snaxon, we believe better snacking starts with keeping things simple. That’s why we let the natural goodness of makhana do the talking — then give it just the right amount of crunch.</p><a href="#shop" className="text-link">Our simple promise <span>→</span></a></section>

    <section className="contact section" id="contact"><div><p className="eyebrow">Get in touch</p><h2>We’d love to<br /><em>hear from you.</em></h2></div><address><p><strong>Proprietor</strong><br />Archie Singh</p><p><strong>Registered address</strong><br />Snaxon<br />Flat no. 404, Tower No. 14<br />Lotus Boulevard, Sector 100<br />Noida – 201301</p></address></section>

    <footer><a className="brand" href="#top">SNAX<span>ON</span><i /></a><p>Pure goodness in every bite.</p><div><a href="#shop">Shop</a><a href="#why">Benefits</a><a href="#story">Story</a><a href="#contact">Contact</a></div><small>© 2026 Snaxon Foods. Made for happier munching.</small></footer>

    <aside className={'drawer ' + (open ? 'open' : '')}><div className="drawer-head"><h2>Your bag <small>({count})</small></h2><button onClick={() => setOpen(false)}>×</button></div>{cart.length === 0 ? <div className="empty"><span>◌</span><p>Your bag is waiting for a little crunch.</p><button className="button primary" onClick={() => { setOpen(false); document.getElementById('shop').scrollIntoView({behavior:'smooth'}); }}>Shop snacks</button></div> : <><div className="cart-items">{cart.map((item) => <div className="cart-item" key={item.id}><img src={item.image} alt=""/><div><h3>{item.name}</h3><p>₹{item.price} · {item.size}</p><div className="quantity"><button onClick={() => setCart(cart.map(x => x.id === item.id ? {...x, qty: Math.max(1,x.qty-1)}:x))}>−</button><b>{item.qty}</b><button onClick={() => setCart(cart.map(x => x.id === item.id ? {...x, qty:x.qty+1}:x))}>+</button></div></div></div>)}</div><div className="checkout"><p><span>Subtotal</span><strong>₹{total}</strong></p><button className="button primary">Secure checkout <span>→</span></button><small>Shipping calculated at checkout.</small></div></>}</aside>{open && <button className="overlay" onClick={() => setOpen(false)} aria-label="Close cart"/>}
  </main>;
}
