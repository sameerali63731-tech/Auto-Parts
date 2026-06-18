import {
  ShieldIcon,
  TruckIcon,
  DollarIcon,
  CheckBadgeIcon,
  TagIcon,
  BoxIcon,
  HeadsetIcon,
  EngineIcon,
  WrenchIcon,
  SearchIcon,
  PhoneIcon,
  ClockIcon,
  UsersIcon,
  GearIcon,
  CarIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  MapPinIcon,
  MailIcon,
} from "./components/Icons";
import Header from "./components/Header";

// Prefix for static assets so they resolve under the GitHub Pages base path.
const ASSET = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Logo = ({ light = true }: { light?: boolean }) => (
  <div className="logo">
    <span className="logo-mark">
      <EngineIcon width={20} height={20} />
    </span>
    <span className="logo-text" style={{ color: light ? "#fff" : "#111" }}>
      Power<span>Source</span>
      <small>AUTO REPAIR</small>
    </span>
  </div>
);

const products = [
  {
    title: "5.7L HEMI Engine",
    sub: "Dodge / Ram",
    price: "$2,199.00",
    img: "/assets/gears.jpeg",
  },
  {
    title: "6L80E Transmission",
    sub: "Chevrolet / GMC",
    price: "$1,899.00",
    img: "/assets/transmission1.webp",
  },
  {
    title: "3.6L V6 Engine",
    sub: "Chrysler / Dodge",
    price: "$1,749.00",
    img: "/assets/engine.jpg",
  },
  {
    title: "4L60E Transmission",
    sub: "Chevrolet / GMC",
    price: "$1,599.00",
    img: "/assets/transmission2.jpg",
  },
];

const features = [
  {
    icon: <CheckBadgeIcon />,
    title: "Quality You Can Trust",
    text: "Every engine and transmission is inspected and tested for reliability and performance.",
  },
  {
    icon: <TagIcon />,
    title: "Best Prices",
    text: "We offer competitive prices without compromising on quality.",
  },
  {
    icon: <BoxIcon />,
    title: "Wide Selection",
    text: "A large inventory of engines and transmissions for foreign and domestic vehicles.",
  },
  {
    icon: <HeadsetIcon />,
    title: "Expert Support",
    text: "Our team is here to help you find the right part for your vehicle.",
  },
];

const steps = [
  {
    n: "01",
    title: "Book Appointment",
    text: "Call us or fill out our online form to schedule a convenient time for your visit.",
  },
  {
    n: "02",
    title: "Free Inspection",
    text: "We diagnose your vehicle and provide a clear, itemized estimate before any work begins.",
  },
  {
    n: "03",
    title: "Quality Repair",
    text: "Our certified mechanics complete the repair with precision. We test everything before you pick it up.",
  },
];

const testimonials = [
  {
    text: "PowerSource rebuilt the transmission on my Ford F-150. They finished a day early and the price was exactly what they quoted. No surprises. Highly recommend!",
    name: "James D.",
    role: "Ford F-150 Owner",
    initials: "JD",
  },
  {
    text: "I've been bringing my cars here for over 5 years. Honest, skilled, and fair. They saved me thousands compared to the dealership quotes.",
    name: "Sarah M.",
    role: "Returning Customer",
    initials: "SM",
  },
  {
    text: "Fast, professional, and thorough. My check engine light came on and they diagnosed it and had it fixed the same day. Great communication throughout.",
    name: "Mike R.",
    role: "Honda Civic Owner",
    initials: "MR",
  },
];

const brands = [
  "TOYOTA",
  "FORD",
  "HONDA",
  "BMW",
  "MERCEDES",
  "NISSAN",
  "CHEVROLET",
  "DODGE",
];

const stats = [
  { icon: <UsersIcon />, num: "10,000+", label: "Happy Customers" },
  { icon: <GearIcon />, num: "15,000+", label: "Engines Sold" },
  { icon: <ShieldIcon />, num: "90 Days", label: "Warranty" },
  { icon: <TruckIcon />, num: "Nationwide", label: "Shipping" },
  { icon: <HeadsetIcon />, num: "24/7", label: "Support" },
];

