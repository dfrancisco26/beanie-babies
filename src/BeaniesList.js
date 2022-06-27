import BeanieBaby from './BeanieBaby';

export default function BeaniesList({ beanieBabies }) {
  return (
    <div className='beanies-list'>
      {
        beanieBabies.map((beanieBaby, i) =>
        {
          return <div className='beanie' key={beanieBaby.title + i + beanieBaby.id}>
            <BeanieBaby beanieBaby={beanieBaby} name={beanieBaby.name} image={beanieBaby.image} />
          </div>;
        })}
    </div>
  );
}
