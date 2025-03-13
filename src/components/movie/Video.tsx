import video from '../../assets/videos/titanic.mp4';

export const Video = () => {
  return (
    <div className="video-wrapper">
      <video controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};
