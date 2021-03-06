import React, { useState, useEffect, useCallback } from "react";
import youtube from "../apis/youtube";

const YoutubeEmbed = ({ query }) => {
  console.log(query);
  const [trailer, setTrailer] = useState({ id: { videoId: "" } });
  const fetchTrailer = useCallback(async (query) => {
    console.log({ trailer });
    const response = await youtube.get("/search", {
      params: {
        q: query + " trailer",
      },
    });
    setTrailer(response.data.items[0]);
  }, [trailer]);

  useEffect(() => {
    fetchTrailer(query);
  }, [query, fetchTrailer]);

  return (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        frameBorder="0"
        allowFullScreen
        title="Embedded youtube"
        // src={`https://youtube.com/embed/${trailer.id.videoId}`}
        src={`https://youtube.com/embed/odM92ap8_c0`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
};

export default YoutubeEmbed;
