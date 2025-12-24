import "./youtube.css";

const Youtube = ({ className, src, title }) => {
  // Validate that src is a YouTube embed URL to prevent XSS
  const isValidYouTubeUrl = (url) => {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname === 'www.youtube.com' && urlObj.pathname.startsWith('/embed/');
    } catch {
      return false;
    }
  };

  if (!isValidYouTubeUrl(src)) {
    console.error('Invalid YouTube URL:', src);
    return null;
  }

  return (
    <iframe
      className={className}
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      referrerpolicy="strict-origin-when-cross-origin" 
      allowFullScreen
      title={title}
    ></iframe>
  );
};

export default Youtube;
