import BeanieBaby from './BeanieBaby';
import { Link } from 'react-router-dom';

export default function BeaniesList({ beanieBabies }) {
  return (
    <div className='beanies-list'>
      {
        beanieBabies.map((beanieBaby, i) =>
        {
          return <div className='beanie' key={beanieBaby.title + i + beanieBaby.id}>
            <BeanieBaby beanieBaby={beanieBaby} name={beanieBaby.name} image={beanieBaby.image} />
            <p>{beanieBaby.title}</p>
          </div>;
        })}
    </div>
  );
}
