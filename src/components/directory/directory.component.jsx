import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const Directory = () => {
  const categories = [
    {
      id: 1,
      title: 'mugs',
      imageUrl: 'https://images.unsplash.com/photo-1590422749897-47036da0b0ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      route: 'shop/mugs'
    },
    {
      id: 2,
      title: 'bowls',
      imageUrl: 'https://images.unsplash.com/photo-1612058060757-aa8f7f66e687?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      route: 'shop/bowls'
    },
    {
      id: 3,
      title: 'plates',
      imageUrl: 'https://images.unsplash.com/photo-1633856859910-ab62d9cf10c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      route: 'shop/plates'
    },
    {
      id: 4,
      title: 'vases',
      imageUrl: 'https://images.unsplash.com/photo-1631125915902-d8abe9225ff2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      route: 'shop/vases'
    },
    {
      id: 5,
      title: 'accessories',
      imageUrl: 'https://images.unsplash.com/photo-1595351298020-038700609878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      route: 'shop/accessories'
    }
  ]
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;