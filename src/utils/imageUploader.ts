const uploadImageToImgBB = async (imageData: File) => {
  try {
    const formData = new FormData();
    formData.append("image", imageData);

    const response = await fetch(
      "https://api.imgbb.com/1/upload?key=d8a9fedfebfcbc0c9c3499b0f6de1d2f",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to upload image: ${response.status}`);
    }

    const data = await response.json();
    return data.data.url;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export default uploadImageToImgBB;
