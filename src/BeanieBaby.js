import { Link } from 'react-router-dom';

export default function BeanieBaby({ beanieBaby }, i) {
  return (

    <div className='beanies-list'>
      <Link key={beanieBaby.title + beanieBaby.id + i} to={`./beanieDetail/${beanieBaby.id}`}>
        <div className='beanie-baby'>
          <h3>{beanieBaby.title}</h3>
          <img className='beanie-img' src={beanieBaby.image} />
        </div>
      </Link>
    </div>
  );
}
