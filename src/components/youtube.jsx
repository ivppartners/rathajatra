import "./youtube.css";

const Youtube = ({ className, src, title }) => {
  return (
    <iframe
      className={className}
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    ></iframe>
  );
};

export default Youtube;
