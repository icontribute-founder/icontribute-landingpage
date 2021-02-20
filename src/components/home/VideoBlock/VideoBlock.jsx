import React from 'react';
import './VideoBlock.css';

export default function VideoBlock() {
  return (
    <div className="VideoBlock" data-aos="fade-up">
      <h2 className="VideoBlock-header">How it works:</h2>
      <iframe
        title="iContribute launch video"
        className="VideoBlock-embed"
        src="https://drive.google.com/file/d/1tj2jsvMgDrHY7MHLsTzh0Qf7kaLlK-Rv/preview"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        frameborder="0"
      />
    </div>
  );
}
