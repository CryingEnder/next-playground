import React from "react";

const UserPhoto = ({
  params: { photoId, id },
}: {
  params: { photoId: number; id: number };
}) => {
  return (
    <div className="text-black">
      UserPhoto {id} {photoId}
    </div>
  );
};

export default UserPhoto;
