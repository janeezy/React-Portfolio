import React from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import './BooksShelf.css';

// Each card has its own product URL. Store/author links belong only in the footer.
// qpdnta is Reset; janeezy is the membership, never a book destination.
export const BOOKS = [
  {
    id: 'nobody-pays',
    title: 'Nobody Pays You for Working Hard Anymore',
    image: '/new-book.jpg',
    href: 'https://www.amazon.com/Nobody-Pays-Working-Hard-Anymore-ebook/dp/B0HJDL4R17',
    retailer: 'Amazon',
    newest: true,
    frontCover: true,
  },
  {
    id: 'reset',
    title: 'Reset: Abundance, Alignment, and the Nervous System',
    image: '/reset-book.jpg',
    href: 'https://iamjaneezystore.gumroad.com/l/qpdnta',
    retailer: 'Gumroad',
  },
  {
    id: 'quiet-the-noise',
    title: 'Quiet the Noise',
    image: '/quiet-the-noise.png',
    href: 'https://iamjaneezystore.gumroad.com/l/vieeyb',
    retailer: 'Gumroad',
    amazonHref: 'https://a.co/d/0cxUSUnC',
  },
  {
    id: 'selective-empathy',
    title: 'Selective Empathy',
    image: '/book-selective-empathy.png',
    href: 'https://iamjaneezystore.gumroad.com/l/ikgpou',
    retailer: 'Gumroad',
    amazonHref: 'https://a.co/d/03ilrJ8u',
  },
  {
    id: 'ai-prompts',
    title: '50 AI Prompts to Make Money',
    image: '/book-ai-prompts.png',
    href: 'https://iamjaneezystore.gumroad.com/l/iskap',
    retailer: 'Gumroad',
  },
];

export default function BooksShelf() {
  return (
    <section className="section bookshelf" id="books" aria-labelledby="books-title">
      <header className="shelf-heading">
        <div>
          <small>AUTHOR · CREATOR</small>
          <h2 id="books-title">I build with code.<br />I write, too.</h2>
        </div>
        <p>Books on how we think, what we create and the lives we build.</p>
      </header>

      <div className="shelf-grid">
        {BOOKS.map((book) => (
          <article className="shelf-item" key={book.id}>
            <a
              className={`shelf-card${book.newest ? ' shelf-card--new' : ''}`}
              href={book.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Get ${book.title} on ${book.retailer} (opens in a new tab)`}
              data-book-id={book.id}
            >
              <div className="shelf-media">
                {book.newest && <span className="shelf-badge">NEWEST RELEASE</span>}
                <div className={`shelf-cover${book.frontCover ? ' shelf-cover--front' : ''}`}>
                  <img src={book.image} alt={`${book.title} book cover`} loading="lazy" decoding="async" />
                </div>
              </div>
              <div className="shelf-info">
                <span className="shelf-author">JANE DURU</span>
                <h3>{book.title}</h3>
                <span className="shelf-buy">
                  <span>View on {book.retailer}</span>
                  <ArrowUpRight size={17} aria-hidden="true" />
                </span>
              </div>
            </a>
            {book.amazonHref && <a className="shelf-amazon" href={book.amazonHref} target="_blank" rel="noopener noreferrer" aria-label={`Buy physical copy of ${book.title} on Amazon`}>Buy physical book on Amazon <ArrowUpRight size={15} aria-hidden="true" /></a>}
          </article>
        ))}
      </div>

      <div className="shelf-footer">
        <span className="shelf-signature"><BookOpen size={16} aria-hidden="true" /> Written by Jane. Made to be useful.</span>
        <div className="shelf-store-links" aria-label="Browse all books">
          <a href="https://amazon.com/author/janeduru" target="_blank" rel="noopener noreferrer">Amazon author page <ArrowUpRight size={14} aria-hidden="true" /></a>
          <a href="https://iamjaneezystore.gumroad.com" target="_blank" rel="noopener noreferrer">Browse Gumroad store <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
