// "use client";

// import { Canvas } from "@react-three/fiber";
// import React, { Suspense } from "react";
// import { BoxGeometry, MeshBasicMaterial } from "three";

// interface Props {
//   className?: string;
// }

// export const InteractiveSkateboard: React.FC<Props> = ({ className }) => {
//   return (
//     <div className=" absolute inset-0 z-10 items-center justify-center">
//       <Canvas className="min-h-[60rem] w-full">
//         <Suspense>
//           <Scene />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// };

// function Scene() {
//   return (
//     <group>
//       <mesh>
//         <MeshBasicMaterial />
//         <BoxGeometry />
//       </mesh>
//     </group>
//   );
// }