export default function Home() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <Header />

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-bg">
          <img src={`${ASSET}/assets/hero.png`} alt="Engine and transmission" />
        </div>
        <div className="hero-stripe" />
        <div className="container">
          <div className="hero-eyebrow">Premium Quality</div>
          <h1>
            ENGINES &amp; <span className="text-red">TRANSMISSIONS</span> FOR
            SALE
          </h1>
          <p className="lead">
            High quality tested engines and transmissions. Built to perform.
            Backed by warranty. Delivered to your door.
          </p>
          <div className="hero-features">
            <div className="hero-feature">
              <ShieldIcon /> Quality Tested
            </div>
            <div className="hero-feature">
              <DollarIcon /> Low Prices
            </div>
            <div className="hero-feature">
              <TruckIcon /> Fast Shipping
            </div>
          </div>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-red">
              <EngineIcon width={18} height={18} /> Shop Engines
            </a>
            <a href="#services" className="btn btn-dark">
              <GearIcon width={18} height={18} /> Shop Transmissions
            </a>
          </div>

          <div className="hero-card">
            <div className="hero-card-item">
              <span className="ic">
                <ShieldIcon width={20} height={20} />
              </span>
              <div>
                <strong>90 Days</strong>
                <span>Warranty</span>
              </div>
            </div>
            <div className="hero-card-item">
              <span className="ic">
                <TruckIcon width={20} height={20} />
              </span>
              <div>
                <strong>Nationwide</strong>
                <span>Shipping</span>
              </div>
            </div>
            <div className="hero-card-item">
              <span className="ic">
                <DollarIcon width={20} height={20} />
              </span>
              <div>
                <strong>Money Back</strong>
                <span>Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="features" id="about">
        <div className="container">
          <div className="features-grid">
            {features.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-ic">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INVENTORY ===== */}
      <section className="inventory" id="services">
        <div className="container">
          <div className="inventory-head">
            <h2>
              <span className="text-red">Our</span> Top Selling Inventory
            </h2>
            <a href="#" className="view-all">
              VIEW ALL INVENTORY
            </a>
          </div>
          <div className="inventory-grid">
            {products.map((p) => (
              <div className="product-card" key={p.title}>
                <div className="product-img">
                  <img src={`${ASSET}${p.img}`} alt={p.title} />
                </div>
                <div className="product-body">
                  <h4>{p.title}</h4>
                  <div className="sub">{p.sub}</div>
                  <div className="product-price">{p.price}</div>
                  <a href="#contact" className="btn btn-red">
                    VIEW DETAILS
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-dots">
            <span className="arrow">
              <ArrowLeftIcon />
            </span>
            <span className="arrow">
              <ArrowRightIcon />
            </span>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="process">
        <div className="container">
          <div className="eyebrow center">How It Works</div>
          <h2 className="section-title" style={{ marginTop: 14 }}>
            Simple <span className="text-red">3-Step</span> Process
          </h2>
          <p className="section-sub">
            Getting your car fixed has never been easier. Just three simple steps
            and you&apos;re back on the road.
          </p>
          <div className="steps">
            {steps.map((s) => (
              <div className="step" key={s.n}>
                <div className="step-num">{s.n}</div>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="eyebrow center">Testimonials</div>
          <h2 className="section-title" style={{ marginTop: 14 }}>
            What Our <span className="text-red">Customers Say</span>
          </h2>
          <p className="section-sub" style={{ color: "#b5b5b5" }}>
            Don&apos;t just take our word for it. Here&apos;s what our customers
            have to say about our service.
          </p>
          <div className="testi-grid">
            {testimonials.map((t) => (
              <div className="testi-card" key={t.name}>
                <div className="stars">★★★★★</div>
                <p>&ldquo;{t.text}&rdquo;</p>
                <div className="testi-author">
                  <span className="testi-avatar">{t.initials}</span>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BRANDS ===== */}
      <section className="brands">
        <div className="container">
          <div className="eyebrow center">We Service All Makes</div>
          <h2 className="section-title" style={{ marginTop: 14 }}>
            Domestic &amp; <span className="text-red">Import</span> Specialists
          </h2>
          <p className="section-sub">
            We service and repair all major vehicle brands with
            manufacturer-grade diagnostic equipment.
          </p>
          <div className="brand-pills">
            {brands.map((b) => (
              <span className="brand-pill" key={b}>
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats">
        <div className="container">
          <div className="eyebrow center">Why Choose Us</div>
          <div className="stats-grid">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                {s.icon}
                <strong>{s.num}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA + FORM ===== */}
      <section className="cta-section" id="contact">
        <div className="container">
          <div className="cta-grid">
            <div className="cta-engine">
              <img src={`${ASSET}/assets/cta-engine.svg`} alt="Engine" />
            </div>
            <div className="cta-left">
              <h2>
                CAN&apos;T FIND WHAT
                <br />
                YOU&apos;RE LOOKING FOR?
              </h2>
              <p>
                Contact our experts and we&apos;ll help you find the perfect
                engine or transmission.
              </p>
              <a href="tel:8881234567" className="btn">
                <PhoneIcon width={18} height={18} /> (888) 123-4567
              </a>
            </div>

            <form className="cta-form">
              <h3>Book an Appointment</h3>
              <p className="hint">
                Fill out the form and we&apos;ll confirm your appointment within
                1 hour.
              </p>
              <div className="form-row">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email Address" />
              </div>
              <input type="tel" placeholder="Phone Number" />
              <input type="text" placeholder="Vehicle Year, Make &amp; Model" />
              <select defaultValue="">
                <option value="" disabled>
                  Select Service Needed
                </option>
                <option>Engine Replacement</option>
                <option>Transmission Repair</option>
                <option>Diagnostics</option>
                <option>Brake Service</option>
                <option>Oil Change</option>
              </select>
              <textarea placeholder="Describe the issue (optional)" />
              <button type="submit" className="btn btn-red">
                BOOK APPOINTMENT
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <Logo />
              <p>
                Family owned auto repair shop serving Houston since 2009. We
                treat every car like it&apos;s our own.
              </p>
              <div className="socials">
                <a href="#" aria-label="Facebook">
                  <FacebookIcon />
                </a>
                <a href="#" aria-label="Twitter">
                  <TwitterIcon />
                </a>
                <a href="#" aria-label="Instagram">
                  <InstagramIcon />
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#">Engine Repair</a>
                </li>
                <li>
                  <a href="#">Transmission</a>
                </li>
                <li>
                  <a href="#">Brake Service</a>
                </li>
                <li>
                  <a href="#">Oil Change</a>
                </li>
                <li>
                  <a href="#">Diagnostics</a>
                </li>
              </ul>
            </div>

            <div className="footer-col footer-contact">
              <h4>Contact Info</h4>
              <div className="row">
                <MapPinIcon />
                <span>1234 Auto Drive, Houston, TX 77001</span>
              </div>
              <div className="row">
                <PhoneIcon />
                <span>(888) 123-4567</span>
              </div>
              <div className="row">
                <MailIcon />
                <span>info@powersourcerepair.com</span>
              </div>
              <div className="row">
                <ClockIcon />
                <span>
                  Mon-Fri: 7AM-6PM
                  <br />
                  Sat: 8AM-4PM, Sun: Closed
                </span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 PowerSource Auto Repair. All rights reserved.</span>
            <div className="links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
