import { Link } from 'react-router-dom';

export default function BeanieBaby({ ...beanieBaby }, i) {
  return (

    <div className='beanies-list'>
      <Link key={beanieBaby.title + beanieBaby.id + i} to={`./BeanieDetail/${beanieBaby.id}`}>
        <div className='beanie'>
          <h3>{beanieBaby.title}</h3>
          <img src={beanieBaby.image} />
        </div>
      </Link>
    </div>
  );
}
