interface Props {
  videoId: string;
}

const YouTubePlayer = ({ videoId }: Props) => {
  return (
    <iframe
      className="w-full h-[450px] rounded-xl"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
      title="YouTube player"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
  );
};

export default YouTubePlayer;