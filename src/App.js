import './categories.styles.scss'
const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Mugs'
    },
    {
      id: 2,
      title: 'Bowls'
    },
    {
      id: 3,
      title: 'Plates'
    },
    {
      id: 4,
      title: 'Vases'
    },
    {
      id: 5,
      title: 'Accessories'
    }
  ]

  return (
    <div className="categories-container">
    {categories.map(({title, id}) => (
      <div key={id} className="category-container">
      <div className="background-image"/>
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop now</p>
        </div>
      </div>
      ))}
    </div>
  );
};

export default App;
