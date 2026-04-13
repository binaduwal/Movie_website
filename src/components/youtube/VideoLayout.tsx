import { useState } from "react";
import YouTubePlayer from "./YouTubePlayer";
import VideoList from "./VideoList";
import { videos } from "../../constants/videos";
import SectionTitle from "../common/SectionTitle";

const VideoLayout = () => {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <section className="max-w-7xl mx-auto px-4 mb-12">
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex-[2]">
        <SectionTitle title="In Theatre"/>
        <YouTubePlayer videoId={activeVideo.id} />
        <h2 className="mt-3 text-lg font-semibold">
          {activeVideo.title}
        </h2>
      </div>

      {/* RIGHT */}
      <div className="flex-1 max-h-[500px] overflow-y-auto my-18">
        <VideoList
          videos={videos}
          activeId={activeVideo.id}
          onSelect={setActiveVideo}
        />
      </div>
    </div>

    </section>
  );
};

export default VideoLayout;