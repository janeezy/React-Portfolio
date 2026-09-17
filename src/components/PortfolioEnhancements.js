import {useEffect} from 'react';
import './PortfolioEnhancements.css';

const AMAZON_NEW='https://a.co/d/0j3K9vrN';
const GUMROAD_NEW='https://iamjaneezystore.gumroad.com/l/qpdnta';
const GUMROAD_STORE='https://iamjaneezystore.gumroad.com';

export default function PortfolioEnhancements(){
  useEffect(()=>{
    const books=document.querySelector('#books');
    if(!books) return;
    const grid=books.querySelector('.bookgrid');
    if(grid && !grid.querySelector('.newest-book')){
      const card=document.createElement('a');
      card.className='book newest-book';
      card.href=AMAZON_NEW; card.target='_blank'; card.rel='noreferrer';
      card.innerHTML=`<img src="/new-book.jpg" alt="Nobody Pays You for Working Hard Anymore"/><div><span>NEW · JANE DURU</span><b>Nobody Pays You for Working Hard Anymore</b><small>View new book ↗</small></div>`;
      grid.prepend(card);
    }
    if(!books.querySelector('.store-actions')){
      const old=books.querySelector('.bookcta');
      const actions=document.createElement('div'); actions.className='store-actions';
      actions.innerHTML=`<a class="pill" href="${AMAZON_NEW}" target="_blank" rel="noreferrer">New book on Amazon ↗</a><a class="pill gumroad" href="${GUMROAD_NEW}" target="_blank" rel="noreferrer">New book on Gumroad ↗</a><a class="pill" href="${GUMROAD_STORE}" target="_blank" rel="noreferrer">Browse Gumroad store ↗</a>`;
      if(old){old.replaceWith(actions)} else {books.appendChild(actions)}
    }
  },[]);
  return null;
}
