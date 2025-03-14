import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const ModelWithAnimation = ({ url, position, animationName }) => {
  const group = useRef();
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      // Stop all animations first
      Object.values(actions).forEach((action) => action.stop());

      // Play the selected animation
      if (actions[animationName]) {
        actions[animationName].reset().fadeIn(0.5).play();
      }
    }
  }, [actions, animationName]);

  return <primitive object={scene} ref={group} position={position} />;
};

export default ModelWithAnimation;
