import React from "react";
import Lottie from "lottie-react";
import LoadingAnimation from "@/LottieFiles/Loading.json";

const Loading: React.FC = () => {
  return <Lottie className="flex justify-center items-center h-screen" animationData={LoadingAnimation} loop={true} />;
};

export default Loading
