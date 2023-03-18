import "@google/model-viewer";
import { ModelViewerElement } from "@google/model-viewer";
import { useRef } from "react";

export default function HTMLModel() {
  const modelViewer = useRef<ModelViewerElement>(null);

  return (
    <div
      className="flex flex-1 items-center"
      // onMouseMove={(e) => {
      //   const x =
      //     (e.pageX - e.currentTarget.offsetLeft) / e.currentTarget.offsetWidth;
      //   const y =
      //     (e.pageY - e.currentTarget.offsetTop) / e.currentTarget.offsetHeight;
      //   console.log(x, y, e.currentTarget.offsetWidth);
      //   if (modelViewer.current) {
      //     modelViewer.current.cameraOrbit = `${(1 - x) * 180}deg ${
      //       (1 - y) * 180
      //     }deg 100%`;
      //   }
      // }}
    >
      <model-viewer
        ref={modelViewer}
        camera-controls
        auto-rotation
        shadow-intensity="1"
        camera-orbit="90deg 90deg 100%"
        src="/world.glb"
        // @ts-ignore
        class="w-full h-52"
      ></model-viewer>
    </div>
  );
}
