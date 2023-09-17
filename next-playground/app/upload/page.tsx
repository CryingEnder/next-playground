"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

type CloudinaryResult = {
  public_id: string;
};

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="A coffee image"
        />
      )}
      <CldUploadWidget
        onUpload={(result, widget) => {
          if (result.event !== "success") {
            return;
          }
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
        uploadPreset="pmym57wf"
      >
        {({ open }) => (
          <button onClick={() => open()} className="btn btn-primary">
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
