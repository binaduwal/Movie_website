interface Video {
  id: string;
  title: string;
}

interface Props {
  videos: Video[];
  activeId: string;
  onSelect: (video: Video) => void;
}

const VideoList = ({ videos, activeId, onSelect }: Props) => {
  return (
    <div className="space-y-3">
      {videos.map((video) => (
        <div
          key={video.id}
          onClick={() => onSelect(video)}
          className={`flex gap-3 cursor-pointer p-2 rounded-lg transition ${
            activeId === video.id
              ? "bg-gray-200"
              : "hover:bg-gray-100"
          }`}
        >
          <img
            src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
            className="w-32 h-20 object-cover rounded-md"
            alt={video.title}
          />

          <p className="text-sm font-medium line-clamp-2">
            {video.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default VideoList;