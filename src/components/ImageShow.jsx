const ImageShow = (image) => {
  return (
    <div>
      <img src={image.image.urls.small} alt={image.image.alt_description} />
    </div>
  );
};

export default ImageShow;
