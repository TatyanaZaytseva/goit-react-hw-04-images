import { Toaster } from 'react-hot-toast';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import css from 'components/App/App.module.css';
import { useState } from 'react';

export function App() {
  const [imageName, setImageName] = useState('');
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);

  const handleFormSubmit = imageName => {
    setImageName(imageName);
    setPage(1);
  };

  const onLoadMoreClick = () => {
    setPage(page => page + 1);
  };

  return (
    <div className={css.wrapper}>
      <Toaster />
      <SearchBar onSubmit={handleFormSubmit} />
      <ImageGallery imageName={imageName} setStatus={setStatus} page={page} />
      {status === 'loading' && <Loader />}
      {status === 'resolved' && <Button onClick={onLoadMoreClick} />}
    </div>
  );
}
