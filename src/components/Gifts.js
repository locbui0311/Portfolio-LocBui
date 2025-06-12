import React, { useEffect, useState } from "react";
///// React hooks: Two-way binding

// useEffect
// 1. Cập nhật lại state
// 2. Cập nhật Dom (mutated)
// 3. Render lại UI
// 4. Gọi cleanup nếu deps thay đổi
// 5. Gọi useEffect callback


// useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật Dom (mutated)
// 3. Gọi cleanup nếu deps thay đổi(sync)
// 4. Gọi useEffect callback (sync)
// 5. Render lại UI 
const gifts = ["Thẻ cào 20k", "Thẻ cào 50k", "Thẻ cào 100k"];

const coursers = [
  {
    id: 1,
    name: "ReactJS",
    price: 100,
  },
  {
    id: 2,
    name: "NodeJS",
    price: 200,
  },
  {
    id: 3,
    name: "JavaScript",
    price: 300,
  },
];
const Gifts = () => {
    /////// UseEffect() => {Preview Avatar}
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    if (file) {
      file.preview = URL.createObjectURL(file);
      setAvatar(file);
    }
  };
  ///////////////////////////////////////////////////////


  return (
    <div className="section flex flex-col items-start" id="gifts">
      <div className="container mx-auto">
        <h2 className="h2 text-center mb-8">Avatar Preview</h2>
        <div className="flex flex-col items-center gap-4">
          <input 
            type="file" 
            onChange={handlePreviewAvatar}
            className="text-white"
            accept="image/*"
          />
          {avatar && (
            <img 
              src={avatar.preview} 
              alt="Preview" 
              className="max-w-[300px] rounded-lg shadow-lg"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Gifts;
